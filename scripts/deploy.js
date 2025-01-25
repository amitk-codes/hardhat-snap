const { ethers } = require("hardhat");

async function deploy() {
  const Contract = await ethers.getContractFactory("Sample");
  const contract = await Contract.deploy(10);
  await contract.waitForDeployment();

  console.log("Contract has been deployed successfully:-");
  console.log(await contract.getAddress());
}

deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log({ error: err });
    process.exit(1);
  });
