import './App.css';
import Nav from './components/nav';
import Head from './components/head';
import Services from './components/services';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div id="home" className="App">
      <Nav />
      <Head />
      <body className="p-6">
        <Services />
        <Experience />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;
