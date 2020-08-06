import React from 'react';
import './styles.scss';

interface UserInfoProps {
  avatar: string;
  name: string;
  reposCount: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ avatar, name, reposCount }) => {
  return (
    <div className="user-info">
      <img src={avatar} alt="Foto de perfil" className="avatar" />
      <h3 className="user-name">{name}</h3>
      <p className="repos-counter">
        <strong>{reposCount}</strong>Repositórios
      </p>
    </div>
  )
};

export default UserInfo;