const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sample Contract", async () => {
  let contract;

  before(async () => {
    const Contract = await ethers.getContractFactory("Sample");
    contract = await Contract.deploy(1234);
    await contract.waitForDeployment();
  });

  it("prints the value of stored number", async () => {
    const value = await contract.getValue();
    console.log({ value });
    expect(value).to.equal(1234);
  });

  it("updates the stored number", async () => {
    const setterTx = await contract.setValue(1111);
    await setterTx.wait();

    const value = await contract.getValue();
    console.log({ valueAfterUpdate: value });
    expect(value).to.equal(1111);
  });
});
