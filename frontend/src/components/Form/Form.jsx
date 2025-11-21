import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Form = () => {
   
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

    const [formData,setFormData]= useState({
        companyName:"",
        address:"",
        date:"",
        administrator:"",
        administratorNumber:"",
        care:"",
        comment:""
    })


    const onChange = (e) => {
setFormData({
    ...formData,
    [e.target.name]:e.target.value
})
    }

    const sendData = async () => {
        try{

      
        const {data} = await axios.post(`${apiUrl}/sendData`,
            formData
        )
        if(!data.error){
            window.alert("done")
        }

        setFormData({
            companyName:"",
            address:"",
            date:"",
            administrator:"",
            administratorNumber:"",
            care:"",
            comment:""
        })
        
    }catch(error){
        console.log(error);
        
    }

    }


  return (
   
    <form className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4 mt-7">
      <Link to={"/Dashboard"}>
    <button>لوحة التحكم</button>
    </Link>
    <input
      name="companyName"
      onChange={onChange}
      value={formData.companyName}
      type="text"
      placeholder="اسم الشركة"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  
    <input
      name="address"
      onChange={onChange}
      value={formData.address}
      type="text"
      placeholder="عنوان الشركة"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  
    <input
      name="date"
      onChange={onChange}
      value={formData.date}
      type="date"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  
    <input
      name="administrator"
      onChange={onChange}
      value={formData.administrator}
      type="text"
      placeholder="اسم المسؤول"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  
    <input
      name="administratorNumber"
      onChange={onChange}
      value={formData.administratorNumber}
      type="text"
      placeholder="رقم المسؤول"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  
    <input
      name="care"
      onChange={onChange}
      value={formData.care}
      type="text"
      placeholder="مهتم"
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <textarea 
     name="comment"
     onChange={onChange}
     value={formData.comment}
     type="text"
     placeholder="تعليق"
     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
  
    />
  
  
    <button
      type="button"
      onClick={sendData}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
    >
      ارسال
    </button>
  </form>
  
  )
}

export default Form