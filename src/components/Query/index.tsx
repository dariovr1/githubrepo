import { gql } from "@apollo/client";

// GraphQL query to fetch repositories
const GET_REPOSITORIES = gql`
  query {
    search(query: "stars:>1000", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          url
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

export {
    GET_REPOSITORIES
}