import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import { Button } from '@material-ui/core';

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
      <div className="text-center">
        <h1 className="text-x1">{this.props.title}</h1>
        <Button variant="contained" color="default">
          Hello World
        </Button><br/>
        <Clock
          timeString={this.props.store.timeString}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Page
