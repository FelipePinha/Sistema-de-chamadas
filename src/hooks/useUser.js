import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
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
                    toast.error(reject.response.data.message, { theme: 'colored' });
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
                    toast.error(reject.response.data.message, { theme: 'colored' });
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
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    return { updateUserMutation, loginUserMutation, registerUserMutation };
};
