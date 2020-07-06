import {useEffect, useState} from 'react';
const Box = require('3box')


// import EditProfile from '3box-profile-edit-react';


const MyComponent = ({ }) => {
     const [state, setState] = useState({});

     /*
     useEffect( () => {
          async function a() {
               let space = await Box.openSpace('unroll-dev');
               console.log('space', space);
               setState(x=>({space}))
          }
          a();
     }, []);
     
     return state.space && <EditProfile
          // required
          box={Box}
          space={state.space}
          currentUserAddr={"0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D"}
          // optional
          // customFields={customFields}
          // currentUser3BoxProfile={myProfile}
          // redirectFn={redirectFn}
     />
     */
    return (<div className="pb-24">
          <iframe className="max-w-screen w-full min-h-screen" 
               style={{marginTop: "-68px"}} 
               src="https://3box.io/0xffadc07f1bfb127f4312e8652fe94ab0c771b54d/edit"/>
     </div>);
};

export default MyComponent;