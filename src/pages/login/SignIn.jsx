import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';

import ReactLogo from '../../assets/react.svg';
import './_Login.scss';

export const SignIn = () => {
    const hasUser = localStorage.getItem('user');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { loginUserMutation } = useUser();

    useEffect(() => {
        if (hasUser !== null) {
            navigate('/dashboard');
        }
    });

    const handleLoginUser = async e => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Todos os campos devem ser preenchidos', {
                theme: 'colored',
            });
            return;
        }

        toast.loading('Carregando...');
        await loginUserMutation.mutateAsync({
            email,
            password,
        });
        toast.dismiss();

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
            )}
        </>
    );
};
