import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight - 80,
    backgroundColor: "#434247",
    overflow: "auto",
    borderRadius: "12px 0 0 12px",
    border: "1px solid #878787",
  },
  listActions:{
    '&:hover':{
      background: '#aba9a9'
    },
    '&:active':{
      background: '#aba9a9'
    },
    "&:focus": {
      background: '#aba9a9'
    },
    cursor:'pointer'
  }
}));

export default function FolderListSection(props) {
  const classes = useStyles();
  const [folderList, setFolderList] = useState([
    { name: "AirDrop", icon: "" },
    { name: "Recents", icon: "" },
    { name: "Applications", icon: "" },
    { name: "Downloads", icon: "" },
    { name: "Pictures", icon: "" },
    { name: "Music", icon: "" },
    { name: "Movies", icon: "" },
    { name: "Creative Cloud Files", icon: "" },
  ]);

  const selectedFolder = (data) => {
    props.clickedFolder(data);
  }

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
          {folderList.map((data,index) => (
            <Box mb={2} display="flex" key={index} onClick={()=>selectedFolder(data.name)} className={classes.listActions}>
              <Typography style={{ color: "#f0f0f0", fontWeight: "bold" }}>
                {data.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

    </Paper>
  );
}
