const { expect } = require('chai');

describe('HappyToken', function () {
    before(async function () {
        this.HappyToken = await ethers.getContractFactory('HappyToken');
    });

    beforeEach(async function () {
        this.happyToken = await this.HappyToken.deploy();
        await this.happyToken.deployed();
    });

    // Test case
    it('retrieve returns a value previously stored', async function () {
        const account = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
        const mintAmout = '1000';
        await this.happyToken.mint(account, mintAmout);
        const balance = await this.happyToken.balanceOf(account);
        expect(balance.toString()).to.equal(mintAmout);
    });

    it('should be able to transfer tokens', async function () {
        const signerAddress = (await ethers.getSigners())[0].address;
        console.log(signerAddress);
        const mintAmout = '1000';
        await this.happyToken.mint(signerAddress, mintAmout);
        await this.happyToken.balanceOf(signerAddress);
        await this.happyToken.transfer('0x0529Ff64e5B025a2ea31148e9A5b7fDe5AAfAfd0', 500);
        const balanceAfter = await this.happyToken.balanceOf(signerAddress);
        expect(balanceAfter.toString()).to.equal('500');
        const balanceAfterReceiver = await this.happyToken.balanceOf('0x0529Ff64e5B025a2ea31148e9A5b7fDe5AAfAfd0');
        expect(balanceAfterReceiver.toString()).to.equal('500');
    });
});
