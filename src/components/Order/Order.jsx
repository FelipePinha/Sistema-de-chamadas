import { MagnifyingGlass, PencilSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';
import './_Order.scss';

const Order = ({ order }) => {
    return (
        <tr>
            <td data-label="Cliente">{order.company_name}</td>
            <td data-label="Assunto">{order.subject}</td>
            <Badge status={order.status} />
            <td data-label="Cadastrado">17/10/2023</td>
            <td data-label="Ações" className="table-actions">
                <div className="actions">
                    <button>
                        <MagnifyingGlass size={16} />
                    </button>
                    <Link className="edit-order-link">
                        <PencilSimple size={16} />
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default Order;
