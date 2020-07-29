import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "./Clock";
import WallCard from "./WallCard";
import SortBy from "./SortBy";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import VideoData from './videos.json';
import Others from "../pages/upload";
import TestCard from "./TestCard";
import Slider from "react-slick";

function mf(i) {
  const file = "b";
  return { file, id: Math.random() };
}

const init = {
  feed: new Array(6).fill(0).map((x, i) => mf(i)),
};

// Not currently in use
// const DynamicStoriesWithNoSSR = dynamic(() => import("./StoryFeed"), {
//   ssr: false,
// });

//<TestCard key={Math.random()} tags={TestAPI.data.tags} title={TestAPI.data.title} video={TestAPI.data.video} />

// @inject('store')
function Page() {
  const [state, setState] = useState(init);
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/photos?_limit=15`).then(res => res.json()).then(data => {
      setSampleData(data);
    })
  }, []);

  const settings = {
    className: "sm:w-full lg:w-4/6 h-full",
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  // Logic could be recycled for different bottom drawer solution.

  // const [isVisible, setIsVisible] = React.useState(false);
  // const openDrawer = React.useCallback(() => setIsVisible(true), []);
  // const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  return useObserver(() => (
    <>
      <Head>
        <title>DFAME</title>
      // TODO: Add tab icon
      </Head>
      <div className="flex">

        <div className="sm:w-0 lg:w-1/6 bg-gray-400"></div>

          <Slider {...settings}>
            {VideoData.map((videoDetail, index) => {
              return <TestCard key={index} tags={videoDetail.tags} title={videoDetail.title} gif={videoDetail.gif} video={videoDetail.video} />
            })}
          </Slider>

        <div className="sm:w-0 lg:w-1/6 bg-gray-400"></div>

      </div>

      {/*Should be replaced with Iconify icon.

      <div class="fixed bottom-0 right-0 mr-5 mb-20">
        <Fab size="small" color="black" aria-label="add" onClick={openDrawer}>
          <AddIcon />
        </Fab>
      </div>
      </div>*/}


      {/*<DynamicStoriesWithNoSSR />*/}
    </>
  ));
}

export default Page;

// <SortBy />
