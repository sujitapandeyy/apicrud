"use client"
import React from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const page= async()=>{
const params = useParams();
const url = params.read;
// const res=await axios.get(`http://localhost:3000/topic/${url}`);
const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${url}`);
const response=res.data;
  return (
    <div className="container mx-auto">
      
    <div className='bg-gradient-to-r from-gray-100 to-gray p-7 rounded-md mt-3'>
      <p className=' text-red-800 font-bold capitalize mb-4  text-xl text-center font-serif'>{response.title}</p>
      <p className=' text-black capitalize text-lg text-justify'style={{  textIndent: '1em' }}>{response.body}</p>
    <Link href="/" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 rounded p-2 ">Back</Link>
    <Link href="/update" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 rounded p-2 ">Edit</Link>
    </div>
    </div>
  )

};


export default page
