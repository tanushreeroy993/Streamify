import React, { useEffect, useState } from 'react';
import Navbar from './nav_bar/navbar.js';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [isloding, setisloding] = useState(true);
  const [tracks, setTracks] = useState([]);


  const getTracks = async () => {
    setisloding(true)
    let data = await fetch(
      `https://v1.nocodeapi.com/tanushree/spotify/MAMFywWOXjIrqiqR/search?q=${keyword==""?"trending":keyword}&type=track`
    );
    let convertData = await data.json();
    console.log(convertData.tracks.items);
    setTracks(convertData.tracks.items);
    setisloding(false)
  };

  useEffect(() => {
      getTracks();   
  },[]);

  return (
    <>
      <Navbar getTracks={getTracks} setKeyword={setKeyword} />
      <div className="container">
      <div className={`row ${isloding ? "" : "d-none"}`}>
          <div className='col-12 py-5 text-center'>
          <div
          className="spinner-border "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>

          </div>
        </div>
        <div className="row">
          {tracks.map((element) => {
            return (
              <div key={element.id} className="col-lg-3 col-md-6 py-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={element.album.images[0].url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">
                      Artist: {element.album.artists[0].name}
                    </p>
                    <p className="card-text">
                      Release Date: {element.album.release_date}
                    </p>
                    <audio src={element.preview_url} className="w-100" controls />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
   
    </>
  );
}

export default App;