async function main () {
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);
    const account = accounts[0];
    const target = accounts[1];
    const HappyToken = await ethers.getContractFactory('HappyToken');
    // Update the contract address
    const happyToken = await HappyToken.attach('0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82');
    const name = await happyToken.name();
    console.log(name);
    const symbol = await happyToken.symbol();
    console.log(symbol);
    await happyToken.mint(account, 1000);
    const balance = await happyToken.balanceOf(account);
    console.log(balance);
    await happyToken.transfer(target, 1000);
    const targetBalance = await happyToken.balanceOf(target);
    console.log(targetBalance);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
