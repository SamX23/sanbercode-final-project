import React from 'react';
import './App.css';

function Header(){
  return(
    <header>
      <h1>This is Header</h1>
    </header>
  )
}

function Main(){
  return(
    <main>
      <h3>This is Main</h3>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <p>This is Header</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
