const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x3D8CDCABa7D5bbe97549C5a1Cb4158A832A34E15"; // Replace with your contract's address
  const networkName = "goerli"; // Replace with your network name

  // Get the contract factory
  const YourContract = await ethers.getContractFactory("ProxyFactory"); // Replace with your contract's name

  // Get the contract instance
  const contract = YourContract.attach(contractAddress);

  // Verify the contract
  const verification = await ethers.provider.send(
    "hardhat_verifyContract",
    [contractAddress, networkName]
  );

  console.log("Verification result:", verification);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
