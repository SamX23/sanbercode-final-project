import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="top-wrapper">
          <div className="header-left">
            <img
              src="https://sanbercode.com/assets/img/identity/logo-horizontal.svg"
              alt="logo"
            />
          </div>
          <div className="header-right">
            <p>Menu</p>
            <ul>
              <li>Home</li>
              <li>Hire Me !</li>
            </ul>
            <img src="search" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div className="container">
        <p>
          KTP tertulis Sami Kalammallah karena kesalahan akte yang lama tak
          diurus, jadi ya lumayan ribet.
        </p>
        <p>
          I am a highly motivated selftaught programmer, seorang wirausaha di
          waktu luang dan saat ini bekerja secara REMOTE di perusahaan terbaik
          yaitu Kirim.Email sebagai Technical Support.
        </p>
        <p>Berikut beberapa klaim dan hobi saya saat ini:</p>
        <ul>
          <li>Saya bisa ngoding (Currently Java and Python)</li>
          <li>Saya bisa Digital Marketing + SEO</li>
          <li>Saya suka dunia IT dan IoT</li>
          <li>Saya suka Photography</li>
          <li>I love sports ( Swimming, Running, Cycling and Speeding)</li>
          <li>dan saya hobi mempelajari hal yang baru :)</li>
        </ul>
      </div>
    </main>
  );
}

function FormPage() {
  return (
    <div className="hire-me">
      <h4>Hire Me !</h4>
      <form>
        <div>
          <label>Nama : </label>
          <input type="text" placeholder="Sami Kalammallah" />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" placeholder="Skalexsong@gmail.com" />
        </div>
        <div>
          <label>Telp/WA : </label>
          <input type="number" placeholder="089657511134" />
        </div>
        <div>
          <label>Perusahaan : </label>
          <input type="text" placeholder="Azzure Tech" />
        </div>
        <div>
          <label>Kebutuhan : </label>
          <textarea
            placeholder="Saya membutuhkan Web App"
            cols="10"
            rows="10"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <img alt="logo" />
        </div>
        <div className="footer-center">
          <h5>Existence :</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p> {"\u00A9"} 2020 Sami Kalammallah - SanberCode</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FormPage />
      <Footer />
    </div>
  );
}

export default App;
