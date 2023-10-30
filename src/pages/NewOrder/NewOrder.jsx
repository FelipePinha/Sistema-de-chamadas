import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { PlusCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';
import { useOrder } from '../../hooks/useOrder';

import './_NewOrder.scss';

export const NewOrder = () => {
    const [clientSelected, setClientSelected] = useState('');
    const [subject, setSubject] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [content, setContent] = useState('');

    const { getClients } = useClient();
    const { registerOrderMutation } = useOrder();
    const navigate = useNavigate();

    const { data: clients, isLoading } = getClients();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    const handlePostOrder = e => {
        e.preventDefault();

        if (!clientSelected || !subject || !status || !content) {
            console.log('preencha todos os campos');
            return;
        }

        registerOrderMutation.mutate({
            company_name: clientSelected,
            subject,
            status,
            content,
        });

        setContent('');
        setSubject('Suporte');
        setStatus('Aberto');
    };

    return (
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
                            <option value="suporte">Suporte</option>
                            <option value="financeiro">Financeiro</option>
                            <option value="vista tecnica">Vista técnica</option>
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
    );
};
