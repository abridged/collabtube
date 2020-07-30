import React, { useEffect } from "react";
import Router from "next/router";

export default function FeedCard({ file }) {
  const title = file ? file.file : "lizard";
  const url = file
    ? `https://collabtube-encoded-east1.s3.amazonaws.com/${file.file}.gif`
    : "/contemplative-reptile.jpg";

  const vurl = file
    ? `https://collabtube-encoded-east1.s3.amazonaws.com/${file.file}.m3u8`
    : null;

  // console.log("vurl", vurl);
  const desc = `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`;

  // navigator is MaterialUI specific
  function onShare(content) {
    navigator.share({
      title: content,
      text: content,
      url: "https://collabtube.io/" + content,
    });
  }

  const onClick = () => {
    Router.push("/post/[slug]", `/post/${file.id}`);
  };

  // For testing
  const stories = [
    "https://www.gstatic.com/webp/gallery3/1.png",
    "https://www.gstatic.com/webp/gallery3/2.png",
    "https://www.gstatic.com/webp/gallery3/3.png",
    "https://www.gstatic.com/webp/gallery3/5.png",
  ];

  return (
    <div className="flex mx-5 h-screen">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-cover"
        style={{ backgroundImage: `url(${stories[0]})` }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mr-2"
            onClick={onClick}
          >
            3 $TINGLES
          </button>

          {/*Placeholder*/}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            photography
          </span>
        </div>
      </div>
    </div>
  );
}
