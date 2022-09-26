import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLiked: false,
}

export const likedSlice = createSlice({
  name: 'likeChecker',
  initialState,
  reducers: {
    toggleLike: (state) => {
      state.isLiked = !state.isLiked
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleLike } = likedSlice.actions

export default likedSlice.reducer