import {Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography} from '@material-ui/core';
import { useState } from 'react';
import {addPaper} from '../Service/api';
import {useHistory} from 'react-router-dom';



const useStyle = makeStyles({
   container:{
    /*backgroundImage:`url(${paper})`,
   
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    padding: 24, */
  background:'white',
        width:'50%',
        margin:'3% 25% 0 25%',
        '& > *':{
            marginTop:5
        }
        
    },
    
     text:{
         color:'#060368',
         fontWeight:'bold',
         
     }
  
})

const initialValues = {
    title:'',
    subject:'',
    type:'',
    author:'',
    date:'',
    pages:''
}
const AddPapers = ()=>{
    const [paper,setPaper] = useState(initialValues);
    const{title,subject,type,author,date,pages} = paper;
    const classes = useStyle();
    const history = useHistory();

const onValueChange = (e) => {
    console.log(e.target.value);
setPaper({...paper,[e.target.name]:e.target.value})
}

const addPaperDetails = async () => {
    await addPaper(paper);
    history.push('./all');
}
    return(
       
            
        <FormGroup className = {classes.container} >
            <Typography className ={classes.text} variant = "h5" >Add New paper</Typography>
            <FormControl required >
            <InputLabel > Title </InputLabel>
            <Input onChange = {(e) => onValueChange(e)} name ='title' value ={title}/>
            </FormControl>

            <FormControl required >
            <InputLabel color = "white"> Subject </InputLabel>
            <Input onChange = {(e) => onValueChange(e)} name ='subject' value ={subject}/>
            </FormControl>

            <FormControl required >
            <InputLabel> Type </InputLabel>
            <Input required onChange = {(e) => onValueChange(e)} name ='type' value ={type}/>
            </FormControl>

            <FormControl required >
            <InputLabel> Author </InputLabel>
            <Input onChange = {(e) => onValueChange(e)} name ='author' value ={author}/>
            </FormControl>

            <FormControl>
            <InputLabel> Date</InputLabel>
            <Input onChange = {(e) => onValueChange(e)} name ='date' value ={date}/>
            </FormControl>

            <FormControl required >
            <InputLabel> No: of Pages </InputLabel>
            <Input onChange = {(e) => onValueChange(e)} name ='pages' value ={pages}/>
            </FormControl>
            <Button variant = "contained" color = "primary"  >Upload the Paper</Button>
            <Button variant = "contained" color = "primary"  onClick ={() => addPaperDetails()}>Submit</Button>

            
        </FormGroup>
       
    );
}

export default AddPapers;