// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  //for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    // dismiss automatically after 2 sec
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  //whether dark mode is enable or not
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setToggleText('Enable Light Mode');
      showAlert('Light mode enabled !', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleText('Enable Dark Mode');
      showAlert('Dark mode enabled !', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Ko ko Bop"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          toggleText={toggleText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textbox
                heading="Enter your text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
