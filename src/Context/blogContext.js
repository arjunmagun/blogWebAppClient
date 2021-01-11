import React, { useState, createContext, useEffect } from 'react'
import axios from "axios";

export const BlogContext = createContext();

export function BlogProvider({children}) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchData(){
            await axios.get("https://projectblogwebapp.herokuapp.com/")
                .then(res => (
                    setBlogs(res.data)
                ));
        }
        fetchData();
    }, []);
    
    return (
        <BlogContext.Provider value={[blogs, setBlogs]}>
            {children}
        </BlogContext.Provider>    
        )
    }
