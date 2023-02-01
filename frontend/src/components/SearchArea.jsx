import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchImage, reset } from '../features/images/imageSlice'
import Spinner from './Spinner'

function SearchArea() {

const [description, setDescription] = useState("")

  const dispatch = useDispatch()

  const { image, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.image
  )
    
    const onSubmit = (e) => {
        e.preventDefault()
    
        dispatch(fetchImage({prompt:description, size:"medium"}))
      }


      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
      }, [image, isError, isSuccess, message, dispatch])
    
      const onChange = (e) => {
        setDescription((prevState) => 
           e.target.value
        )
      }

      if (isLoading) {
        return <Spinner />
      }

  return (
    <div className='searchArea'>
        <form id="image-form" onSubmit={onSubmit}>
          <h1>Image Description</h1>
          <div className="form-control">
            <input type="text" 
            id='description'
            autoComplete='off'
            name='description'
            value={description}
            onChange={onChange}
            placeholder="Enter Text" />
          </div>
         
          <button type="submit" className="btn">Generate</button>
        </form>

    </div>
  )
}

export default SearchArea