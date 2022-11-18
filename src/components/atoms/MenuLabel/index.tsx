import React, { FC } from 'react';
import {
  Flex,
  Text
} from "native-base";

type MenuDescription = {
  description: string
}

export const MenuLabel = ({ description }: MenuDescription) => {
  return (
    <Flex maxWidth={200}>
      <Text
        fontSize={18}
        color='primary.500'
        fontWeight={'semibold'}
      >
        {description}
      </Text>
    </Flex>

  );
}
