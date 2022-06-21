#

<h2 align="center">Project for Storybook, Next, Typescript, SCSS and Jest</h2>

<p align="center">
  <a href="https://github.com/trinwin/storybook-next-ts-template/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-green.svg" alt="PRs Welcome" />
  </a>
</p>

This simple guide will help you to set up `Storybook`, `Next`, `Typescript`, `SCSS` and `Jest`.

## ✅ Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### ⚒️ Installation

```
# Clone this repository
git clone https://github.com/wagnerGCastro/next-jest-storybook-ts-cypress

# Go into the repository
cd next-jest-storybook-ts-cypress

# Install client dependencies
yarn install

# Start client on localhost:3008
yarn run dev

# Start Storybook
yarn storybook

# Run your test
yarn test
```

## ⭐️ Author

👩🏻‍💻 **Wagner Castro** - [wagner](https://github.com/wagnerGCastro)

➡️ I will continue to update and make changes to the tutorial.

🤙🏻 Please let me know if you run into any problem.

🤝 Connect with me and find my works on:

- [Medium](https://medium.com/@wagnerGCastro)
- [DEV.to](https://dev.to/@wagnerGCastro)
- [LinkedIn](https://www.linkedin.com/in/@wagnerGCastro)

## Links Utilies
- [Ignite Lab](https://evento.rocketseat.com.br/ignite-lab/episodios/react/abertura/edicao/1)
- [Clonoe grap.cms] (https://app.graphcms.com/clone/f411e65e5587442cb48a90a21447a535?name=Ignite%20Lab%2002)
- [Figma] (https://www.figma.com/community/file/1120711251998877938)


## Comands
  # How do I test a single file using Jest
    $ npm test -- __tests__/units/calculator.test.ts
    $ jest --maxWorkers=50% --cache -- "__tests__/units/calculator.test.ts"

    -- jest wath
    $ yarn test:watch -- __tests__/units/calculator.test.ts
    $ jest --watch=25% __tests__/units/calculator.test.ts
    $ npx jest --watch __tests__/units/calculator.test.ts
    $ npx jest --watchAll __tests__/units/calculator.test.ts

  # Git commit skip test
    $ git commit --no-verify -m "commit message"
    $ git commit --no-verify --amend
    $ git commit --no-verify --amend -m "#20 jest(unit) - Testing sum of calculator function"
