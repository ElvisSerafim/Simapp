import React, { FC, useState } from 'react';
import {
  Input as InputNativeBase,
  FormControl,
  Text,
} from "native-base";


type InputProps = {
  placeholder: string,
  textInput: string,
  handleChange: (text: string) => void,
  valueInput: string | undefined
}

export const Input = ({ placeholder, textInput, handleChange, valueInput}: InputProps) => {
  return (

    <FormControl pt={3}>
      <Text fontSize={16} pb='1' >{textInput} </Text>
      <InputNativeBase
        color="black"
        borderRadius='14'
        borderColor="amber.100"
        backgroundColor={"primary.50"}
        height='60px'
        fontSize={"md"}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.nativeEvent.text)}
        value={valueInput}
      />
    </FormControl>

    

  );
}
