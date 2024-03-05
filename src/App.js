import './App.css';
import Head from './components/head';
import Services from './components/services';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className="App p-12">
      <Head />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
