import { Grid} from '@mui/material';

import React, { Component } from 'react';
import './catagory.css'



{/* 
<span className='Catagory-items'>Electronice</span>
<span className='Catagory-items'>Electronice</span>
<span className='Catagory-items'>Electronice</span> */}
class Catagory extends Component {
    state = {  } 
    render() { 
        return (
            <div className='Catagory-tab' >
            <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
            <span className='Catagory-items'>Electronice</span>
            </Grid>
            <Grid item xs={6} md={4}>
            <span className='Catagory-items'>Electronice</span>
            </Grid>
            <Grid item xs={6} md={4}>
            <span className='Catagory-items'>Electronice</span>
            </Grid>
            <Grid item xs={6} md={8}>
            <span className='Catagory-items'>Electronice</span>
            </Grid>
          </Grid>
          </div>
        );
    }
}
 
export default Catagory;