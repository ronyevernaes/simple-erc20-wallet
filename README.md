# simple-erc20-wallet

DApp that allows users to view their balance and transfer tokens to other users.

# Features
- [x] Deploy an ERC-20 Token on Sepolia or any other testnet.
- [x] Login Screen. The user should be able to connect their wallet to the
  application through a login screen.
- [x] Display Information. If the user has connected their wallet, they should
  be redirected to a screen where they can view their ERC-20 token balance.
- [x] Disconnecting the Wallet. The user should have the option to disconnect
  their wallet at any time. If the wallet is disconnected, the user should be
  redirected back to the login screen.
- [x] Sending Transactions. The user must be able to send tokens to an Ethereum
  address.
- [ ] Gas estimation. The user should be able to see a gas fees estimation
  before send a transaction.

# Future Improvements
- [ ] Write contract error management: The error management implemented was only
  on writing the contract. However, on getting the transaction receipt, there
  are other errors that can be handled.
- [ ] Add variants for different UI components (Button, InputText, etc).
- [ ] Increase test coverage.
