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

## Quality of Code
_[TODO: ESLint + Prettier + Principles]_

## Testing
_[TODO]_

## Supporting Documentation
- [Conventions and principles](https://github.com/lux-group/www-le-customer/blob/master/docs/index.md)
- [Next.JS 13](https://nextjs.org/docs/getting-started) ([beta](https://beta.nextjs.org/docs))
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
