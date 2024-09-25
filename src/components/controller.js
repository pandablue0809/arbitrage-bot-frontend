import * as React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Axios from "axios";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function BotSetting() {
  const [checked, setChecked] = React.useState(false);
  // const [earnAmount, setEarnAmount] = React.useState(0);
  const [tradeAmount, setTradeAmount] = React.useState(0);

  const checkedChange = () => {
    if (checked) {
      if (!window.confirm("Stop running bot?")) return;
      BotStop();
    } else {
      if (tradeAmount <= 0) {
        alert("Input trade amount");
        return;
      }
      // if (earnAmount <= 0) {
      //   alert("Input earn amount per 1 eth");
      //   return;
      // }
      if (!window.confirm("Start bot?")) return;
      BotStart();
    }
    setChecked(!checked);
  };

  const BotStart = () => {
    try {
      Axios.post("/api/botStart", { tradeAmount }).then((res) => {
        console.log(res.data.serverMsg);
      });
    } catch (err) {
      throw err;
    }
  };

  const BotStop = () => {
    try {
      Axios.post("/api/botStop", {}).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div id="balance" className="x-patten">
      <div className="x-balance-header">
        <div className="x-hd-title">Bot setting</div>
        <div className="x-flex">
          {/* <div className="x-flex x-justify-center x-items-center px-5">
            <label>Run Amount($):&nbsp;</label>
            <input
              type="number"
              className="form-controll"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => setEarnAmount(e.target.value)}
            />
            <span>&nbsp;/ ETH</span>
          </div> */}
          <div className="x-flex x-justify-center x-items-center px-5">
            <label>Trade Amount(ETH):&nbsp;</label>
            <input
              type="number"
              className="form-controll"
              onChange={(e) => setTradeAmount(e.target.value)}
            />
          </div>
          <div className="px-5">
            <FormControlLabel
              label="START"
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  onChange={checkedChange}
                  checked={checked}
                />
              }
            />
          </div>
        </div>
      </div>

      <div className="x-patten runnig-table">
        <div className="x-balance-header">
          <div>Running History</div>
        </div>
        <div className="x-recent-body">
          <div className="x-tbl-header">
            <div className="x-title col-1">START DATE</div>
            <div className="x-title col-2">STOP DATE</div>
            <div className="x-title col-3">AMOUNT</div>
            <div className="x-title col-4">ORDER</div>
            <div className="x-title col-5">STATUS</div>
          </div>
          <div className="x-tbl-body">
            <div className="x-tbl-none">Running history not found</div>
          </div>
          <Pagination count={1} variant="outlined" color="primary" />
        </div>
      </div>
    </div>
  );
}
