import React, { FC, useState } from 'react';
import {
  Flex,
  Text,
  Button,
  VStack,
  Link,
  View,
  Pressable
} from "native-base";
import { StyledInput } from '../../atoms/Input';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, User } from '../../../types/types';
import { LoginManager, Profile, AccessToken } from 'react-native-fbsdk-next';
import { useAppDispatch } from '../../../hooks';
import { setUser } from '../../../provider/reducers/userSlice';


export const FormLogin: FC = ({ }) => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const authenticateFacebook = async () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(result => {
      const user: User = {
        name: '',
        email: '',
        profileImage: '',
        token: '',
        phoneNumber: '',
        password: ''
      }
      if (result.isCancelled) {

      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          user.token = data?.accessToken.toString();
        }
        )
        const currentProfile = Profile.getCurrentProfile().then(currentProfile => {
          if (currentProfile) {
            user.email = currentProfile.email!;
            user.name = currentProfile.name!;
            user.profileImage = currentProfile.imageURL!;
            dispatch(setUser(user));
          }
        });

        setTimeout(() => {
          navigation.navigate('Home', { screen: 'Home' });
        }, 4000);
      }
    });


  }

  return (
    <View
      height="100%"
      width="100%"
    >
      <Flex
        flex={2}
        padding={1}
        width="100%"
        direction='column'
        alignItems="center"
        fontSize="12"
      >
        <Flex
          direction='column'
          width="100%"
          flex={2}
          justifyContent="space-between"
        >
          <VStack
            w="100%"
            space={5}
          >
            <Flex>
              <StyledInput
                placeholder="Email"
                valueInput={email}
                textInput=''
                handleChange={setEmail}
              />
              <StyledInput
                placeholder="Senha"
                valueInput={password}
                textInput=''
                handleChange={setPassword}
              />
              <Flex
                direction="row"
                justifyContent={'flex-end'}
                mx="3"
                padding={0}
              >
                <Link>Esqueceu a senha ?</Link>
              </Flex>
            </Flex>

          </VStack>
        </Flex>

        <Flex
          flex={5}
          width="100%"
          alignItems="center"
          marginTop={10}
        >
          <VStack
            w="100%"
            space={4}
            alignItems="center"
          >
            <Button
              width="90%"
              borderRadius="14"
              size={"lg"}
              _text={{
                textAlign: "center",
                color: "primary.600",
                fontWeight: "bold",
                fontSize: 18
              }}
              backgroundColor={"primary.50"}
            >
              Login
            </Button>
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
              onPress={authenticateFacebook}
            >
              Login com Facebook
            </Button>
            <Flex direction='row'>
              <Text>Não tem uma conta ? </Text>
              <Pressable onPress={() => navigation.navigate('Register', { screen: 'Register' })}>
                <Text fontWeight='bold' >Inscreva-se </Text>
              </Pressable>
            </Flex>
          </VStack>
        </Flex >
      </Flex>
    </View>
  );
}
