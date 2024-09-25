import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import * as React from "react";

import laptop_bg from "../assets/img/firstpage/laptop_bg.svg";
import main_header1 from "../assets/img/firstpage/main_header1.png";

export default function Home() {
  return (
    <div id="first-sector1">
      <Grid
        container
        pt={20}
        pb={20}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <div className="ali-l x-64">Multifunctional</div>
          <div className="ali-l x-65">Arbitrage Platform</div>
          <div className="ali-l x-18">
            Access Binance, Coinbase, Bithumb, Kraken and other world’s biggest
            exchanges via one platform.
          </div>
          <Button className="x-start-btn">
            <Link to="/dashboard">GET&nbsp;STARTED</Link>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          container
          justifyContent="flex-start"
          alignItems="center"
          style={{ position: "relative" }}
        >
          <div>
            <img src={laptop_bg} alt="laptop_bg" className="x-laptop_bg" />
          </div>
          <div>
            <img
              src={main_header1}
              alt="main_header1"
              className="x-main_header1"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
