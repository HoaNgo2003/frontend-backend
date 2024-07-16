import { Modal } from 'antd';
import React, { useState } from 'react'

const Crud = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <table className='table'>
      <tr>
        <th>STT</th>
        <th>Title</th>
        <th>Image</th>
        <th>Views</th>
        <th>Author</th>
        <th>Time create</th>
        <th>Control</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td className='control'>
          <span className='yellow'>Edit</span>
          
          <span className='red'>Delete</span>
          <span className='green'>View</span>
        </td>
      </tr>
      </table>
    </div>
  )
}

export default Crud
