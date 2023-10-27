import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import fetchApi from '../../axios/axiosConfig';

import ReactLogo from '../../assets/react.svg';
import './_Login.scss';
import { useEffect } from 'react';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser !== null) {
            navigate('/dashboard');
        }
    });

    const mutation = useMutation({
        mutationFn: async user => {
            await fetchApi
                .post('/login', user)
                .then(res => {
                    const { password, ...LoggedUser } = res.data;
                    localStorage.setItem('user', JSON.stringify(LoggedUser));
                    navigate('/dashboard');
                })
                .catch(reject => {
                    console.log(reject.response.data);
                });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    const handleLoginUser = e => {
        e.preventDefault();

        if (!email || !password) {
            console.log('Todos os campos devem ser preenchidos');
            return;
        }

        mutation.mutate({
            email,
            password,
        });

        setEmail('');
        setPassword('');
    };

    return (
        <div className="center">
            <div className="login-box">
                <header className="login-header">
                    <img src={ReactLogo} alt="react logo" />
                </header>
                <div className="login-content">
                    <form onSubmit={handleLoginUser}>
                        <h1>Entrar</h1>
                        <input
                            type="email"
                            placeholder="email@email.com"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            placeholder="******"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            autoComplete="off"
                        />
                        <button type="submit">Acessar</button>
                    </form>
                    <Link to="/signup">Criar uma conta</Link>
                </div>
            </div>
        </div>
    );
};
