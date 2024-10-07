# SimpleX ERC-20 Smart Contract

This token was generated using Hardhat.

## Contract Address - Sepolia Network
0x19f23D80AEA622C37D79a9B64ba85Ba2149ED85f

## Useful comands

```shell
# Shows the Hardhat help
npx hardhat help

# Runs the Hardhat tests
npx hardhat test

# Runs the Hardhat tests and includes coverage information
npx hardhat coverage

# Runs the Hardhat tests including gas cost report
REPORT_GAS=true npx hardhat test

# Runs a Hardhat node
npx hardhat node

# Add the following environment vars:
npx hardhat vars set INFURA_API_KEY
npx hardhat vars set OWNER_PRIVATE_KEY
npx hardhat vars set ETHERSCAN_API_KEY

# Deploys the token to the given network
npx hardhat ignition deploy ./ignition/modules/SimpleX.ts --network <your-network>

# Deploys the token to the local node
npx hardhat ignition deploy ./ignition/modules/SimpleX.ts --network localhost

# Deploys the token to the local node using a particular deployment Id
npx hardhat ignition deploy ./ignition/modules/SimpleX.ts --network localhost --deployment-id simplex-localhost-deployment

# Deploys the token to sepolia network using a particular deployment Id
npx hardhat ignition deploy ignition/modules/SimpleX.ts --network sepolia --deployment-id simplex-sepolia-deployment

# Verify deployment
npx hardhat ignition verify simplex-sepolia-deployment

# Visualize deployment
npx hardhat ignition visualize ./ignition/modules/SimpleX.ts

# Removes / wipes the deployment
npx hardhat ignition wipe simplex-sepolia-deployment SimpleXModule#SimpleX
```
