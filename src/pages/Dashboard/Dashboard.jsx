import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Link } from 'react-router-dom';

import { Chat, Plus, MagnifyingGlass, PencilSimple } from '@phosphor-icons/react';

import './_Dashboard.scss';

export const Dashboard = () => {
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
                        <tr>
                            <td data-label="Cliente">Mandrake</td>
                            <td data-label="Assunto">Suporte</td>
                            <td data-label="Status">
                                <span className="badge">Aberto</span>
                            </td>
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
                        <tr>
                            <td data-label="Cliente">Mandrake</td>
                            <td data-label="Assunto">Suporte</td>
                            <td data-label="Status">
                                <span className="badge">Aberto</span>
                            </td>
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
                    </tbody>
                </table>

                <button className="show-more">Buscar Mais</button>
            </section>
        </div>
    );
};
