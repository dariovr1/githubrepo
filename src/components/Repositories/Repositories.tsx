import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../Query";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import NetworkStatus from "../UI/NetworkStatus";

  // Repositories component
const Repositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  return (
    <NetworkStatus loading={loading} error={!!error} errorMessage={"Something goes wrong: please try again later.."}>
      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stars</TableCell>
            <TableCell>Forks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.search.nodes.map((repo: any) => (
            <TableRow>
              <TableCell>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </TableCell>
              <TableCell>🌟 {repo.stargazerCount}</TableCell>
              <TableCell>🍴 {repo.forkCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </NetworkStatus>
  );
  };

  export default Repositories;