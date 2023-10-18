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
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mandrake</td>
                            <td>Suporte</td>
                            <td>
                                <span className="badge">Aberto</span>
                            </td>
                            <td>17/10/2023</td>
                            <td className="table-actions">
                                <button>
                                    <MagnifyingGlass size={16} />
                                </button>
                                <Link className="edit-order-link">
                                    <PencilSimple size={16} />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mandrake</td>
                            <td>Suporte</td>
                            <td>
                                <span className="badge">Aberto</span>
                            </td>
                            <td>17/10/2023</td>
                            <td className="table-actions">
                                <button>
                                    <MagnifyingGlass size={16} />
                                </button>
                                <Link className="edit-order-link">
                                    <PencilSimple size={16} />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Mandrake</td>
                            <td>Suporte</td>
                            <td>
                                <span className="badge">Aberto</span>
                            </td>
                            <td>17/10/2023</td>
                            <td className="table-actions">
                                <button>
                                    <MagnifyingGlass size={16} />
                                </button>
                                <Link className="edit-order-link">
                                    <PencilSimple size={16} />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="show-more">Buscar Mais</button>
            </section>
        </div>
    );
};
