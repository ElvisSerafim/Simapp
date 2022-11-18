export type RootStackParamList = {
  Register: {
    screen:'Register'
  },
  Login: {
    screen: 'Login'
  }, 
  Home: {
    screen: 'Home'
  },
  Profile: {
    screen: 'Profile'
  },
  Shop: {
    screen: 'Shop'
  }
};

export interface User {
  name: string  | undefined, 
  email: string | undefined,
  profileImage: string  | undefined,
  token: string | undefined,
  phoneNumber: string | undefined,
  password: string | undefined
}

export interface Screen {
  screen: string 
}