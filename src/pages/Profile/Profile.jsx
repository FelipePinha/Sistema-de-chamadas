import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Gear } from '@phosphor-icons/react';

import UserPic from '../../assets/user-pic.png';

import './_Profile.scss';

export const Profile = () => {
    return (
        <div className="profile">
            <Sidebar />
            <section className="profile-content">
                <Title title="Meu perfil" icon={<Gear size={30} />} />

                <form className="profile-form">
                    <img src={UserPic} />

                    <div className="profile-form-control">
                        <label htmlFor="username">Nome</label>
                        <input type="text" placeholder="seu nome" />
                    </div>
                    <div className="profile-form-control">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" value="email@email.com" disabled />
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </section>
        </div>
    );
};
