import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { PlusCircle } from '@phosphor-icons/react';

import './_NewOrder.scss';

export const NewOrder = () => {
    return (
        <div className="new-order">
            <Sidebar />
            <section className="new-order-content">
                <Title title="Novo chamado" icon={<PlusCircle size={30} />} />
                <form className="new-order-form">
                    <div className="new-order-form-control">
                        <label htmlFor="client">Cliente</label>
                        <select name="client">
                            <option>empresa 1</option>
                            <option>empresa 2</option>
                            <option>empresa 3</option>
                        </select>
                    </div>
                    <div className="new-order-form-control">
                        <label htmlFor="subject">Assunto</label>
                        <select name="subject">
                            <option value="suporte">Suporte</option>
                            <option value="financeiro">Financeiro</option>
                            <option value="vistaTecnica">Vista técnica</option>
                        </select>
                    </div>
                    <div className="new-order-form-control">
                        <label htmlFor="status">Status</label>
                        <div className="status">
                            <input type="radio" name="status" value="Aberto" defaultChecked />
                            <span>Em aberto</span>
                            <input type="radio" name="status" value="Progresso" />
                            <span>Progresso</span>
                            <input type="radio" name="status" value="Atendido" />
                            <span>Atendido</span>
                        </div>
                    </div>
                    <div className="new-order-form-control">
                        <label htmlFor="complement">Complemento</label>
                        <textarea name="complement" placeholder="descreva seu problema" />
                    </div>

                    <button type="submit">Registrar</button>
                </form>
            </section>
        </div>
    );
};
