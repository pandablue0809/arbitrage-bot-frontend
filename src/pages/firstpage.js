import { Container } from "@mui/material";
import * as React from "react";
import Home from "../components/home";

import { useBlockchainContext } from "../context";

export default function Firstpage() {
  const [state, { setCurrentPage }] = useBlockchainContext();

  React.useEffect(() => {
    setCurrentPage(0);
  }, []);

  return (
    <div id="firstpage">
      <Container>
        <Home />
      </Container>
    </div>
  );
}
