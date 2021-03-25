import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BookFlights from './components/BookFlights/BookFlights';
import FlightStatus from './components/FlightStatus/FlightStatus';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/bookflights" component = {BookFlights} />
          <Route path = "/flightstatus" component = {FlightStatus} />
          <Route path = "/admin" component = {Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
