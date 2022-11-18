import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Flex, Text
} from "native-base";
import { userSelect } from '../provider/reducers/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { screenSelect, setScreen } from '../provider/reducers/screenSlice';
import { Screen } from '../types/types';

export const ShopInformations: FC = ({ }) => {

  const user = useAppSelector(userSelect);
  const dispatch = useAppDispatch();
  const [currentScreen, setCurrentScreen] = useState('');

  const screen: Screen = {
    screen: 'Shop'
  }

  useEffect(() => {
    dispatch(setScreen(screen));
  },[]);

  return (
    <SafeAreaView>
      <Flex
        bg='primary.600'
        direction='column'
        alignItems='center'
        height='100%'
        justifyContent='center'
        padding={15}
      >
        <Text fontSize={30}> {user.name} </Text>
      </Flex>
    </SafeAreaView>
  );
}
