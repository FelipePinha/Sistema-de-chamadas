import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { User } from '@phosphor-icons/react';

import './_Customers.scss';

export const Customers = () => {
    return (
        <div className="customers">
            <Sidebar />
            <section className="customers-content">
                <Title title="Clientes" icon={<User size={30} />} />

                <div className="form-container">
                    <form className="customers-form">
                        <div className="customers-form-control">
                            <label htmlFor="fantasyName">Nome da Empresa</label>
                            <input
                                type="text"
                                name="fantasyName"
                                placeholder="Nome da sua empresa"
                            />
                        </div>
                        <div className="customers-form-control">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input type="text" name="cnpj" placeholder="Seu CNPJ" />
                        </div>
                        <div className="customers-form-control">
                            <label htmlFor="address">Endereço</label>
                            <input type="text" name="address" placeholder="Nome da sua empresa" />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
