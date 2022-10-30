import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../App'


const DisplayPost = () => {
    const {post, setPost} = useContext(AppContext);
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((response) => {
        setPost(response.data.post)
        })
    }, [setPost])
    
  return (
    <div className='container border border-info'>{post}</div>
  )
}

export default DisplayPost