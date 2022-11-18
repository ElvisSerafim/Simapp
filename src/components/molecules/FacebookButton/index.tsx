import React, { FC, useState } from 'react';
import {
  Button
} from "native-base";

export const FacebookButton = ({ }) => {

  return (
    <Button
      textAlign="center"
      width="90%"
      borderRadius="14"
      size={"lg"}
      _text={{
        textAlign: "center",
        color: "primary.50",
        fontWeight: "bold",
        fontSize: 18
      }}
      backgroundColor={"blue.600"}
      //onPress={authenticateFacebook}
    >
      Login com Facebook
    </Button>
  );
}
