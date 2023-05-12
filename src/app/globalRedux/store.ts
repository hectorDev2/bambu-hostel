'use client'
import { configureStore } from '@reduxjs/toolkit'
import RoomReducer from '../rooms/RoomSlice'

export const store = configureStore({
  reducer: {
    rooms: RoomReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
