import { useEffect, useState } from 'react';
import ModalComponent from './components/ModalComponent';
import VideoListing from './components/VideoListing';
import AddVideo from './components/AddVideo';
import Header from './components/Header';

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [tabValue, setTabValue] = useState("1")
  const [showModal, setShowModal] = useState({isOpen: false, video: null});

  useEffect(() => {
    const data = localStorage.getItem("videoLibrary") || null;
    if(data) {
      setVideos(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    if(videos?.length) {
      localStorage.setItem("videoLibrary", JSON.stringify(videos))
    }
  }, [videos])

  const onVideoSelection = (e) => {
    const fileURL = e.target.files[0]
    const filePath = e.target.value || '';
    const fileName = filePath.split('\\').pop();
    setSelectedVideo({
      fileName, 
      filePath,
      isBookMarked: false,
      id: videos?.length ?  videos.length + 1 : 1,
      fileURL
    })
  }

  const handleView = (video) => {
    setShowModal({isOpen: true, video})
  }

  const handleAddVideo = () => {
    if(selectedVideo) {
      setVideos(prev => ([...prev, selectedVideo]))
      setSelectedVideo(null);
      document.getElementById("inputForFiles").value = ''
    } else {
      alert('please choose a valid video.')
    }
  }

  return (
    <div className="container">
      <Header tabValue={tabValue} setTabValue={setTabValue} />
      <AddVideo onVideoSelection={onVideoSelection} handleAddVideo={handleAddVideo} />
      <VideoListing videos={videos} tabValue={tabValue} setVideos={setVideos} handleView={handleView}/>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
