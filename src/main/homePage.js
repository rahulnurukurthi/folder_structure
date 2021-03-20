import { Grid } from '@material-ui/core';
import React from 'react';
import FolderDisplaySection from './folderDisplaySection';
import FolderListSection from './folderListSection';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: "#1d1b26",
  },
  gridStyles:{
    padding: theme.spacing(4.5)
  }
}));

export default function HomePage() {

  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Grid container className={classes.gridStyles}>
        <Grid item xs={4}>
          <FolderListSection />
        </Grid>
        <Grid item xs={8}>
          <FolderDisplaySection />
        </Grid>
      </Grid>
    </div>
  );
}
