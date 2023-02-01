import axios from 'axios'

const API_URL = '/openai/generateimage'


const fetchImage = async (imageDescription) => {
  const response = await axios.post(API_URL, imageDescription)
  return response.data
}


const imageService = {
  fetchImage
  
}

export default imageService