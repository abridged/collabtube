import React from 'react';
import ReactPlayer from 'react-player';

// Super janky. Just start with one to test.

export default function Videos() {
  return (
    <>
      <div className="container">
        <h1>1080p 60fps animation - short</h1>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Kh-HOinzTyI"
            width="10%"
            height="10%"
            controls
          />
        </div>
      </div>
      <div className="container">
        <h1>1080p 60fps animation - long</h1>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=yW97BTz_MJY"
            width="10%"
            height="10%"
            controls
          />
        </div>
      </div>
      <div className="container">
        <h1>This is just funny - especially if you own a cat. 🤣</h1>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=H6leGvf6BeM"
            width="10%"
            height="10%"
            controls
          />
        </div>
      </div>
    </>
  )
}
