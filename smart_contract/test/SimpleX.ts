import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { SimpleX } from "../typechain-types";

describe("SimpleX", () => {
  let Token;
  let token: SimpleX;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let initialSupply = ethers.parseEther("1000000");

  beforeEach(async () => {
    const Token = await ethers.getContractFactory("SimpleX");
    [owner, addr1, addr2] = await ethers.getSigners();
    const deployedToken = await Token.deploy(initialSupply);
    await deployedToken.waitForDeployment();
    token = deployedToken as SimpleX;
  });

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      expect(await token.name()).to.equal("SimpleX");
      expect(await token.symbol()).to.equal("SX");
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });

    it("Should transfer tokens between accounts", async function () {
      await token.transfer(addr1.address, ethers.parseEther("50"));
      const addr1Balance = await token.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(ethers.parseEther("50"));
  
      await token.connect(addr1).transfer(addr2.address, ethers.parseEther("50"));
      const addr2Balance = await token.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(ethers.parseEther("50"));
    });
  
    it("Should fail if sender doesn’t have enough tokens", async function () {
      const initialOwnerBalance = await token.balanceOf(owner.address);
  
      await expect(
        token.connect(addr1).transfer(owner.address, ethers.parseEther("1000"))
      ).to.be.revertedWith("Insufficient balance");
  
      expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
  
    it("Should update balances after transfers", async function () {
      const initialOwnerBalance = await token.balanceOf(owner.address);
  
      await token.transfer(addr1.address, ethers.parseEther("100"));
  
      await token.transfer(addr2.address, ethers.parseEther("50"));
  
      const finalOwnerBalance = await token.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance - ethers.parseEther("150"));
  
      const addr1Balance = await token.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(ethers.parseEther("100"));
  
      const addr2Balance = await token.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(ethers.parseEther("50"));
    });
  });
});
