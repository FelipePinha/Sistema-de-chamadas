import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Title } from '../../components/Title/Title';
import { Gear } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import fetchApi from '../../axios/axiosConfig';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import UserPic from '../../assets/user-pic.png';
import './_Profile.scss';

export const Profile = () => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState(localUser && localUser.name);
    const [email, setEmail] = useState(localUser && localUser.email);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        if (hasUser === null) {
            navigate('/');
        }
    }, []);

    const mutation = useMutation({
        mutationFn: async newUsername => {
            localUser.name = newUsername;

            await fetchApi.put(`/user/${localUser.id}`, { name: newUsername }).then(res => {
                localStorage.setItem('user', JSON.stringify(localUser));
                console.log('nome alterado com sucesso');
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    const handleUpdateUserForm = e => {
        e.preventDefault();

        if (!name) {
            console.log('O campo "nome" precisa estar preenchido.');
            return;
        }

        mutation.mutate(name);
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
