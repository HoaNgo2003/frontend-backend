import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideo } from '../../State/Video/Action';
import { useSearchParams } from "react-router-dom";
import "./style.css"
const Crud = () => {
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useSearchParams();
  const {video} = useSelector(store=>store)
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className='container'>
      <h1 className='heading'>List all videos</h1>
      <span className='new-video' onClick={showModal}>New video+</span>
      <Modal title="Add new video" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className='form-add'>
          <div className="add-row">
          <p>Title</p>
          <input type="text" placeholder='Title' />
          </div>
          <div className="add-row">
          <p>Author</p>
          <input type="text" placeholder='Author' />
          </div>
          <div className="add-row">
          <p>Link video</p>
          <input type="text" placeholder='Link video' />
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
          return(
            <>
         <tr>
        <td>{index+1}</td>
        <td>{item?.title}</td>
        <td>{item?.view}</td>
        <td>{item?.author}</td>
        <td>{item?.createdAt}</td>
        <td className='control'>
          <span className='yellow'>Edit</span>
          
          <span className='red'>Delete</span>
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
