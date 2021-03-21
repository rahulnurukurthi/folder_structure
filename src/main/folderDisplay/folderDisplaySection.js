import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import FolderIcon from "../../assets/Folder-icon.png";
import "../../App.css";
import DialogBox from "../folderList/dialogBox";
import Draggable from "react-draggable";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight - 80,
    backgroundColor: "#1d1b26",
    overflow: "auto",
    borderRadius: "0 12px 12px 0",
    border: "1px solid #878787",
  },
}));

export default function FolderDisplaySection(props) {
  const classes = useStyles();
  const [foldersList, setFoldersList] = useState([]);
  let drawerContent = {};
  const [modalDrawer, setModalDrawer] = useState({ status: false });
  const [index, setIndex] = useState(1);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    getFoldersList();
  }, [foldersList]);

  const getFoldersList = (payloadData, type) => {
    switch (type) {
      case "delete":
        dialogDelete();
        break;
      case "rename":
        renameFolder(payloadData);
        break;
      default:
        break;
    }
    let updatedData = [...foldersList];
    if (payloadData !== undefined) {
      let displayData = { id: index, label: payloadData.title.value };
      setFoldersList([...updatedData, { displayData }]);
      setIndex(index + 1);
    }
  };

  const renameFolder = (payloadData) => {
    let data = [...foldersList];
    console.log(foldersList)
    let index = data.findIndex(function (item, i) {
      return item.displayData["id"] === deleteId;
    });
    foldersList[index].displayData.label = payloadData.title.value;
    setFoldersList([...foldersList]);
  };

  const dialogDelete = () => {
    let data = [...foldersList];
    let index = data.findIndex(function (item, i) {
      console.log(item.displayData["id"]);
      console.log(deleteId)
      return item.displayData["id"] === deleteId;
    });
    foldersList.splice(index, 1);
    console.log(foldersList);
    setFoldersList([...foldersList]);
  };

  const templateModalBox = (id, type, deleteid) => {
    let propsDrawer = drawerContent;
    switch (type) {
      case "delete":
        propsDrawer.subTitle = "Delete Folder";
        break;
      case "rename":
        propsDrawer.subTitle = "Rename Folder";
        break;
      case "create":
        propsDrawer.subTitle = "Create Folder";
        break;
      default:
        break;
    }
    propsDrawer.status = !modalDrawer.status;
    propsDrawer.clickType = type;
    setDeleteId(deleteid);
    setModalDrawer(propsDrawer);
  };

  const rightClickActions = (e, data, id) => {
    let clickType = data;
    navigator.clipboard.writeText(clickType);
    templateModalBox(0, clickType, id);
  };

  return (
    <ContextMenuTrigger id="contextmenu">
      <Paper className={classes.root}>
        <Box style={{ padding: "24px" }}>
          <Typography variant="h6" style={{color:'#FFF',marginBottom:'16px'}}>{props.folderDisplayPayload}</Typography>
          {foldersList.length > 0 ? (
            <Grid container spacing={2}>
              {foldersList.map((folder) => (
                <div className="container">
                  <Draggable bounds="parent">
                    <div style={{ width: 100 }} className={"draggable"}>
                      <Grid item xs={3} key={folder.displayData.id}>
                        <div>
                          {folder.displayData.label ? (
                            <img src={FolderIcon} alt="Folder" />
                          ) : (
                            ""
                          )}
                        </div>
                        <Box style={{ color: "#FFF" }}>
                          {folder.displayData.label}
                        </Box>
                      </Grid>
                    </div>
                  </Draggable>
                </div>
              ))}
            </Grid>
          ) : (
            ""
          )}
        </Box>

        <ContextMenu id="contextmenu">
          <MenuItem onClick={(event) => rightClickActions(event, "create")}>
            <span>New Folder</span>
          </MenuItem>
          <MenuItem onClick={(event) => rightClickActions(event, "delete", 1)}>
            <span>Delete</span>
          </MenuItem>
          <MenuItem onClick={(event) => rightClickActions(event, "rename", 1)}>
            <span>Rename</span>
          </MenuItem>
        </ContextMenu>

        {modalDrawer.status ? (
          <DialogBox
            openDialog={modalDrawer.status}
            closeDialog={() => templateModalBox(0)}
            propsDrawer={modalDrawer}
            dialogType="create"
            payloadData={getFoldersList}
          />
        ) : (
          ""
        )}
      </Paper>
    </ContextMenuTrigger>
  );
}
