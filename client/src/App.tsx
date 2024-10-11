import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { Layout } from "./components/layout";
import { Button } from "./components/ui";
import { config } from "./config";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Button>Login</Button>
        </Layout>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
