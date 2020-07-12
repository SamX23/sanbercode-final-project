import React from "react";

export default function Form() {
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