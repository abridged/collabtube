import React, { useState } from "react";
import Link from "next/link";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "./Clock";
import { Button } from "@material-ui/core";
import WallCard from "./WallCard";
import SortBy from "./SortBy";
import Head from "next/head";

const init = {
  feed: [{ file: "small" }],
};

// @inject('store')
function Wall() {
  const [state, setState] = useState(init);

  return useObserver(() => (
    <section className="text-center mx-auth w-full">
      <Head>
        <title>Gallery</title>
      </Head>
      <h1 className="text-x1">FEED</h1>
      <SortBy />
      {state.feed.map((x) => (
        <>
          <WallCard key={x} file={x} />
        </>
      ))}
      <WallCard />
      <WallCard />
      <WallCard />
    </section>
  ));
}

export default Wall;
