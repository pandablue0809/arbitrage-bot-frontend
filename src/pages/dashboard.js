import * as React from "react";
import { Container } from "@mui/material";

import Balance from "../components/balance";
import Transaction from "../components/transaction";

import { useBlockchainContext } from "../context";
import TokenPrice from "../components/price";

export default function Dashboard() {
  const [, { setCurrentPage, setCurrentMode }] = useBlockchainContext();

  React.useEffect(() => {
    setCurrentPage(1);
    setCurrentMode(0);
  }, []);

  return (
    <div id="dashboard">
      <Container>
        <Balance />
        <TokenPrice />
        <Transaction />
      </Container>
    </div>
  );
}
