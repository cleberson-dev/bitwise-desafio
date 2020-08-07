import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './styles.scss';
import UserInfo from '../../components/UserInfo';
import ReposTable from '../../components/ReposTable';
import Repo from '../../interfaces/Repo.interface';

const query = gql`
  query ($username: String!) { 
  user(login: $username) {
    name
    avatarUrl
    repositories(first: 100) {
      totalCount
      nodes {
        name
        url
        commits: object(expression: "HEAD") {
          ... on Commit {
            oid
            message
            history {
              totalCount
            }
          }
        }
      }
    }
    repositoriesContributedTo(first: 100) {
      totalCount
      nodes {
        name
        commits: object(expression: "HEAD") {
          ... on Commit {
            oid
            message
            history {
              totalCount
            }
          }
        }
      }
    }
  }
}
`;

function SearchResult() {
  const { username } = useParams(); 
  const { loading, error, data } = useQuery(query, {
    variables: { username }
  });

  if (loading) return <div>Carregando...</div>;
  if (error) console.error(error);

  const repos: Repo[] = data.user.repositories.nodes.map((repo: any) => ({
    name: repo.name,
    commitsCount: repo.commits.history.totalCount,
    lastCommitMessage: repo.commits.message,
    lastCommitHash: repo.commits.oid,
    url: repo.url
  }));

  return (
    <>
      <main id="searchResult">
        <UserInfo 
          avatar={data.user.avatarUrl}
          name={data.user.name}
          reposCount={data.user.repositories.totalCount}
        />
        {/* <UserInfo 
          avatar='https://avatars2.githubusercontent.com/u/26855833?v=4'
          name='Cleberson F R Junior'
          reposCount={27}
        /> */}
        <ReposTable repos={repos} />
      </main>
    </>
  );
}

export default SearchResult;