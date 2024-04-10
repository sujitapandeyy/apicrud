'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [values, setValues] = useState({
        id: '',
        title: '',
        body: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', values)
        // axios.post("http://localhost:3000/topic", values)
            .then(res => {
                console.log(res);
                const newTopic = res.data;
                setValues({ id: '',title: '', body: '' }); 
                // setTopics(prevTopics => [...prevTopics, newTopic]);

                // navigate("/");
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form
                onSubmit={handleSubmit}
                id="myform"
                className='grid grid-cols-1 gap-4 p-6 mt-2 bg-white rounded-lg max-w-md mx-auto shadow-md'
            >
                <h2 className="text-md font-bold text-gray-800 justify-center flex mt-6 p-6">Add new</h2>
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    required
                    className="border rounded py-2 px-4"
                    value={values.id}
                    onChange={e => setValues({ ...values, id: e.target.value })}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    className="border rounded py-2 px-4"
                    value={values.title}
                    onChange={e => setValues({ ...values, title: e.target.value })}
                />
                <textarea
                    name="body"
                    cols="10"
                    rows="2"
                    placeholder="Body"
                    required
                    className="border rounded py-2 px-4"
                    value={values.body}
                    onChange={e => setValues({ ...values, body: e.target.value })}
                ></textarea>
                <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                    name="submit"
                >
                    Submit
                </button>
            </form>
            {/* <Link to={{ pathname: "/home", state: { values } }}>Go to Home</Link> */}
        </div>
    );
};

export default Page;