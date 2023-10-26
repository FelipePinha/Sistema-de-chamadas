import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, QueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ReactLogo from '../../assets/react.svg';
import './_Login.scss';

const queryClient = new QueryClient();

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async newUser => {
            await axios
                .post('http://localhost:3333/api/register', newUser)
                .then(res => {
                    const { password, ...user } = res.data;
                    localStorage.setItem('user', JSON.stringify(user));
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

    const handleRegisterUser = e => {
        e.preventDefault();

        if (!username || !email || !password) {
            console.log('Todos os campos devem ser preenchidos');
            return;
        }

        mutation.mutate({
            username,
            email,
            password,
        });

        setUsername('');
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
                    <form onSubmit={handleRegisterUser}>
                        <h1>Cadastrar</h1>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
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
                        <button type="submit">Cadastrar</button>
                    </form>
                    <Link to="/">
                        Ja tem uma conta? <span>Clique aqui</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
