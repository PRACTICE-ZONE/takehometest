import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { AppContext } from '../App';

const AddPost = () => {
    const { register, handleSubmit, reset } = useForm();
  const {post, setPost} = useContext(AppContext);

  const onSubmit = (data) => {
    const formData = new FormData()
    const post = { ...data, image: data.image[0] }
    formData.append('post[caption]', post.caption)
    formData.append('post[image]', post.image)
    console.log(formData)
    axios.post('http://localhost:3000/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    })
    .then((response) => {
      if(response.data.status === 'created') {
        setPost(response.data.post)
      }
    })
    reset()
  };

  return (
    <div>
 <h1 className='display-3 d-flex justify-content-center'>Posters</h1>
      
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-2 col-12">
                    <input
                      type="file"
                      name="image"
                      {...register('image', { required: true })}
                      className="form-control"
                      id="floatingInputprice"
                      placeholder="Upload image"
                      accept="image/*"
                    />
                    <label htmlFor="floatingInputImage">Image</label>
                  </div>
                  <div className="form-floating mb-2 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="caption"
                      {...register('caption', { required: true })}
                      id="floatingInput"
                      placeholder="caption"
                    />
                    <label htmlFor="floatingInput">Caption</label>
                  </div>
                  <div className="form-floating mb-3 col-10">
                    <button type="submit" className="btn btn-primary ">Upload</button>
                  </div>
      </form>
    </div>
  )
}

export default AddPost