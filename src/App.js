
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import { createContext, useEffect, useState } from 'react';
export const CoursesContext = createContext([]);
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(()=> {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    // <CoursesContext value={courses}>
      <Router>
        <CoursesContext.Provider value={courses}>
          <Header/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer/>
        </CoursesContext.Provider>
      </Router>
    // {/* </CoursesContext> */}
  );
}

export default App;
