import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import HeaderNavbar from './components/Header/HeaderNavbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Booking from "./components/Booking/Booking";
import AddService from "./components/AddService/AddService";
import ManageServices from "./components/ManageServices/ManageServices";

function App() {
  return (
          <AuthProvider>

             <Router>

                    <HeaderNavbar></HeaderNavbar>

               <Switch>
                    
                    <Route exact path='/'>
                    <Home></Home>
                    </Route>

                    <Route exact path='/home'>
                    <Home></Home>
                    </Route>

                    <Route exact path='/login'>
                    <Login></Login>
                    </Route>

                    <Route exact path='/destination'>
                    <Destination></Destination>
                    </Route>

                    <Route exact path='/addService'>
                     <AddService></AddService>
                    </Route>

                    <Route exact path='/manageService'>
                     <ManageServices></ManageServices>
                    </Route>

                    <PrivateRoute exact path='/booking/:id'>
                     <Booking></Booking>
                    </PrivateRoute>

                    <Route path='*'>
                    <NotFound></NotFound>
                    </Route>

               </Switch>

                    <Footer></Footer>

             </Router>

          </AuthProvider>
    
  );
}

export default App;
