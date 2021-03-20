import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box,Paper } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    height:window.innerHeight - 80,
    backgroundColor: "#434247",
    overflow:'auto',
    borderRadius: '12px 0 0 12px',
    border: '1px solid #878787'
  },
}));

export default function FolderListSection() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <Box style={{padding:'16px'}}>
            <Box display="flex" width={1} alignItems="center">
                <Icon fontSize='small' style={{color: '#ff5f57'}}>circle</Icon>
                <Icon fontSize='small' style={{color: '#febc2e'}}>circle</Icon>
                <Icon fontSize='small' style={{color: '#28c840'}}>circle</Icon>
            </Box>
        </Box>
    </Paper>
  );
}
