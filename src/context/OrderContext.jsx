import { useState, createContext } from 'react';

export const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
    const [selectedOrder, setSelectedOrder] = useState({});

    const handleChangeSelectedOrder = order => {
        setSelectedOrder(order);
    };

    return (
        <OrderContext.Provider value={{ selectedOrder, handleChangeSelectedOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
