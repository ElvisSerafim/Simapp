import React, { FC, useEffect, useState } from 'react';
import {
  Avatar,
  Flex,
  KeyboardAvoidingView,
  Button
} from "native-base";
import { useAppSelector, useAppDispatch } from '../hooks';
import { userSelect } from '../provider/reducers/userSlice';
import { setScreen } from '../provider/reducers/screenSlice';
import { Screen, User } from '../types/types';
import { StyledInput } from '../components/atoms/Input';
import { setUser } from '../provider/reducers/userSlice';

export const Profile: FC = ({ }) => {
  const user = useAppSelector(userSelect);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);


  const screen: Screen = {
    screen: 'Profile'
  };

  const saveInfo = () => {
    const userUpdated: User = {
      name: name,
      email: email,
      profileImage: user.profileImage,
      token: user.token,
      phoneNumber: phoneNumber,
      password: password
    }

    dispatch(setUser(userUpdated));

  }

  useEffect(() => {
    dispatch(setScreen(screen));
  }, []);
  return (
    <KeyboardAvoidingView>
      <Flex
        bg='primary.600'
        direction='column'
        alignItems='center'
        height='100%'
        padding='20px'
        justifyContent={'space-evenly'}
      >
        <Avatar
          height={'120px'}
          width={'120px'}
          source={{
            uri: user.profileImage
          }}>
        </Avatar>
        <Flex width={'90%'}>
          <StyledInput
            placeholder='Nome'
            textInput='Nome'
            handleChange={setName}
            valueInput={name}
          />
          <StyledInput
            placeholder='Email'
            textInput='Email'
            handleChange={setEmail}
            valueInput={email}
          />
          <StyledInput
            placeholder='Telefone'
            textInput='Telefone'
            handleChange={setPhoneNumber}
            valueInput={phoneNumber}
          />
          <StyledInput
            placeholder='Senha'
            textInput='Senha'
            handleChange={setPassword}
            valueInput={password}

          />
        </Flex>
        <Button
          width="90%"
          borderRadius="14"
          size={"lg"}
          _text={{
            textAlign: "center",
            color: "primary.600",
            fontWeight: "bold",
            fontSize: 18
          }}
          backgroundColor={"primary.50"}
          onPress={saveInfo}
        >
          Salvar
        </Button>
      </Flex>
    </KeyboardAvoidingView >
  );
}
