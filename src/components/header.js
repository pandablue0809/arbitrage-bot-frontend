import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useBlockchainContext } from "../context";

export default function Header() {
  const [listStyle, setListStyle] = useState(["", "", "", "", ""]);
  const [state, { setCurrentPage }] = useBlockchainContext();

  useEffect(() => {
    let newArr = [...listStyle];
    for (let i = 0; i < 5; i++) {
      if (state.currentpage === i) {
        newArr[i] = "x-selected-list";
      } else {
        newArr[i] = "";
      }
    }
    setListStyle(newArr);
  }, [state.currentpage]);

  return (
    <div id="header">
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Grid item xs={3} sm={3} md={3} lg={3} container alignItems="center">
            <Link to="/" className="header-title">
              Arbitrage&nbsp;Bot
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={8}
            md={8}
            lg={9}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <div className={"x-h-list " + listStyle[1]}>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className={"x-h-list " + listStyle[2]}>
              <Link to="/controller">Controller</Link>
            </div>
            <div className={"x-h-list " + listStyle[3]}>
              <Link to="/transaction">Transactions</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
