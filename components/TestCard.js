import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';


export default function TestCard({ id, name, url }) {

  // Sample file retrieval logic

  // const [images, setImages] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState('');
  //
  // useEffect(() => {
  //   if (file) {
  //     setFiles(...file.file)
  //   } else {
  //     setFiles(`https://source.unsplash.com/random`)
  //   }
  // }, []);



  return (
    <div className="max-w-screen-sm">
      <img src={`https://source.unsplash.com/random/${id}`}  />

      <div className="absolute bottom-0 left-0 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-500">{name}</div>
        <p className="text-sm text-gray-40T0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        <div className="flex justify-between items-center py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            3 $TINGLES
          </button>

          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">ID: {id}</div>
        </div>
      </div>
    </div>
  )
}
