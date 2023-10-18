import { House, User, Gear, DoorOpen } from '@phosphor-icons/react';
import UserPic from '../../assets/user-pic.png';
import './_Sidebar.scss';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
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
                    <button className="nav-item">
                        <DoorOpen size={26} />
                        Sair
                    </button>
                </nav>
            </header>
        </aside>
    );
};
