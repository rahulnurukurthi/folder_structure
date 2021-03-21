import { Grid } from '@material-ui/core';
import React,{useState} from 'react';
import FolderDisplaySection from './folderDisplay/folderDisplaySection';
import FolderListSection from './folderList/folderListSection';
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

export default function HomePage(props) {

  const classes = useStyles();;
  const [displayData,setDisplayData] = useState('Air Drop');

  const folderPayload= (data) => {
    setDisplayData(data);
  }

  return (
    <div  className={classes.root}>
      <Grid container className={classes.gridStyles}>
        <Grid item xs={4}>
          <FolderListSection clickedFolder={folderPayload} />
        </Grid>
        <Grid item xs={8}>
          <FolderDisplaySection folderDisplayPayload={displayData} />
        </Grid> 
      </Grid>
    </div>
  );
}
