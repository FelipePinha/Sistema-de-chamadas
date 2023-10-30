import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import fetchApi from '../axios/axiosConfig';

export const useClient = () => {
    const queryClient = useQueryClient();

    const registerCustomerMutation = useMutation({
        mutationFn: async newCompany => {
            await fetchApi
                .post('/client', newCompany)
                .then(res => {
                    console.log(res.data);
                })
                .catch(reject => {
                    console.log(reject.response.data);
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
