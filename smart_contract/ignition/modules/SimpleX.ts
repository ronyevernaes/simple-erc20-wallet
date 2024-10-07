import { ethers } from "hardhat";
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_SUPPLY = ethers.parseEther("100000");

const SimpleXModule = buildModule("SimpleXModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", INITIAL_SUPPLY);

  const simpleX = m.contract("SimpleX", [initialSupply]);

  return { simpleX };
});

export default SimpleXModule;
