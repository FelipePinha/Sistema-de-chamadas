import { Link } from 'react-router-dom';

import ReactLogo from '../../assets/react.svg';
import './_SignIn.scss';

export const SignIn = () => {
    const handleLoginUser = e => {
        e.preventDefault();
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
                        <input type="email" placeholder="Digite seu email" />
                        <input type="password" placeholder="******" />
                        <button type="submit">Acessar</button>
                    </form>
                    <Link to="/signup">Criar uma conta</Link>
                </div>
            </div>
        </div>
    );
};
