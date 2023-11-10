async function main () {
    const HappyToken = await ethers.getContractFactory('HappyToken');
    console.log('Deploying HappyToken...');
    const happyToken = await HappyToken.deploy();
    await happyToken.deployed();
    console.log('HappyToken deployed to:', happyToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

/*
npx hardhat console --network localhost

const HappyToken = await ethers.getContractFactory('HappyToken');
const happyToken = await HappyToken.attach('0xe7f1725e7734ce288f8367e1bb143e90bb3f0512');
await happyToken.name();
await happyToken.symbol();
await happyToken.totalSupply();
await happyToken.mint('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 1000);
await happyToken.balanceOf('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199');
await happyToken.transfer('0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2', 1000);
 */

