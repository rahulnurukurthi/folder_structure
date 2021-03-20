import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import "../App.css";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight - 80,
    backgroundColor: "#434247",
    overflow: "auto",
    borderRadius: "12px 0 0 12px",
    border: "1px solid #878787",
  },
}));

export default function FolderListSection() {
  const classes = useStyles();
  const [folderList, setFolderList] = useState([
    { name: "AirDrop", icon: "add" },
    { name: "Recents", icon: "" },
    { name: "Applications", icon: "" },
    { name: "Downloads", icon: "" },
    { name: "Pictures", icon: "" },
    { name: "Music", icon: "" },
    { name: "Movies", icon: "" },
    { name: "Creative Cloud Files", icon: "" },
  ]);

  useEffect(() => {}, []);

  const copyCoupon = (e, data) => {
    let coupon = data.copy;
    navigator.clipboard.writeText(coupon);
    alert(`Coupon code ${coupon} copied to your clipboard`);
  };

  return (
    <Paper className={classes.root}>
      <Box style={{ padding: "24px" }}>
        <Box display="flex" width={1} alignItems="center">
          <Icon
            fontSize="small"
            style={{ color: "#ff5f57", marginRight: "8px" }}
          >
            circle
          </Icon>
          <Icon
            fontSize="small"
            style={{ color: "#febc2e", marginRight: "8px" }}
          >
            circle
          </Icon>
          <Icon fontSize="small" style={{ color: "#28c840" }}>
            circle
          </Icon>
        </Box>
        <Box mt={2}>
          <Typography style={{ color: "#878787", fontWeight: "bold" }}>
            Favourites
          </Typography>
        </Box>
        <Box mt={2}>
          {/* <> */}
          <ContextMenuTrigger id="contextmenu">
            <div className="coupon">
              {folderList.map((data) => (
                <Box mb={2} display="flex">
                  <Icon style={{ color: "", marginRight: "8px" }}>
                    {data.icon}
                  </Icon>
                  <Typography style={{ color: "#f0f0f0", fontWeight: "bold" }}>
                    {data.name}
                  </Typography>
                </Box>
              ))}
            </div>
          </ContextMenuTrigger>
        </Box>
      </Box>

      <ContextMenu id="contextmenu">
        <MenuItem data={{ copy: "MI50" }} onClick={copyCoupon}>
          {/* <FaRegCopy className="copy"/> */}
          <Icon className="copy">copy</Icon>
          <span>Copy</span>
        </MenuItem>
      </ContextMenu>
    </Paper>
  );
}
