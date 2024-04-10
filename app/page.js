'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function Home() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:3000/topic")
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setCatImages(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // Event.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      // axios.delete(`http://localhost:3000/topic/${id}`)
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
          // Reload the list of images after deletion
          // axios.get("http://localhost:3000/topic")
          axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
              setCatImages(res.data);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <div className='container mx-auto p-1'>
        <h1 className='text-yellow-400 font-bold text-center justify-center text-6xl p-10'>Photos</h1>
        <div>
          <Link href="/create">Add+</Link>
        </div>
        <ul className="grid grid-cols-3">
  {catImages.map((post) => {
    const { id, title, body } = post;
    return (
      <Link href={`${id}`}>

      <li className="p-1" key={id}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{body}</div>
        <div>
          {/* <Link href={`/read/${id}`}>read</Link> */}
          {/* <Link href={`/update/${id}`}>Edit</Link> */}
      <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
      </Link>
    );
  })}
</ul>

      </div>
    </>
  );
}

export default Home;
