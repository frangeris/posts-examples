const { ethers, upgrades } = require("hardhat");

async function main() {
  const { PROXY_ADDRESS } = process.env;
  if (!PROXY_ADDRESS) {
    throw new Error("PROXY_ADDRESS is not set");
  }

  const GatewayV2 = await ethers.getContractFactory("GatewayV2");
  console.log("Upgrading...");
  const gatewayProxy = await upgrades.upgradeProxy(PROXY_ADDRESS, GatewayV2);
  console.log("Upgraded:", gatewayProxy.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
