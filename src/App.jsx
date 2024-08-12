import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { Home, About, Pages, Footer } from './containers'; // Ensure these are imported correctly

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="Home">
        <Home /> {}
      </section>
      <section id="AboutUs">
        <About /> {}
      </section>
      <section id="Courses">
        <Pages /> {}
      </section>
      <footer id="footer">
        <Footer /> {}
      </footer>
    </div>
  );
}

export default App;
