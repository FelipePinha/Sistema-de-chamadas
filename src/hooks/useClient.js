import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import fetchApi from '../axios/axiosConfig';
import { toast } from 'react-toastify';

export const useClient = () => {
    const queryClient = useQueryClient();

    const registerCustomerMutation = useMutation({
        mutationFn: async newCompany => {
            await fetchApi
                .post('/client', newCompany)
                .then(() => {
                    toast.success('Cliente cadastrado com sucesso!', {
                        theme: 'colored',
                    });
                })
                .catch(reject => {
                    toast.error(reject.response.data.message, {
                        theme: 'colored',
                    });
                    return;
                });
        },
        onSuccess: () => {
            queryClient.invalidateQueries('clients');
        },
    });

    const getClients = () => {
        return useQuery({
            queryKey: ['clients'],
            queryFn: async () => {
                const { data } = await fetchApi.get('/client');

                return data;
            },
        });
    };

    return {
        registerCustomerMutation,
        getClients,
    };
};
