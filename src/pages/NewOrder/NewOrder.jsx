import { useEffect, useState, useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { PlusCircle } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';
import { useOrder } from '../../hooks/useOrder';
import { toast } from 'react-toastify';

import './_NewOrder.scss';

export const NewOrder = () => {
    const hasUser = localStorage.getItem('user');
    const navigate = useNavigate();
    const { id } = useParams();
    const { selectedOrder } = useContext(OrderContext);
    const { getClients } = useClient();
    const { registerOrderMutation, updateOrder } = useOrder();

    const [clientSelected, setClientSelected] = useState('');
    const [subject, setSubject] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [content, setContent] = useState('');

    const { data: clients, isLoading } = getClients();

    useEffect(() => {
        if (hasUser === null) {
            navigate('/');
        }

        if (id) {
            setClientSelected(selectedOrder.company_name);
            setSubject(selectedOrder.subject);
            setStatus(selectedOrder.status);
            setContent(selectedOrder.content);
        }
    }, []);

    const handlePostOrder = e => {
        e.preventDefault();

        if (!clientSelected || !subject || !status || !content) {
            toast.error('preencha todos os campos', {
                theme: 'colored',
            });
            return;
        }

        if (id) {
            updateOrder.mutate({
                id: selectedOrder.id,
                company_name: clientSelected,
                subject,
                status,
                content,
            });

            toast.success('Chamada editada com sucesso!', {
                theme: 'colored',
            });
            return;
        }

        registerOrderMutation.mutate({
            company_name: clientSelected,
            subject,
            status,
            content,
            createdat: Date.now(),
        });

        toast.success('Chamada criada com sucesso!', {
            theme: 'colored',
        });
        setContent('');
        setSubject('Suporte');
        setStatus('Aberto');
    };

    return (
        <>
            {hasUser && (
                <div className="new-order">
                    <Sidebar />
                    <section className="new-order-content">
                        <Title title="Novo chamado" icon={<PlusCircle size={30} />} />
                        <form className="new-order-form" onSubmit={handlePostOrder}>
                            <div className="new-order-form-control">
                                <label htmlFor="client">Cliente</label>
                                <select
                                    name="client"
                                    value={clientSelected}
                                    onChange={e => setClientSelected(e.target.value)}
                                >
                                    {isLoading ? (
                                        <option>Carregando...</option>
                                    ) : clients.length > 0 ? (
                                        clients.map(client => (
                                            <option key={client.id} value={client.company_name}>
                                                {client.company_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option>Nenhuma empresa cadastrada</option>
                                    )}
                                </select>
                            </div>
                            <div className="new-order-form-control">
                                <label htmlFor="subject">Assunto</label>
                                <select
                                    name="subject"
                                    value={subject}
                                    onChange={e => setSubject(e.target.value)}
                                >
                                    <option value="Suporte">Suporte</option>
                                    <option value="Financeiro">Financeiro</option>
                                    <option value="Vista tecnica">Vista técnica</option>
                                </select>
                            </div>
                            <div className="new-order-form-control">
                                <label htmlFor="status">Status</label>
                                <div className="status">
                                    <input
                                        onChange={e => setStatus(e.target.value)}
                                        type="radio"
                                        name="status"
                                        value="Aberto"
                                        defaultChecked
                                    />
                                    <span>Em aberto</span>
                                    <input
                                        onChange={e => setStatus(e.target.value)}
                                        type="radio"
                                        name="status"
                                        value="Progresso"
                                    />
                                    <span>Progresso</span>
                                    <input
                                        onChange={e => setStatus(e.target.value)}
                                        type="radio"
                                        name="status"
                                        value="Atendido"
                                    />
                                    <span>Atendido</span>
                                </div>
                            </div>
                            <div className="new-order-form-control">
                                <label htmlFor="complement">Complemento</label>
                                <textarea
                                    onChange={e => setContent(e.target.value)}
                                    name="complement"
                                    value={content}
                                    placeholder="descreva seu problema"
                                />
                            </div>

                            <button type="submit">Registrar</button>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
};
