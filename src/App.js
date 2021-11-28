// import some components here
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HeaderNavbar from './components/Header/HeaderNavbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Booking from "./components/Booking/Booking";
import AddService from "./components/AddService/AddService";
import DeleteService from "./components/DeleteService/DeleteService";
import ManageBooking from "./components/ManageBooking/ManageBooking";
import MyBooking from "./components/MyBooking/MyBooking";
import Register from './components/Login/Register';

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

                    <Route exact path='/register'>
                    <Register></Register>
                    </Route>

                    <Route exact path='/addService'>
                     <AddService></AddService>
                    </Route>

                    <Route exact path='/myBooking'>
                     <MyBooking></MyBooking>
                    </Route>

                    <Route exact path='/manageBooking'>
                     <ManageBooking></ManageBooking>
                    </Route>

                    <Route exact path='/deleteService'>
                     <DeleteService></DeleteService>
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
