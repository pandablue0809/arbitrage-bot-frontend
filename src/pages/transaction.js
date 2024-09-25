import * as React from "react";
import { Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { useBlockchainContext } from "../context";

export default function Transaction() {
  const [, { setCurrentPage }] = useBlockchainContext();

  React.useEffect(() => {
    setCurrentPage(4);
  }, []);

  return (
    <div id="transaction">
      <Container>
        <div className="x-patten">
          <div className="x-balance-header">
            <div className="x-hd-title">Transactions</div>
          </div>
          <div className="x-recent-body">
            <div className="x-tbl-header">
              <div className="x-title col-1">TYPE, DATE</div>
              <div className="x-title col-2">CURRENCY</div>
              <div className="x-title col-3">AMOUNT</div>
              <div className="x-title col-4">ORDER</div>
              <div className="x-title col-5">STATUS</div>
            </div>
            <div className="x-tbl-body">
              <div className="x-tbl-none">Transactions not found</div>
            </div>
            <Pagination count={1} variant="outlined" color="primary" />
          </div>
        </div>
      </Container>
    </div>
  );
}
