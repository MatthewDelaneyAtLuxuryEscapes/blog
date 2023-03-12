## Setup

### Prerequisites
- `node`
- `yarn`

> _Find versions in `package.json`_
#### Suggested Tools
- `VSCode` as code editor _(extensions and settings recommendations included)_
- [`volta.sh`](https://volta.sh) as JS tool manager _(alternative for `nvm`)_

### Dependencies
```bash
# install dependencies
yarn
```

### Development
```bash
# start development server (HMR enbaled)
yarn dev
```

### Build and Serve
```bash
# build the application
yarn build

# start the Node.JS server
yarn start
```

## Testing
### Unit Testing
_`Vitest` is configured._
#### Writing Unit Tests
Given the to-be-tested function resides in a file named `foo.ts`, create a new test file at the same relative directory namely `foo.test.ts`, and start defining test suites/cases using the [Vitest API](https://vitest.dev/api/).

`src/foo.ts` 👇
```ts
export default function foo() { return 'foo' }
```
`src/foo.test.ts` 👇
```ts
import { expect, it, test } from 'vitest'
import foo from './foo'

test('when foo is called', () => {
  it('should output "foo"', () => {
    expect(foo()).toEqual('foo')
  })
})
```

#### Running Unit Tests
```bash
# run all tests, once
yarn test:unit

# run a particual test, foo.test.ts
yarn test:unit foo

# run all tests and watch for changes
yarn test:unit:watch

# watch tests run in Vitest GUI
yarn test:unit:gui
```
> Alternatively, [Vitest VSCode extension](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) can be used as a convinient way to run tests inside the code editor. (included in workspace recommendations)

### End-to-End Testing
_`Cypress` is configured._

#### Writing E2E Tests
Given the to-be-tested scenario is making sure the word "Foo" is visible when the route "/foo" is visited, create a new test file at `cypress/e2e/` directory namely `viewFoo.cy.ts`, and start defining test suites/cases using the [Cypress API](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test).

`cypress/e2e/viewFoo.cy.ts` 👇

```ts
describe('when the foo route is visited', () => {
  it('`main` element should display the word "Foo"', () => {
    cy.visit('/foo')
    cy.get('main').should('have.text', 'Foo')
  })
})

```

#### Running E2E Tests
> **First, make sure the Node.JS server is running.**
```bash
# run all tests, once
yarn test:e2e

# run a particual test, foo.cy.ts
yarn test:e2e --spec "cypress/e2e/viewFoo.cy.ts"

# watch tests run in Cypress GUI
yarn test:e2e:gui
```

### Linting and Formatting
_`ESLint` is configured for code validation. `Prettier`, hooked into `ESLint` as a plugin, is configured for code formatting._

```bash
# check code for programmatic and stylistic errors
yarn lint

# attempt to to fix "auto-fixable" lint issues
yarn lint:fix
```
_`Lefthook`'s `pre-commit` hook is configured to lint staged files. Every staged file will be linted right before the git commit; and in case of errors, the commit would not go through._

#### Code formatting in VSCode
- Install the `ESLint` extension. _(included in the workspace extension recommendation)_
- Enable `ESlint` as formatter. _(included in the workspace settings recommendation)_
- Set `ESLint` as the default formatter. _(included in the workspace settings recommendation)_
- _OPTIONALLY_, enable format-on-save.

## Supporting Documentation
- [Conventions and principles](https://github.com/lux-group/www-le-customer/blob/master/docs/index.md)
- [Next.JS 13](https://nextjs.org/docs/getting-started) ([beta](https://beta.nextjs.org/docs))
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Vitest](https://vitest.dev) ([Vitest vs. other test runners](https://vitest.dev/guide/comparisons.html))
- [Cypress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
- [TanStack React Query](https://react-query-v3.tanstack.com/guides/queries)
