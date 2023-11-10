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
});
