import React, {useState} from 'react'
import Link from 'next/link'
import { inject, observer, useObserver } from 'mobx-react'
import Clock from './Clock'
import { Button } from '@material-ui/core';
import WallCard from './WallCard';
import SortBy from './SortBy';

const init = {
  feed: [ {file: 'small'} ]
}

// @inject('store')
function Page() {
    const [state, setState] = useState(init);

    return useObserver(() =>
      <div className="text-center mx-auth w-full">
        <h1 className="text-x1">FEED</h1>
        <SortBy/>
        {
          state.feed.map(x=><>
            <WallCard key={x} file={x}/>
          </>)
        }
        <WallCard/>
        <WallCard/>
        <WallCard/>
      </div>
    )
  
}

export default Page
