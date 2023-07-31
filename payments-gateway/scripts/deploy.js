// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Gateway = await hre.ethers.getContractFactory("Gateway");
  console.log("Deploying...");
  const proxy = await upgrades.deployProxy(Gateway, [1], {
    initializer: "initialize",
  });
  await proxy.deployed();
  console.log("Deployed:", proxy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
