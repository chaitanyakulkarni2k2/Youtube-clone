import React from 'react'

import vid from '../../Components/Video/vid.mp4'
import WHL from '../../Components/WHL/WHL'
function WatchHistory() {
  const history = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploader:"abc",
      description: "desciption of video 1"
    },

    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploader:"abc",
      description: "desciption of video 2"
    },

    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader:"abc",
      description: "desciption of video 3"
    },

    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 4",
      Uploader:"abc",
      description: "desciption of video 4"
    },
   ];
  return ( 
     <WHL page={"History"} videoList={history}/>
  )
}

export default WatchHistory
