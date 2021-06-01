import { createSlice } from '@reduxjs/toolkit'


export const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {
      name: "hello"
    },
    reducers: {
      addChallenge: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes

        state.name = action.payload;
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addChallenge } = challengeSlice.actions
  
  export default challengeSlice.reducer