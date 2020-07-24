import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "./Clock";
import { Button } from "@material-ui/core";
import WallCard from "./WallCard";
import SortBy from "./SortBy";
import Flickity from "react-flickity-component";

// import Glider, {GliderMethods} from 'react-glider'

function mf(i) {
  const file = "b";
  return { file, id: Math.random() };
}

const init = {
  feed: new Array(5).fill(0).map((x, i) => mf(i)),
};

const flickityOptions = {
  initialIndex: 0,
};

const DynamicStoriesWithNoSSR = dynamic(() => import("./Stories"), {
  ssr: false,
});

// @inject('store')
function Page() {
  const [state, setState] = useState(init);

  return useObserver(() => (
    <>
      <Head>
        <title>FAMEGOODS</title>
        // TODO: Add tab icon
      </Head>
      <div className="flex-wrap mx-auth w-full">
        <Flickity options={flickityOptions} className="overflow-hidden p-5">
          {state.feed.map((x) => (
            <WallCard key={x.id} file={x} />
          ))}
        </Flickity>
      </div>

      {/*<DynamicStoriesWithNoSSR />*/}
    </>
  ));
}

export default Page;

// <SortBy />
