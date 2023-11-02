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

    const updateOrder = useMutation({
        mutationFn: async updatedOrder => {
            await fetchApi
                .put(`/orders/${updatedOrder.id}`, updatedOrder)
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

    const listOrders = () => {
        return useQuery({
            queryKey: ['orders'],
            queryFn: async () => {
                const { data } = await fetchApi.get('/orders');

                return data;
            },
        });
    };

    const listSelectedOrder = id => {
        return useQuery({
            queryKey: ['orders'],
            queryFn: async () => {
                const { data } = await fetchApi.get(`/orders/${id}`);

                return data;
            },
        });
    };

    return { registerOrderMutation, listOrders, listSelectedOrder, updateOrder };
};
