import { configureStore } from '@reduxjs/toolkit'
import coursesSlice from './coursesSlice'
import librarySlice from './librarySlice'
import servicesSlice from './servicesSlice'
import usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
    users:usersSlice,
    courses:coursesSlice,
    library:librarySlice,
    services:servicesSlice
  },
})