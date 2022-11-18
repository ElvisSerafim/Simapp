import React, { FC, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SIMAPP from '../assets/imgs/SIMAPP.png';
import {
  Flex,
  Image
} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

export const SplashScreen: FC = ({ }) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login', {screen: 'Login'});
    }, 4000);
  })

  return (
    <SafeAreaView>
      <Flex
        bg='primary.600'
        direction='column'
        alignItems='center'
        justifyContent='center'
        height='100%'
      >
        <Image source={SIMAPP} alt='Icon SIMAPP' height={300} width={300} />
      </Flex>
    </SafeAreaView>
  );
}