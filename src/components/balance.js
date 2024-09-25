import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ImSpinner } from "react-icons/im";
import Axios from "axios";

import "react-multi-carousel/lib/styles.css";

import Coins from "../assets/json/coin_list.json";

export default function Balance() {
  const [dipositAmount, setDipositAmount] = React.useState(0);
  const [isLoding1, setIsLoding1] = React.useState(false);
  const [isLoding2, setIsLoding2] = React.useState(false);

  React.useEffect(() => {
    getBalance();
    setInterval(() => {
      getBalance();
    }, 3000);
  }, []);

  const getBalance = () => {
    try {
      Axios.post("/api/getBalance").then((res) => {
        if (res.data.flag)
          setRows([createData("amount.png", "Amount", res.data.balance)]);
        else console.log(res.data.serverMsg);
      });
    } catch (err) {
      throw err;
    }
  };

  const Withdraw = () => {
    try {
      setIsLoding2(true);
      Axios.post("/api/withdraw", {}).then((res) => {
        alert(res.data.serverMsg);
        setIsLoding2(false);
      });
    } catch (err) {
      throw err;
    }
  };

  const Deposit = () => {
    if (dipositAmount <= 0) {
      alert("Input deposit amount");
      return;
    }
    try {
      setIsLoding1(true);
      Axios.post("/api/diposit", { dipositAmount }).then((res) => {
        alert(res.data.serverMsg);
        setIsLoding1(false);
      });
    } catch (err) {
      throw err;
    }
  };

  const [rows, setRows] = React.useState([
    createData("amount.png", "Amount", 0),
  ]);

  function createData(url, name, eth) {
    return { url, name, eth };
  }

  return (
    <div id="balance" className="x-patten">
      <div className="x-balance-header x-flex">
        <div className="x-hd-title">Your balance</div>
        <div className="x-flex">
          <div className="x-flex x-justify-center x-items-center">
            <label>Amount(ETH):&nbsp;</label>
            <input
              type="number"
              className="form-controll"
              onChange={(e) => setDipositAmount(e.target.value)}
            />
          </div>
          <Button
            className="x-hd-btn"
            onClick={Deposit}
            disabled={isLoding1 || isLoding2 ? true : false}
          >
            {isLoding1 ? (
              <ImSpinner className="spinner-item" />
            ) : (
              <span>Deposite</span>
            )}
          </Button>
          <Button
            className="x-hd-btn"
            onClick={Withdraw}
            disabled={isLoding1 || isLoding2 ? true : false}
          >
            {isLoding2 ? (
              <ImSpinner className="spinner-item" />
            ) : (
              <span>Withdraw</span>
            )}
          </Button>
        </div>
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
                      src="/cex_icons/deposit.png"
                      alt=""
                    />
                    Deposit
                  </TableCell>
                  {Coins.list.map((d, ind) => (
                    <TableCell
                      key={ind}
                      sx={{
                        minWidth: 100,
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
                    <TableCell align="right" sx={{ fontSize: 16 }}>
                      {row.eth}
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
