import React from 'react';
import './styles.scss';
import UserInfo from '../../components/UserInfo';
import ReposTable from '../../components/ReposTable';
import Repo from '../../interfaces/Repo.interface';

function SearchResult() {
  const repos: Repo[] = [
    { 
      name: 'Data 01', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 01',
      lastCommitHash: 'Data 01'
    },
    { 
      name: 'Data 02', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 02',
      lastCommitHash: 'Data 02'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
    { 
      name: 'Data 03', 
      commitsCount: Math.floor(Math.random() * 50),
      lastCommitMessage: 'Data 03',
      lastCommitHash: 'Data 03'
    },
  ];

  return (
    <>
      <main id="searchResult">
        <UserInfo 
          avatar='https://avatars2.githubusercontent.com/u/26855833?v=4'
          name='Cleberson F R Junior'
          reposCount={27}
        />
        <ReposTable repos={repos} />
      </main>
    </>
  );
}

export default SearchResult;