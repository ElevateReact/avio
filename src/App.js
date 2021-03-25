import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BookFlights from './components/BookFlights/BookFlights';
import FlightStatus from './components/FlightStatus/FlightStatus';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/bookflights" component = {BookFlights} />
          <Route path = "/flightstatus" component = {FlightStatus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
