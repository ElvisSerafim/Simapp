import React, { FC, useEffect } from 'react';
import SIMAPP from '../assets/imgs/SIMAPP.png';
import { FormLogin } from '../components/organisms/FormLogin';
import {
  Flex,
  Image,
  KeyboardAvoidingView
} from "native-base";
import { useFocusEffect } from '@react-navigation/native';


export const Login: FC = ({ }) => {

  useEffect(() => {
   
  }, [])

  return (
      <KeyboardAvoidingView>
        <Flex
          bg='primary.600'
          direction='column'
          alignItems='center'
          height='100%'
          padding={15}
        >
          <Image source={SIMAPP} alt='Icon SIMAPP' height={300} width={300} />
          <FormLogin />
        </Flex>
      </KeyboardAvoidingView>
  );
}
