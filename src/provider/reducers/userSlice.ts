import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type {User} from '../../types/types';

const initialState: User = {
  name: '',
  email: '',
  profileImage: '',
  token: '',
  password: '',
  phoneNumber: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const {email, name, profileImage, token, password, phoneNumber} = action.payload;
      state.email = email;
      state.name = name;
      state.profileImage = profileImage;
      state.token = token;
      state.password = password;
      state.phoneNumber = phoneNumber;

    }
  }
})

export const { setUser } = userSlice.actions;
export const userSelect = (state: RootState) => state.user;
export default userSlice.reducer;