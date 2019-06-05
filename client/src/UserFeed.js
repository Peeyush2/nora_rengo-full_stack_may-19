import React from 'react';
import Myprofile from './profile/Myprofile'
import Myfeed from './profile/Myfeed/Myfeed'
import Whotofollow from './profile/Whotofollow/Whotofollow'
function UserFeed() {
  console.log("dvdf")
  return (
    <div class="backgroundupdate">
    <div className="UserFeed">
      <Myprofile/>
      <Myfeed/>
      <Whotofollow/>
    </div>
    <div style={{marginBottom:'20px'}}>
    </div>
    </div>
  );
}

export default UserFeed;
