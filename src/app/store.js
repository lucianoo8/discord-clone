import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice'
import appReducer from '../features/app/appSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
