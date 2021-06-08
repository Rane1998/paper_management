import{useEffect, useState} from 'react';
import{getPapers,deletePaper} from '../Service/api';
import{TableHead,TableRow,TableBody,TableCell,Table,makeStyles,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyle = makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
        
    },
    t_head:{
        '& > *':{
            background:'#060368',
            color:'#6E97EB',
            fontSize:20
        }
    },
    row:{
        '& > *':{
           
            fontSize:15
        }
    },

})






const ViewPapers =  () => {

const [papers,setPapers] = useState([]);
const classes = useStyle();
    useEffect(()=>{
     getAllPapers();
    }, [])

    const getAllPapers = async () => {

       const response = await getPapers();
       console.log(response.data);
       setPapers(response.data);
    }

    const deletePaperData = async (id) => {
        await deletePaper(id);
        getAllPapers();
    }
    return(
       <Table className ={classes.table}>
           <TableHead>
               <TableRow className ={classes.t_head}>
                   <TableCell>Id</TableCell>
                   <TableCell>Title</TableCell>
                   <TableCell>Subject</TableCell>
                   <TableCell>Type</TableCell>
                   <TableCell>Author</TableCell>
                   <TableCell>Date</TableCell>
                   <TableCell>No: of pages</TableCell>
                   <TableCell></TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {
                   papers.map(paper =>(
                            <TableRow className = {classes.row}>
                                <TableCell>{paper.id}</TableCell>
                                <TableCell>{paper.title}</TableCell>
                                <TableCell>{paper.subject}</TableCell>
                                <TableCell>{paper.type}</TableCell>
                                <TableCell>{paper.author}</TableCell>
                                <TableCell>{paper.date}</TableCell>
                                <TableCell>{paper.pages}</TableCell>
                                <TableCell>
                                    <Button variant = "contained" style = {{marginRight:10}} component = {Link} to = {`edit/${paper.id}`}>Edit</Button>    
                                    <Button  variant = "contained" color = "secondary" onClick ={() => deletePaperData(paper.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                   ))
               }
           </TableBody>
       </Table>
    );
}


export default ViewPapers;