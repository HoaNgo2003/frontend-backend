import React from 'react'
import "./index.css"
const Static = () => {
  return (
    <div className='static'>
      <div className="container-1">
        <div className="row-1">
        <span>Từ</span>
        <input type="date" />
        </div>
      
        <div className="row-1">
        <span>Đến</span>
        
        <input type="date" />
        </div>
        <div className="row-1">
        <span>Video</span>
        
        <input type="text" placeholder='Enter video links...' />
        </div>
        <div className="row-1">
          <span>Xem thống kê</span>
        <input className='btn-search' type="submit" value="Search"/>
        </div>
      </div>
      <div className="table-contain">
      <table className='table-1'>
        <tr>
          <th>STT</th>
          <th>Thời Gian</th>
          <th>Lượt truy cập</th>
        </tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </table>
      </div>
      
    </div>
  )
}

export default Static
