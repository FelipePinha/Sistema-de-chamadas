import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import fetchApi from '../axios/axiosConfig';

export const useOrder = () => {
    const queryClient = useQueryClient();

    const registerOrderMutation = useMutation({
        mutationFn: async newOrder => {
            await fetchApi
                .post('/orders', newOrder)
                .then(res => {
                    console.log(res.data);
                })
                .catch(reject => {
                    console.log(reject.response.data);
                });
        },
        onSuccess: () => {
            queryClient.invalidateQueries('orders');
        },
    });

    return { registerOrderMutation };
};
