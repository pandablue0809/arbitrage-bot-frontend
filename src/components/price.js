import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Axios from "axios";
import "react-multi-carousel/lib/styles.css";
import Coins from "../assets/json/coin_list3.json";

export default function Price() {
  const [rows, setRows] = useState([
    createData("uniswap.svg", "Uniswap", 0),
    createData("sushiswap.svg", "Sushiswap", 0),
  ]);

  useEffect(() => {
    getPrice();
    setInterval(() => {
      getPrice();
    }, 3000);
  }, []);

  function createData(url, name, eth) {
    return { url, name, eth };
  }

  const getPrice = async () => {
    try {
      Axios.post("/api/getPrice", {}).then((res) => {
        if (res.data.flag)
          setRows([
            createData("uniswap.svg", "Uniswap", res.data.UniSwap),
            createData("sushiswap.svg", "Sushiswap", res.data.SushiSwap),
          ]);
        else console.log(res.data.serverMsg);
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div id="balance" className="x-patten">
      <div className="x-balance-header">
        <div className="x-hd-title">Token price</div>
      </div>
      <div className="x-balance-body">
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      minWidth: 150,
                      fontSize: 18,
                      background: "rgb(230,230,230)",
                    }}
                    align="left"
                  >
                    <img
                      className="x-cex_icon"
                      src="/cex_icons/cexio.svg"
                      alt=""
                    />
                    DEX List
                  </TableCell>
                  {Coins.list.map((d, ind) => (
                    <TableCell
                      key={ind}
                      sx={{
                        minWidth: 150,
                        borderRight: "1px solid rgba(100,100,100,0.1)",
                      }}
                      align="center"
                    >
                      <div className="x-title">
                        <img src={"/crypto_rec_icons/" + d.url} alt={d.name} />
                        <span>
                          {d.name}
                          <br />
                          {d.symbol_tyle}
                        </span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, ind) => (
                  <TableRow
                    key={ind}
                    value={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ minWidth: 150, fontSize: 18 }}
                    >
                      <div>
                        <img
                          className="x-cex-icon"
                          src={"/cex_icons/" + row.url}
                          alt=""
                        />
                        {row.name}
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="x-cex-price"
                      sx={{ fontSize: 16 }}
                    >
                      {Number(row.eth).toFixed(3)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
