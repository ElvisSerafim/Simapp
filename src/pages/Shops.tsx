import React, { FC, useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';
import {
  Flex,
  Divider,
  ScrollView,
  Image,
  Pressable
} from "native-base";
import { userSelect } from '../provider/reducers/userSlice';
import { useAppSelector } from '../hooks';
import { MenuLabel } from '../components/atoms/MenuLabel';
import { CategoryItem } from '../components/atoms/CategoryItem';
import Bk from '../assets/imgs/bk.png';
import Chanel from '../assets/imgs/chanel.png';
import Mersan from '../assets/imgs/mersan.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

export const Shops: FC = ({ }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [categories, setCategories] = useState(['']);
  
  useEffect(() => {
    fetch("/api/categories")
    .then((res) => res.json())
    .then((json) => setCategories(json.categories))
  }, [])

  return (
    <SafeAreaView>
      <Flex
        bg='white'
        direction='column'
        alignItems='flex-start'
        height='100%'
        paddingLeft={8}
        paddingTop={10}
      >

        <Flex flex={1}>
          <MenuLabel description='Categorias' />
          <Divider
            width='xs'
            bg="primary.200"
            mt={3}
          />
          <ScrollView
            maxH={70}
            horizontal={true}
            paddingTop={5}
            showsHorizontalScrollIndicator={false}
          >
            <CategoryItem category='Comida' />
            <CategoryItem category='Comida' />
            <CategoryItem category='Comida' />
            <CategoryItem category='Comida' />
            <CategoryItem category='Comida' />
            <CategoryItem category='Comida' />

          </ScrollView>
        </Flex>
        <Flex flex={1}>
          <MenuLabel description='Sugestões de Lojas' />
          <Divider
            width='xs'
            bg="primary.200"
            mt={3}
          />
          <ScrollView
            maxH={130}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable onPress={() => navigation.navigate('Shop', {screen: 'Shop'})}>
              <Image source={Bk} alt='Icon SIMAPP' borderRadius={60} mt={1} paddingRight={2} />
            </Pressable>
            <Image source={Mersan} alt='Icon SIMAPP' paddingRight={2} mt={1} />
            <Image source={Chanel} alt='Icon SIMAPP' paddingRight={2} mt={1} />
          </ScrollView>
        </Flex>
        <Flex flex={1}>
          <MenuLabel description='Mais Buscadas' />
          <Divider
            width='xs'
            bg="primary.200"
            mt={3}
          />
          <ScrollView
            maxH={130}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Image source={Bk} alt='Icon SIMAPP' borderRadius={60} mt={1} paddingRight={2} />
            <Image source={Mersan} alt='Icon SIMAPP' paddingRight={2} mt={1} />
            <Image source={Chanel} alt='Icon SIMAPP' paddingRight={2} mt={1} />
          </ScrollView>
        </Flex>
      </Flex>
    </SafeAreaView>
  );
}
