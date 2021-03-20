// import './App.css';
import Movies from './component/movies';
import Navbar from './component/navbar';
import {Redirect, Route, Switch} from 'react-router-dom';
import Customer from './component/customer'
import Rentel from './component/rentel'
import NotFound from './component/not-found'
import MovieForm from './component/movieform'
import Login from './component/login';
import Register from './component/reginster';
import NewMovie from './component/addMovieForm';

function App() {
  return (
    <>
      <Navbar />
    <div className="App container">
      <Switch>
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/movies/new' component={NewMovie} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/movie/:id' component={MovieForm} />
        <Route exact path='/customer' component={Customer} />
        <Route exact path='/rentel' component={Rentel} />
        <Route exact path='/not-found' component={NotFound} />
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
      {/* <Movies /> */}
    </div>
    </>
  );
}

export default App;
