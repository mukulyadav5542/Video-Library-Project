import React from 'react'
import { Button } from 'react-bootstrap'

function AddVideo({onVideoSelection, handleAddVideo}) {
  return (
    <div className='d-flex justify-content-between'>
        <input type='file' accept='video/*' id='inputForFiles' onChange={onVideoSelection} />
        <Button variant="primary" onClick={handleAddVideo}>Add Video</Button>
    </div>
  )
}

export default AddVideo