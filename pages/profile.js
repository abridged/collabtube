import React, { useEffect, useState } from "react";
import Page from "../components/Page";
const Box = require("3box");

export default function Index() {
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    const _profile = await Box.getProfile(
      "0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D"
    );
    console.log(_profile);
    setProfile(_profile);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (<>
    <div className="flex justify-center">
      <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
        <div className="flex justify-center mt-10">
          <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3" />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h1 className="text-black text-sm bold font-sans">Nele Weißhan</h1>
          <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark ml-10 mr-10 mb-3">
          <div className="text-center mr-3 border-r pr-3">
            <h3>34</h3>
            <span>Memberships</span>
          </div>
          <div className="text-center">
            <h3>42</h3>
            <span>Followers</span>
          </div>
          <div className="text-center ml-3 border-l pl-3">
            <h3>34</h3>
            <span>Networth</span>
          </div>
        </div>
      </div>
    </div>
  </>);
}
