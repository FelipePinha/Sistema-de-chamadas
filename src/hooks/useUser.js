import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetchApi from '../axios/axiosConfig';

export const useUser = () => {
    const queryClient = useQueryClient();

    const registerUserMutation = useMutation({
        mutationFn: async newUser => {
            await fetchApi
                .post('/register', newUser)
                .then(res => {
                    const { password, ...user } = res.data;
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/dashboard');
                })
                .catch(reject => {
                    console.log(reject.response.data);
                });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    const loginUserMutation = useMutation({
        mutationFn: async user => {
            await fetchApi
                .post('/login', user)
                .then(res => {
                    const { password, ...LoggedUser } = res.data;
                    localStorage.setItem('user', JSON.stringify(LoggedUser));
                    navigate('/dashboard');
                })
                .catch(reject => {
                    console.log(reject.response.data);
                });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    const updateUserMutation = useMutation({
        mutationFn: async newUsername => {
            const localUser = JSON.parse(localStorage.getItem('user'));
            localUser.name = newUsername;

            await fetchApi.put(`/user/${localUser.id}`, { name: newUsername }).then(res => {
                localStorage.setItem('user', JSON.stringify(localUser));
                console.log('nome alterado com sucesso');
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    return { updateUserMutation, loginUserMutation, registerUserMutation };
};
