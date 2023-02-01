import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  reset } from '../features/images/imageSlice'

function ImageContainer() {
    const { image } = useSelector((state) => state.image)
    const [imageUrl, setImageUrl] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        if (image) {
          setImageUrl(image.data);
        }
    
      }, [image])

  return (
    <div className='imageContainer'>
        <img src={imageUrl ? imageUrl: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"} alt="" />
    </div>
  )
}

export default ImageContainer