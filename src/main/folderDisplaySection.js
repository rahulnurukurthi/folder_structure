import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height:window.innerHeight - 80,
    backgroundColor: "#1d1b26",
    overflow:'auto',
    borderRadius: '0 12px 12px 0',
    border: '1px solid #878787'
  },
}));

export default function FolderDisplaySection() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <Box style={{padding:'16px'}}>

        </Box>
        
    </Paper>
  );
}
