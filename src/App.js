import './App.css';
import Nav from './components/nav';
import Head from './components/head';
import Services from './components/services';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div id="home" className="App">
      <Nav />
      <body className="p-6">
        <Head />
        <Services />
        <Experience />
        <Contact />
      </body>
    </div>
  );
}

export default App;
