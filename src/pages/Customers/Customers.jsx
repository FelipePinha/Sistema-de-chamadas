import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { User } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetchApi from '../../axios/axiosConfig';

import './_Customers.scss';

export const Customers = () => {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    const mutation = useMutation({
        mutationFn: async newCompany => {
            await fetchApi
                .post('/client', newCompany)
                .then(res => {
                    console.log(res.data);
                })
                .catch(reject => {
                    console.log(reject.response.data);
                });
        },
    });

    const handleRegisterCustomer = e => {
        e.preventDefault();

        if (!name || !cnpj || !address) {
            console.log('Todos os campos devem ser preenchidos.');
            return;
        }

        mutation.mutate({
            name,
            cnpj,
            address,
        });

        setName('');
        setCnpj('');
        setAddress('');
    };

    return (
        <div className="customers">
            <Sidebar />
            <section className="customers-content">
                <Title title="Clientes" icon={<User size={30} />} />

                <div className="form-container">
                    <form className="customers-form" onSubmit={handleRegisterCustomer}>
                        <div className="customers-form-control">
                            <label htmlFor="companyName">Nome da Empresa</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Nome da sua empresa"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="customers-form-control">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input
                                type="text"
                                name="cnpj"
                                placeholder="Seu CNPJ"
                                onChange={e => setCnpj(e.target.value)}
                                value={cnpj}
                            />
                        </div>
                        <div className="customers-form-control">
                            <label htmlFor="address">Endereço</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Nome da sua empresa"
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
