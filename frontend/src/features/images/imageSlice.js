import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import imageService from './imageService'


const initialState = {
  image: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


export const fetchImage = createAsyncThunk('/openai/generateimage', async (imageDescription, thunkAPI) => {
  try {
    return await imageService.fetchImage(imageDescription)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


export const authSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.image = action.payload
      })
      .addCase(fetchImage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.image = ''
      })
      
      
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer