import * as React from "react";
import { Container } from "@mui/material";

import { useBlockchainContext } from "../context";
import BotController from "../components/controller";

export default function Tradingview() {
  const [state, { setCurrentPage, setCurrentMode }] = useBlockchainContext();

  React.useEffect(() => {
    setCurrentPage(2);
    setCurrentMode(1);
  }, []);

  return (
    <div id="tradingview" className="tradingview-page">
      <Container>
        <BotController />
      </Container>
    </div>
  );
}
