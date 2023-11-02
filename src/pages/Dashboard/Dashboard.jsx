import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Link, useNavigate } from 'react-router-dom';
import { useOrder } from '../../hooks/useOrder';
import Order from '../../components/Order/Order';
import Modal from '../../components/Modal/Modal';

import { Chat, Plus } from '@phosphor-icons/react';

import './_Dashboard.scss';

export const Dashboard = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();
    const { listOrders } = useOrder();
    const { data, isLoading } = listOrders();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <section className="dashboard-content">
                <Title title="Atendimentos" icon={<Chat size={30} />} />
                <Link to="/new" className="new-order-link">
                    <Plus />
                    Novo Chamado
                </Link>

                <table>
                    <thead>
                        <tr>
                            <th>CLIENTE</th>
                            <th>ASSUNTO</th>
                            <th>STATUS</th>
                            <th>CADASTRO EM</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td>Carregando...</td>
                            </tr>
                        ) : (
                            data.map(order => (
                                <Order
                                    key={order.id}
                                    order={order}
                                    setModalIsOpen={setModalIsOpen}
                                />
                            ))
                        )}
                    </tbody>
                </table>

                <button className="show-more">Buscar Mais</button>
            </section>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </div>
    );
};
