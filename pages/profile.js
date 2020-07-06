import Page from '../components/Page'
import {useEffect, useState} from 'react';
const Box = require('3box')

export default function Index() {
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    const _profile = await Box.getProfile("0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D")
    console.log(_profile);
    setProfile(_profile);
  }

  useEffect( () => {
    getProfile();
}, []);

  return <Page title="Index Page" linkTo="/" />
}
