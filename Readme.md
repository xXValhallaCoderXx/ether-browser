# Tx Browser
This is a Ethereum Public Smart Contract Transaction browser built on the following:

### Libraries Used

- UI: React JS, Reactstrap, React-Table, React-Device-Detect
- State Management: Redux, Redux-Thunk, Reselect
- Routing: React-Router-Dom
- Ether: ethjs-unit
- Server: Express JS
- Bundler: Webpack v4 + Plugins
- Testing: Jest
- Deployment: Docker

### Resources:

### API
- Etherscan - For getting Smart Contract Tx Info
- CryptoCompare - For obtaining the latest Rates of Ether for various currencies

#### Images (Royalty Free)
- Ether Logo: 
- Maginfying Glass: https://www.kisspng.com/png-computer-icons-royalty-free-magnifying-glass-searc-933815/

### Running The Project Locally

- Run `npm i` or `yarn` in the root to install deps
- Run `npm run build` or `yarn build` to build project locally
- Run `npm run serve:local` or `yarn serve:local` to start application, it will be on `localhost:3000`
- Enter your Public contract ID in the input provided, or you may also go via the `url` by typing `localhost:3000/dashboard/:someID`

### Hosted
- The hosted project can be found on: `http://128.199.247.201:3000`