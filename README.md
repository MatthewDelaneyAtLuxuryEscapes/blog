## Setup

### Prerequisites
- `node`
- `yarn`

> _Find versions in `package.json`_
### Suggestions
- `VSCode` as code editor _(extensions and settings recommendations included)_
- `volta.sh` as JS tool manager _(alternative for `nvm`)_

### Dependencies
```bash
# install dependencies
yarn
```

### Development
```bash
# start development server (HMR enbaled)
yarn dev

# check code for programmatic and stylistic errors
yarn lint
# more on this in "Quality of Code" section

# attempt to to fix "auto-fixable" lint issues
yarn lint:fix
```

### Build and Serve
```bash
# build the application
yarn build

# start the Node.JS server
yarn start
```

## Testing
### Unit Tests
_`Vitest` is configured._
#### Creating Tests
Given the to-be-tested function resides in a file named `foo.ts`, create a new test file at the same relative directory namely `foo.test.ts`, and start defining test suites/cases using [Vitest API](https://vitest.dev/api/).

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

#### Running Tests
```bash
# run all tests, once
yarn test:unit

# run a particual test, foo.test.ts
yarn test:unit foo

# run all tests and watch for changes
yarn test:unit:watch

# watch tests run in Vitest GUI
yarn test:unit:visualise
```
> Alternatively, [Vitest VSCode extension](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) can be used as a convinient way to run tests inside the code editor. (included in workspace recommendations)

### E2E Tests
_`Cypress` is not configured yet!_
_[TODO]_

## Quality of Code
_[TODO: ESLint + Prettier + Principles]_

## Supporting Documentation
- [Conventions and principles](https://github.com/lux-group/www-le-customer/blob/master/docs/index.md)
- [Next.JS 13](https://nextjs.org/docs/getting-started) ([beta](https://beta.nextjs.org/docs))
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Vitest](https://vitest.dev) ([Vitest vs. other test runners](https://vitest.dev/guide/comparisons.html))
