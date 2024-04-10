
'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [values, setValues] = useState({
        id: '',
        title: '',
        body: ''
    });

    // This state will hold the ID of the topic being updated
    const [id, setTopicId] = useState('');

    useEffect(() => {
        // Fetch the topic data to be updated
        // Assuming you pass the topic ID as a prop from the parent component
        // Replace 'topicIdProp' with the actual prop name you use to pass the topic ID
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    setValues(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, values)
            .then(res => {
                console.log('Update successful:', res.data);
                // Handle success if needed
            })
            .catch(err => console.log(err));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                id="myform"
                className='grid grid-cols-1 gap-4 p-6 mt-2 bg-white rounded-lg max-w-md mx-auto shadow-md'
            >
                <h2 className="text-md font-bold text-gray-800 justify-center flex mt-6 p-6">Update</h2>
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    required
                    className="border rounded py-2 px-4"
                    value={values.id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    className="border rounded py-2 px-4"
                    value={values.title}
                    onChange={handleChange}
                />
                <textarea
                    name="body"
                    cols="10"
                    rows="2"
                    placeholder="Body"
                    required
                    className="border rounded py-2 px-4"
                    value={values.body}
                    onChange={handleChange}
                ></textarea>
                <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                    name="submit"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Page;
