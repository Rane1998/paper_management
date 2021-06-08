import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header:{
        background:'#060368'
        
    },
    tabs:{
  color:'#6E97EB ',
  textDecoration:'none',
  marginRight:20,
  fontSize:20
    }
})

const NavBar = () => {
    const classes = useStyle();
return (
    <AppBar className = {classes.header} position = 'static' >
    <Toolbar>
        <NavLink className = {classes.tabs} to = "./" exact  >Home</NavLink>
        <NavLink className = {classes.tabs} to ="./all" exact >My Papers</NavLink>
        <NavLink className = {classes.tabs} to ="./add_papers" exact>Add Papers</NavLink>
        <NavLink className = {classes.tabs} to ="./add_templates" exact>Add Templates</NavLink>

    </Toolbar>
    </AppBar>
)

}

export default NavBar;