import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import { Button } from '@material-ui/core';
import WallCard from './WallCard';

@inject('store')
@observer
class Page extends React.Component {
  componentDidMount() {
    this.props.store.start()
  }

  componentWillUnmount() {
    this.props.store.stop()
  }

  render() {
    return (
      <div className="text-center mx-auth w-full">
        <h1 className="text-x1">{this.props.title}</h1>
        <WallCard/>
        <WallCard/>
        <WallCard/>
      </div>
    )
  }
}

export default Page
