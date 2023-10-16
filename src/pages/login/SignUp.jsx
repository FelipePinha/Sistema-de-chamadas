import { Link } from 'react-router-dom';

import ReactLogo from '../../assets/react.svg';
import './_Login.scss';

export const SignUp = () => {
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
                        <h1>Cadastrar</h1>
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="email@email.com" />
                        <input type="password" placeholder="******" />
                        <button type="submit">Cadastrar</button>
                    </form>
                    <Link to="/">
                        Ja tem uma conta? <span>Entre</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
