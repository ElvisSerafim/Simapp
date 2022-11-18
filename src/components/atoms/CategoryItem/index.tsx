import React, { FC, useState } from 'react';
import {
  Flex, Text
} from "native-base";

type CategoryItemProps = {
  category: string
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Flex
      borderRadius={25}
      minWidth={100}
      height={45}
      justifyContent='center'
      alignItems='center'
      backgroundColor={'primary.600'}
      marginRight='3'
    >
      <Text
        fontSize={15}
        fontWeight={'medium'}
      >
        {category}
      </Text>
    </Flex>
  );
}
