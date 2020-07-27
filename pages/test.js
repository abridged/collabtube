import Page from "../components/Page";
import { useEffect, useState } from "react";
import * as CT from "../utils/CTS3";
const Box = require("3box");
const { Feed } = require("../utils/Feed");

export default function Index() {
  const [profile, setProfile] = useState(null);
  const [box, setBox] = useState(null);

  async function getProfile() {
    if (window.ethereum.enable) await window.ethereum.enable();
    else await window.ethereum.request({ method: "eth_requestAccounts" });

    const addr = await window.ethereum.request({ method: "eth_accounts" });
    console.log("addr", addr);
    const box = await Box.openBox(addr[0], window.ethereum);
    setBox(box);
    console.log("box finish");
    const _profile = await Box.getProfile(
      "0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D"
    );
    console.log(_profile);
    setProfile(_profile);
    console.log("_profile finish");

    const f = new Feed(box);
    await f.init();
    console.log("init finish");
    await f.save();
    console.log("finish");
  }

  useEffect(() => {
    CT.getVideos((x) => {
      console.log("videos out:", x);
    });
    // getProfile();
  }, []);

  return <div>This is a test</div>;
}
