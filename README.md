Dev deps:
yarn add core-js react react-dom styled-components @babel/polyfill
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @types/react @types/react-dom @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-loader babel-plugin-styled-components eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks html-webpack-plugin husky lint-staged prettier stylelint stylelint-config-recommended stylelint-config-styled-components stylelint-custom-processor-loader stylelint-processor-styled-components typescript webpack webpack-cli webpack-dev-server

Build process:
1. Run tsc before every babel transpilation to do type check before it stripr the typing.
2. Apply linting rules with eslint, stylelint, prettier
3. Husky to lint files changed before committing
4. Webpack to bundle files. Babel to transpile files to JS

# ts_game_page
https://www.youtube.com/watch?v=-EsK-3YUNrc&list=PLNNon0xuayxLYE2v9hp52ZIJaDIqmbNBF&index=3
