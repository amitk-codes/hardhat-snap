const { config: dotEnvConfig } = require("dotenv");
const { task } = require("hardhat/config");
dotEnvConfig();
require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints info about the accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  const providers = hre.ethers.provider;

  for (const account of accounts) {
    const address = account.address;
    const balance = await providers.getBalance(address);
    console.log(`${address} :: ${hre.ethers.formatEther(balance)}`);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_RPC_KEY}`,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
