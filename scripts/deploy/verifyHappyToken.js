const { run } = require("hardhat")

async function verify(contractAddress, args) {
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArgument: args,
        })
    } catch (e) {
        console.log(e)
    }
}

// npx hardhat verify --network sepolia 0x2AC3E68d87541Ae705D45a148cFB4d3832488000
const main = async () => verify('0x2AC3E68d87541Ae705D45a148cFB4d3832488000');

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

