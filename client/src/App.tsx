import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { config } from "./config";
import { Header } from "./components/layout";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div
          className="flex flex-col justify-between items-center h-screen gap-8 px-0 md:px-8"
        >
          <Header>SimpleX Wallet</Header>

          <button>Login</button>

          <footer className="py-2 w-full text-center">
            {new Date().getFullYear()} &copy; All rights reserved
          </footer>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
};

export default App;
