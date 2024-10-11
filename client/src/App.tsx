import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { config } from "./config";
import { Router } from "./router";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
