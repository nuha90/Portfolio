import './App.css';
import Home from './component/Home';
import Resume from './component/resume';
import Contact from './component/contact';
import Skills from './component/skills';
import Projects from './component/portfolio';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ background: 'black', paddingBottom: '6rem' }}>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/about-me" component={Skills} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
