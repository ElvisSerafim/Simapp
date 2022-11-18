import React, { FC, useEffect, useState } from 'react';
import {
  HStack,
  Avatar,
  Pressable
} from "native-base";
import { userSelect } from '../../../provider/reducers/userSlice';
import { useAppSelector } from '../../../hooks';
import { SearchBar } from '../SearchBar/SearchBar';
import { theme } from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Screen } from '../../../types/types';
import { screenSelect } from '../../../provider/reducers/screenSlice';

export const Header: FC = ({ }) => {
  const user = useAppSelector(userSelect);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const screen = useAppSelector(screenSelect);
  

  return (
    <>
      {screen.screen == 'Home' ? (
        <HStack
          width='100%'
          justifyContent="space-between"
          alignItems={'center'}
          backgroundColor={theme.colors.primary[600]}
          padding={4}
        >
          <SearchBar />
          <Pressable
            onPress={() => navigation.navigate('Profile', { screen: 'Profile' })}
          >
            <Avatar
              height={60}
              width={60}
              source={{
                uri: user.profileImage
              }}>
            </Avatar>
          </Pressable>
        </HStack>
      ) :
        <>
        </>
      }
    </>
  );
}
