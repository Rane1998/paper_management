import NavBar from './components/NavBar';
import Home from './components/Home';
import ViewPapers from './components/ViewPapers';
import AddPapers from './components/AddPapers';
import AddTemplates from './components/AddTemplates';

import NotFound from './components/NotFound';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import EditPaper from './components/EditPaper';

function App() {
  return (
   <BrowserRouter>
     <NavBar/>
     
     <Switch>
     <Route exact path = "/" component = {Home}/>
     <Route exact path = "/all" component = {ViewPapers}/>
     <Route exact path = "/add_papers" component = {AddPapers}/>
     <Route exact path = "/add_templates" component = {AddTemplates}/>
     <Route exact path = "/edit/:id" component = {EditPaper}/>
     <Route component = {NotFound}/>
     </Switch>
   
   </BrowserRouter>
  
   
  );
 
}

export default App;
