import React, { FC } from "react";
import { IRepositories } from "../interfaces";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../Query";

const Repository : FC<IRepositories> = ({ name, url, stargazerCount, forkCount }) => (
    <tr>
      <td>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </td>
      <td>🌟 {stargazerCount}</td>
      <td>🍴 {forkCount}</td>
    </tr>
  );


  // Repositories component
const Repositories = () => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {data.search.nodes.map((repo : IRepositories) => (
            <Repository
              key={repo.name}
              name={repo.name}
              url={repo.url}
              stargazerCount={repo.stargazerCount}
              forkCount={repo.forkCount}
            />
          ))}
        </tbody>
      </table>
    );
  };

  export default Repositories;