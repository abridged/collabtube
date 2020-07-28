import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Icon, InlineIcon } from '@iconify/react';
import streamSolid from '@iconify/icons-la/stream-solid';
import compassIcon from '@iconify/icons-la/compass';
import shoppingBagSolid from '@iconify/icons-la/shopping-bag-solid';
import userIcon from '@iconify/icons-la/user';

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
    if (page === '1') Router.push('/');
    if (page === '2') Router.push('/upload');
    if (page === '3') Router.push('/upload');
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
      <BottomNavigationAction value="1" icon={<Icon icon={streamSolid} color="black" height="2em" />} />
      <BottomNavigationAction value="2" icon={<Icon icon={compassIcon} color="black" height="2em" />} />
      <BottomNavigationAction value="3" icon={<Icon icon={shoppingBagSolid} color="black" height="2em" />} />
      <BottomNavigationAction value="3" icon={<Icon icon={userIcon} color="black" height="2em" />} />
    </BottomNavigation>
  );
}
