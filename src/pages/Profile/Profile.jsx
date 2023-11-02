import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Gear } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';

import UserPic from '../../assets/user-pic.png';
import './_Profile.scss';

export const Profile = () => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState(localUser && localUser.name);
    const [email, setEmail] = useState(localUser && localUser.email);

    const navigate = useNavigate();
    const { updateUserMutation } = useUser();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    const handleUpdateUserForm = e => {
        e.preventDefault();

        if (!name) {
            toast.error('O campo "nome" precisa estar preenchido.', {
                theme: 'colored',
            });
            return;
        }

        updateUserMutation.mutate(name);
        toast.success('Nome alterado com sucesso!', {
            theme: 'colored',
        });
    };

    return (
        <div className="profile">
            <Sidebar />
            <section className="profile-content">
                <Title title="Meu perfil" icon={<Gear size={30} />} />

                <form className="profile-form" onSubmit={handleUpdateUserForm}>
                    <img src={UserPic} />

                    <div className="profile-form-control">
                        <label htmlFor="username">Nome</label>
                        <input onChange={e => setName(e.target.value)} type="text" value={name} />
                    </div>
                    <div className="profile-form-control">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" value={email} disabled />
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </section>
        </div>
    );
};
