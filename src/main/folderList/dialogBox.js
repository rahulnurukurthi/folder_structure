import React, { useEffect, useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Box, Button, createMuiTheme,TextField, Grid, Icon,useTheme, makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  customTextField: () => ({
    "&>div>fieldset>legend": {
      background: "white",
    },
    "& .MuiIconButton-root:focus": {
      outline: "none",
    },
  }),
  errorStyle: {
    color: "red",
    float: "left",
    padding: "0 5px",
    transform: "translate(-5px, 6px) scale(0.75)",
    background: "white",
    height: "max-content",
    marginTop: "-19px",
  },
  topPanel: (props) => ({
    borderRadius: 3,
    background: props.background,
    boxShadow: props.boxShadow,
    textAlign: "center",
    marginLeft: theme.spacing(2),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: "16px",
    // marginTop:-1,
    marginBottom: theme.spacing(2),
  }),
  icon: {
    overflow: "unset",
    fontSize: "300%",
    textAlign: "center",
    color: "#fff",
    //margin: theme.spacing(-2.2,0,0,0),
  },
  subTitle: {
    color: "#999",
    margin: '16px',
    fontWeight: 400,
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.75rem",
    },
  },
  title: (props) => ({
    color: "#3C4858",
    marginTop: -8,
    fontWeight: 300,
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  }),
  close: {
    background: "rgba(0, 0, 0, 0.07)",
    position: "absolute",
    top: 0,
    right: theme.spacing(2),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    "&:hover": {
      background: "red",
      "& .material-icons": {
        color: "#fff",
      },
    },
  },
  dialogBody: (props) => ({
    padding: theme.spacing(2),
    backgroundColor: props.secondaryBg,
  }),
}));

const fields = {
  title: {
    label: "Enter Folder Name",
    value: "",
    valid: false,
    errorLabel: "Enter Valid Name",
    error: "",
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox(props) {
  let drawerContent = { ...props.propsDrawer };
  const classes = useStyles(drawerContent);
  const [Field, setField] = useState({ ...fields });
  const  theme = useTheme();

  useEffect(() => {
    let updateForm = { ...Field };
    updateForm["title"].value = "";
    setField(updateForm);
  }, [props]);

  const changeInField = (e, fieldname) => {
    let updateForm = { ...Field };
    let updateFormField = updateForm[fieldname];
    updateFormField.value = e.target.value;
    updateForm[fieldname] = updateFormField;
    setField(updateForm);
  };

  const cancelClick = () => {
    props.closeDialog();
  };

  const list = () => {
    let FieldForm = [];
    FieldForm.push(
      <Box mt={3}>
        <TextField
          label={Field["title"]["label"]}
          variant="outlined"
          size="small"
          fullWidth
          className={classes.customTextField}
          value={Field["title"]["value"]}
          onChange={(event) => changeInField(event, "title")}
        />
        {!Field["title"].valid ? (
          <div className={classes.errorStyle}>
            <Typography variant="caption" style={{ color: "red" }}>
              {Field["title"].error}
            </Typography>
          </div>
        ) : (
          <span></span>
        )}
      </Box>
    );
    return FieldForm;
  };

  const saveData = (type) => {
    props.payloadData(Field,type);
    props.closeDialog();
  };

  return (
    <div>
      <Dialog
        open={props.openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.closeDialog}
        fullWidth={true}
        // maxWidth={drawerContent.width}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
         
          <Grid item xs={5} sm={7} md={6} lg={7} xl={7}>
            <Box>
              <Typography variant="h6" className={classes.subTitle}>
                {drawerContent.subTitle}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={2} sm={2} md={4} lg={3} xl={3}>
            <Button
              onClick={props.closeDialog}
              size="small"
              className={classes.close}
            >
              <Icon fontSize="small">close</Icon>
            </Button>
          </Grid>
        </Grid>

        <Box className={classes.dialogBody}>
          <Paper>
            {drawerContent.clickType !== "delete" ? (
              <form className={classes.form} noValidate autoComplete="off">
                {list()}
              </form>
            ) : (
              <Typography style={{padding:'16px'}}>Do you want to delete ?</Typography>
            )}
          </Paper>
        </Box>

        <Box display="flex" justifyContent="flex-end" m={2}>
          <Box mr={2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<CancelIcon />}
              size="small"
              onClick={cancelClick}
            >
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              disabled={drawerContent.clickType === "create" ? Field["title"]["value"].length ? false : true : false}
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={()=>saveData(drawerContent.clickType)}
              size="small"
            >
              {drawerContent.clickType === "create" ? "Create" : drawerContent.clickType === 'rename' ? 'Rename' : "Delete"}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
