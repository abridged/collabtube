import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublishIcon from '@material-ui/icons/Publish';

import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import { Button } from '@material-ui/core';
import Router from 'next/router' 

export default function SimpleBottomNavigation() {
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function onClick(page) {
      if(page==='1') Router.push('/');
      if(page==='2') Router.push('/upload');
      if(page==='3') Router.push('/profile');
    }
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onClick(newValue);
        }}
        showLabels
        className="w-full fixed bottom-0"
      >
        <BottomNavigationAction label="Home" value="1" icon={<HomeIcon />} />
        <BottomNavigationAction label="Upload" value="2" icon={<PublishIcon />} />
        <BottomNavigationAction label="Profile" value="3" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    );
  }