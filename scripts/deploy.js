// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require('hardhat');
const hre = require("hardhat");

async function main() {

  const Omniverse = await hre.ethers.getContractFactory("CustomERC721A1");
  const omniverse = await Omniverse.deploy();

  await omniverse.deployed();

  console.log("Omniverse with 1 ETH deployed to:", omniverse.address);

  await omniverse.initialize();
  await omniverse.activePreSale(true);
  const quantity = ethers.utils.parseEther('0.15')
  await omniverse.preSaleMint(5, {value: quantity});

  console.log('here')
  // await omniverse.freeMint(50);
  // const token = await omniverse.tokenURI(3);
  console.log('ready')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
