/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv/config");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/2247#discussioncomment-5496669
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
setGlobalDispatcher(proxyAgent);

module.exports = {
  solidity: "0.8.20",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  }
};
