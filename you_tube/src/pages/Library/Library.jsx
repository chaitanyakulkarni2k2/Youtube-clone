import React from 'react'
import {FaHistory} from 'react-icons/fa'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import vid from '../../Components/Video/vid.mp4'
import WHLVideoList from '../../Components/WHL/WHLVideoList'
import { MdOutlineWatchLater } from "react-icons/md";                           
import './Library.css'
import { AiOutlineLike } from 'react-icons/ai'
function Library() {
  const vids = [
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
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="container_libraryPage">
              <h1 className='title_container_LibraryPage'>
                <b>
                  <FaHistory/>
                </b>
                <b>History</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
              <WHLVideoList page={"History"} videoList={vids} />
              </div>
            </div>

          
            <div className="container_libraryPage">
              <h1 className='title_container_LibraryPage'>
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>Watch Later</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
              <WHLVideoList page={"Watch Later"} videoList={vids} />
              </div>
            </div>


            <div className="container_libraryPage">
              <h1 className='title_container_LibraryPage'>
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Liked Videos</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
              <WHLVideoList page={"Liked Videos"} videoList={vids} />
              </div>
            </div>

        </div>
        </div>

        
  )
}

export default Library
