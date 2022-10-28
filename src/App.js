
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Photos field</h1>
      {/* {message && (
                <div className="modal-header col-12">
                  <div className="alert alert-success col-12" role="alert">{message}</div>
                  <button type="button" onClick={() => { setMessage(''); }} className="btn-close alert-success close-button" data-bs-dismiss="modal" aria-label="close" />
                </div>
                )} */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-2 col-10">
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
                  <div className="form-floating mb-2 col-10">
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
                    <button type="submit" className="btn btn-primary ">Add Car</button>
                  </div>
      </form>
    </div>
  );
}

export default App;
