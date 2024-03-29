import React from 'react'
import { Button, Form } from 'react-bootstrap';

function VideoListing({videos, tabValue, setVideos, handleView}) {
  return (
    <div>
        <h4 className='mt-3'>{tabValue == "1" ? "All" : "Bookmarked"} Movies</h4>
        {videos.map((video, index) => {
            if(tabValue == "2" && !video.isBookMarked) return null;
            return (
            <div key={index} className='d-flex align-items-center justify-content-between'>
              <Form.Check
                type={'checkbox'}
                id={`default-${index}`}
                label={video.fileName}
                checked={video.isBookMarked}
                onChange={e => setVideos(prev => prev.map(value => (value.id == video.id) ? {...value, isBookMarked: e.target.checked} : value))}
              />
              <Button variant="link" onClick={() => handleView(video)}>View</Button>
            </div>
          )})}
          {!videos?.filter(value => (tabValue == "1" || tabValue == "2" && value.isBookMarked)).length ? <p>No data available</p> : null}
    </div>
  )
}

export default VideoListing