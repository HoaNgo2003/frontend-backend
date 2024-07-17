import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createVideo, deleteVideo, getAllVideo } from '../../State/Video/Action';
import { useSearchParams } from "react-router-dom";
import "./style.css"
const Crud = () => {
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useSearchParams();
  const {video} = useSelector(store=>store)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [videoData, setVideoData] = useState({
    title:'',
    author:'',
    view:0,
    link:''
  })
  useEffect(()=>{
    setSearchParam("keyword", "")
    const keyword = searchParam.get("keyword")
    console.log(keyword)
    console.log('hi')
    dispatch(getAllVideo(keyword))
    console.log(video)
  },[])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk = (e) => {
    const form = document.querySelector(".form-add")
    console.log(e.currentTarget)
    const data = new FormData(form)
    const videoData = {
      title: data.get("title"),
      author: data.get("author"),
      link: data.get("link"),
      category: data.get("category"),
      view: 0
    }
    const confirm = window.confirm("Do you want to add a new video?")
    if(confirm){
      dispatch(createVideo(videoData))
    }
    setIsModalOpen(false);

  };
  const handleOk1 = (e) => {
    const form = document.querySelector(".form-edit")
    console.log(e.currentTarget)
    const data = new FormData(form)
    const videoData = {
      title: data.get("title"),
      author: data.get("author"),
      link: data.get("link"),
      category: data.get("category"),
      view: 0
    }
    console.log(videoData)
    setIsModalOpen1(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancel1= () => {
    setIsModalOpen1(false);
  };
  const handleClick = (e)=>{
    console.log(e.currentTarget)
    const videoItem = document.querySelector("[item-id]")
    const id = videoItem.getAttribute("item-id")
    dispatch(deleteVideo(id))
    console.log(videoItem)
  }
  
  return (
    <div className='container'>
      <h1 className='heading'>List all videos</h1>
      <span className='new-video' onClick={showModal}>New video+</span>
      <Modal title="Add new video" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className='form-add' onSubmit={handleOk}>
          <div className="add-row">
          <p>Title</p>
          <input name='title' type="text" placeholder='Title' />
          </div>
          <div className="add-row">
          <p>Author</p>
          <input name='author' type="text" placeholder='Author' />
          </div>
          <div className="add-row">
          <p>Link video</p>
          <input name='link' type="text" placeholder='Link video' />
          </div>
          <div className="add-row">
          <p>Category</p>
          <select name="category" id="">
            <option value="">---Choose category---</option>
            <option value="Crime">Crime</option>
            <option value="Classics">Classics</option>
            <option value="Fantasy">Crime</option>
            <option value="Adventure">Adventure</option>
          </select>
          </div>
        </form>
      </Modal>
      <table className='table'>
        
      <tr>
        <th>STT</th>
        <th>Title</th>
        <th>Views</th>
        <th>Author</th>
        <th>Time create</th>
        <th>Control</th>
      </tr>
      {video?.videos.map((item, index)=>{
        setVideoData({...item})
          return(
            <>
         <tr item-id={item?._id} >
        <td>{index+1}</td>
        <td>{item?.title}</td>
        <td>{item?.view}</td>
        <td>{item?.author}</td>
        <td>{item?.createdAt}</td>
        <td className='control'>
          <span className='yellow' onClick={showModal1}>Edit</span>
          <Modal title="Add new video" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
        <form className='form-edit' onSubmit={handleOk1}>
          <div className="add-row">
          <p>Title</p>
          <input name='title' type="text" placeholder='Title' value={item?.title} onChange={(e)=>{
            const title = e.target.value
            setVideoData(prev=>({...prev, [title]:title}))
          }} />
          </div>
          <div className="add-row">
          <p>Author</p>
          <input name='author' type="text" placeholder='Author' />
          </div>
          <div className="add-row">
          <p>Link video</p>
          <input name='link' type="text" placeholder='Link video' />
          </div>
          <div className="add-row">
          <p>Category</p>
          <select name="category" id="">
            <option value="">---Choose category---</option>
            <option value="Crime">Crime</option>
            <option value="Classics">Classics</option>
            <option value="Fantasy">Crime</option>
            <option value="Adventure">Adventure</option>
          </select>
          </div>
        </form>
      </Modal>
          <span className='red' onClick={(e)=>{handleClick(e)}}>Delete</span>
          <span className='green'>View</span>
        </td>
      </tr>
            </>
          )
        })}
      
      </table>
    </div>
  )
}

export default Crud
