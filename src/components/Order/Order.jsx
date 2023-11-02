import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { Link, useNavigate } from 'react-router-dom';

import { MagnifyingGlass, PencilSimple } from '@phosphor-icons/react';
import Badge from '../Badge/Badge';
import './_Order.scss';

const Order = ({ order, setModalIsOpen }) => {
    const { handleChangeSelectedOrder, selectedOrder } = useContext(OrderContext);
    const navigate = useNavigate();
    const date = new Date();
    const formattedDate = date.toLocaleString('pt-BR', { timeZone: 'UTC' }).split(',')[0];

    const handleOpenModal = () => {
        const { createdat, ...orderWithFormattedDate } = order;
        orderWithFormattedDate.createdat = formattedDate;
        handleChangeSelectedOrder(orderWithFormattedDate);
        setModalIsOpen(true);
    };

    const handleNavigateToEditOrder = () => {
        const { createdat, ...orderWithFormattedDate } = order;
        orderWithFormattedDate.createdat = formattedDate;
        handleChangeSelectedOrder(orderWithFormattedDate);
        navigate(`/new/${order.id}`);
    };

    return (
        <tr>
            <td data-label="Cliente">{order.company_name}</td>
            <td data-label="Assunto">{order.subject}</td>
            <Badge status={order.status} />
            <td data-label="Cadastrado">{formattedDate}</td>
            <td data-label="Ações" className="table-actions">
                <div className="actions">
                    <button onClick={handleOpenModal}>
                        <MagnifyingGlass size={16} />
                    </button>
                    <Link onClick={handleNavigateToEditOrder} className="edit-order-link">
                        <PencilSimple size={16} />
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default Order;
