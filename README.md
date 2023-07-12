##GOAL

a simple exercise in GraphQL that allows us to obtain a table sorted by the highest rating of the current repos on github. The UI was emphasized through Material UI. NetworkStatus component is interesting because  allow us  to manage the request network status with a fancy loader offer by le Material UI library and a custom error message by declaration.

##HOW TO START
simply add a .env file with this variable:

REACT_APP_GITHUB_API_ENDPOINT=https://api.github.com/graphql
REACT_APP_GITHUB_TOKEN=#your_github_token_not_mine

##Some suggested new feature and improvement.

- Pagination
- Flexible search
- Cover you code with tests as much as you can
- Dockerize it!

  ##Please, take note.

due to lack of time some dependencies have remained unused: the compiler will inform you about them. You can fix them by using Husky (https://typicode.github.io/husky/) to prevent this in the next commit by the command pre-commit. If the code is badly indented the fault is of prettier of visual studio code that is badly configured.
