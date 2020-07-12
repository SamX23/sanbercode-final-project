import React from "react";

function TopWrapper() {
    return (
      <div className="top-wrapper">
        <div className="container"></div>
      </div>
    );
  }
  
function MiddleWrapper() {
    return (
      <div className="middle-wrapper">
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
      </div>
    );
  }
  
export default function Home() {
    return (
      <main>
        <TopWrapper />
        <MiddleWrapper />
      </main>
    );
  }