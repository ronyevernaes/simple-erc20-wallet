import { FC } from "react";
import { useConnect } from "wagmi";

import { Layout } from "../../components/layout";
import { Button } from "../../components/ui";

export const LoginPage: FC = () => {
  const { connectors, connect } = useConnect();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </Button>
        ))}
      </div>
    </Layout>
  );
};
