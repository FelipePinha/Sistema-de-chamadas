import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Link, useNavigate } from 'react-router-dom';
import { useOrder } from '../../hooks/useOrder';
import { toast } from 'react-toastify';
import Order from '../../components/Order/Order';
import Modal from '../../components/Modal/Modal';

import { Chat, Plus } from '@phosphor-icons/react';

import './_Dashboard.scss';

export const Dashboard = () => {
    const hasUser = localStorage.getItem('user');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [visible, setVisible] = useState(5);
    const [loadMoreButtonStatus, setLoadMoreButtonStatus] = useState('');

    const navigate = useNavigate();
    const { listOrders } = useOrder();
    const { data: orders, isLoading } = listOrders();

    const handleLoadMore = () => {
        if (orders.length <= visible) {
            setLoadMoreButtonStatus('disable');
            toast.error('Não tem mais conteúdo para carregar.', { theme: 'colored' });
            return;
        }

        setLoadMoreButtonStatus('');
        setVisible(prev => prev + 5);
    };

    useEffect(() => {
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    return (
        <>
            {hasUser && (
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
                                    orders
                                        .slice(0, visible)
                                        .map(order => (
                                            <Order
                                                key={order.id}
                                                order={order}
                                                setModalIsOpen={setModalIsOpen}
                                            />
                                        ))
                                )}
                            </tbody>
                        </table>

                        <button
                            onClick={handleLoadMore}
                            className={`show-more ${loadMoreButtonStatus}`}
                        >
                            Buscar Mais
                        </button>
                    </section>
                    <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                </div>
            )}
        </>
    );
};
