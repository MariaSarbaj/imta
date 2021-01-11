import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';


function App() {

    let routes = (
        <Switch>
            <Route path={'/'} exact component={}/>
            <Redirect to={'/#'}/>
        </Switch>
    )


  return (
    <div className="App">
        Hello
    </div>
  );
}

export default App;
