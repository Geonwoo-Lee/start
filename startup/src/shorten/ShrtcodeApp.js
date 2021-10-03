import './ShrtcodeApp.css'
import React from 'react'
import {Grid} from '@material-ui/core'
import Search from './components/Search';


function ShrtcodeApp() {
    return (
        <div className="shrt">
            <Grid className="App" container direction = 'culumn' justify = "center" alignItems = 'center'>
                 <Search/>
             </Grid>
        </div>
    )
}

export default ShrtcodeApp
