import { House, User, Gear, DoorOpen } from '@phosphor-icons/react';
import UserPic from '../../assets/user-pic.png';
import { Link, useNavigate } from 'react-router-dom';
import './_Sidebar.scss';

export const Sidebar = () => {
    const navigate = useNavigate();

    const handleExitUser = () => {
        localStorage.removeItem('user');

        navigate('/');
    };

    return (
        <aside className="sidebar">
            <div className="banner">
                <img src={UserPic} />
            </div>
            <header className="sidebar-header">
                <nav>
                    <Link to="/dashboard" className="nav-item">
                        <House size={26} />
                        Chamados
                    </Link>
                    <Link to="/clientes" className="nav-item">
                        <User size={26} />
                        Clientes
                    </Link>
                    <Link to="/perfil" className="nav-item">
                        <Gear size={26} />
                        Configurações
                    </Link>
                    <button className="nav-item" onClick={handleExitUser}>
                        <DoorOpen size={26} />
                        Sair
                    </button>
                </nav>
            </header>
        </aside>
    );
};
