import { withStyles } from '@material-ui/core/styles';
import paper from '../Assests/images/paper.jpg'

import {Box,makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    home:{
        background:'linear-gradient(45deg, #6E97EB 30%, #060368 90%)',
        
  
    },
    image:{
        width:'50%',
        height:'50%',
       
    },
    text_header1:{
        position: 'absolute', 
                          color: '#060368', 
                          top:200, 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontSize:40,
                          textDecoration:'bold'
    }
})
const Home = ()=>
{
    const classes = useStyle();
return(
    <Box className={classes.home} >
       
        <Box className={classes.home} style= {{display:'flex'}}>
        <img className={classes.image} src = {paper}/>
        <img className={classes.image} src = {paper}/>
        <h1 className={classes.text_header1}>     WELCOME AUTHORS.... </h1>
    </Box>
    </Box>
  
)


}

export default Home;