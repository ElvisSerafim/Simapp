import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import screenReducer from './reducers/screenSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    screen: screenReducer
  }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

