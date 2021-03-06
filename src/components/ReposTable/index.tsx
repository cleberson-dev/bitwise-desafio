import React from 'react';
import './styles.scss';
import Repo from '../../interfaces/Repo.interface';

interface ReposTableProps {
  repos: Repo[];
}



const ReposTable: React.FC<ReposTableProps> = ({ repos }) => {
  return (
    <table className="repos-table">
      <thead>
        <tr>
          <th colSpan={4} className="table-title">Repositórios criados e com participação</th>
        </tr>
        <tr>
          <th>Nome do repositório</th>
          <th>Qtd de commits</th>
          <th>Msg último commit</th>
          <th>Hash do último commit</th>
        </tr>
      </thead>
      <tbody>
        {repos.map(repo => (
          <tr>
            <td><a href={repo.url}>{repo.name}</a></td>
            <td>{repo.commitsCount}</td>
            <td>{repo.lastCommitMessage}</td>
            <td>{repo.lastCommitHash}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReposTable;