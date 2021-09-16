import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {ProductShow} from './components/productShow'




function App() {
  return (
    <div className="App">


    <div className="col-md-12 bg-prpl header">
    <div class="text-right   col-md-2"><img src="./logo4.png"></img></div>
    <div class="  col-md-8 emptycont"></div>
    <div class="text-left   col-md-2"><a><i class="fas fa-sign-in-alt"></i></a>
</div>
    </div>
     <Router>

       <div className="col-md-12 p-0">
       <div className="rightmenu col-md-2   bg-prpl-1 text-right ">
     <div className="topMenu"><Link className="d-block" to="./"><button className="btn text-light bg-prpl-1 w-100 text-right">صفحه اصلی</button></Link><Link className="d-block" to="/displayProduct"><button className="btn text-light bg-prpl-1 w-100 text-right">فرم</button></Link></div>
     </div>
     <Switch>
     <div className=" col-md-10">
     <Route path='/displayProduct' component={ProductShow} />
   </div>
   </Switch>

   </div>  

   </Router>
   </div>
  );
}

export default App;
