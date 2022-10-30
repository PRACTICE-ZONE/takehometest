import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../App'
import Loading from './Loading';


const DisplayPost = () => {
    const {post, setPost} = useContext(AppContext);
    
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((response) => {
        setPost(response.data)
        console.log("Respost", response.data);
        })
    }, [setPost])

    if (post.length === 0) {
        console.log(post.length, 'Length');
        return (
          <Loading />
        );
      }
    
  return (
    <div className='container border border-info'>
        <div className="row">
            {
                Array.from(post).map((data) => {
                    return (
                        <div className="col-3">
                            {data.caption}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DisplayPost