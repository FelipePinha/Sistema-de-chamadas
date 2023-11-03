import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

import ReactLogo from '../../assets/react.svg';
import './_Login.scss';

export const SignUp = () => {
    const hasUser = localStorage.getItem('user');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { registerUserMutation } = useUser();

    useEffect(() => {
        if (hasUser !== null) {
            navigate('/dashboard');
        }
    });

    const handleRegisterUser = e => {
        e.preventDefault();

        if (!username || !email || !password) {
            console.log('Todos os campos devem ser preenchidos');
            return;
        }

        registerUserMutation.mutate({
            username,
            email,
            password,
        });

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            {!hasUser && (
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
            )}
        </>
    );
};
