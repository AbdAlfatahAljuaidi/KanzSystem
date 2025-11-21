import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
  const [reports, setReports] = useState([])

  const getReports = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/getAllReports`)
      console.log(data.reports);
      setReports(data.reports)


    } catch (error) {
      console.log(error);

    }
  }

useEffect(() => {
getReports()
},[])


const deleteReport  = async (id) => {
try{
const {data} = await axios.delete(`${apiUrl}/deleteReport/${id}`) 
window.alert("delete report")
setReports(prevReports => prevReports.filter(report => report._id !== id ))
}


catch(error){
  console.log(error);
  
}
}



  return (
    <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-gray-700">Reports</h2>
  
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3 text-left text-gray-700 font-semibold">اسم الشركة</th>
            <th className="p-3 text-left text-gray-700 font-semibold">العنوان</th>
            <th className="p-3 text-left text-gray-700 font-semibold">التاريخ</th>
            <th className="p-3 text-left text-gray-700 font-semibold">اسم المسؤول</th>
            <th className="p-3 text-left text-gray-700 font-semibold">رقم المسؤول </th>
            <th className="p-3 text-left text-gray-700 font-semibold">مهتم</th>
            <th className="p-3 text-left text-gray-700 font-semibold">تعليق</th>
            <th className="p-3 text-left text-gray-700 font-semibold">اوامر</th>
            
          </tr>
        </thead>
  
        <tbody>
          {reports.map((report, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-3 text-gray-600">{report.companyName}</td>
              <td className="p-3 text-gray-600">{report.address}</td>
              <td className="p-3 text-gray-600">{report.date}</td>
              <td className="p-3 text-gray-600">{report.administrator}</td>
              <td className="p-3 text-gray-600">{report.administratorNumber}</td>
              <td className="p-3 text-gray-600">{report.care}</td>
              <td className="p-3 text-gray-600">{report.comment}</td>
              <td className="p-3 text-gray-600">
  <button
    onClick={() => deleteReport(report._id)}
    className="bg-red-500 px-5 py-2 text-white rounded-sm hover:bg-red-600 transition"
  >
    ازالة
  </button>
  <Link to={`/editReport/${report._id}`}>
  <button
    
    className="bg-green-500 mx-2 px-5 py-2 text-white rounded-sm hover:bg-green-600 transition"
  >
    تعديل
  </button>
  </Link>
</td>
  </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default Dashboard