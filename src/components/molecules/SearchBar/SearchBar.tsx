import React, { FC } from 'react';
import {
  Input,
  Icon
} from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../../theme';

export const SearchBar: FC = ({ }) => {
  return (
    <Input
      height={50}
      placeholder="Busque por lojas"
      width="75%"
      borderRadius="20"
      backgroundColor={theme.colors.primary[50]}
      py="3"
      px="1"
      color='black'
      fontSize="14"
      borderColor='white'
      InputLeftElement={
        <Icon
          m="2"
          ml="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons
            name="search"
          />
          }
        />
      }
    />
  );
}
