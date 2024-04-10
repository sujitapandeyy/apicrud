'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams from next/router

const Page = () => {
    const {id} = useParams(); // Access the id parameter using useParams()

    const [values, setValues] = useState({
        id: '',
        title: '',
        body: ''
    });

    useEffect(() => {
        if (id) {
            // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            axios.get(`http://localhost:3000/topic/${id}`)
                .then(res => {
                    setValues(res.data); // Set the complete data received from the API
                })
                .catch(err => console.log(err));
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, values)
        axios.patch(`http://localhost:3000/topic/${id}`, values)
            .then(res => {
                console.log('Update successful:', res.data);
                setValues({ title: '', body: '' }); 

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
