import React, {  } from 'react';
import Header from './layout/Header';
import Grid from '@material-ui/core/Grid';
import NaviRoutes from './layout/component/Routes/NaviRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App(){
    return(
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <NaviRoutes/>
          </Grid>  
          <Grid item xs={2}></Grid> 
        </Grid>
        
      </div>
    );
}

export default App;