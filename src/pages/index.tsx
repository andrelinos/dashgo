import Router from 'next/router';

import { Flex, FormControl, Stack, Button, Text, Box } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

// const signInFormSchema = yup.object().shape({
//   email: yup.string().required('E-mail obrigatório...').email('E-mail inválido'),
//   password: yup.string().required('Senha obrigatória...'),

// });

export default function SignIn() {
  function handleNavToDashboard() {
    Router.push('/dashboard');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm<SignInFormData>({
    // resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    handleNavToDashboard();
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="flex-start"
      flexDir="column"
      pt="100"
    >
      <Flex w="100%" m="0" height="100" justify="center" align="center">
        <Text
          w="64"
          fontSize="xx-large"
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
          userSelect="none"
        >
          dashgo
          <Text as="span" mx="1" color="pink.500">
            .
          </Text>
        </Text>
      </Flex>

      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4" pos="relative">
          <FormControl>
            <Input
              id="username"
              name="username"
              type="username"
              label="username"
              autoComplete="current-password"
              error={errors.email}
              {...register('email', { required: 'E-mail obrigatório...' })}
            />
            <Box pos="absolute" right="3" top="7" color="red.300">
              <ErrorMessage errors={errors} name="email" />
            </Box>
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              error={errors.password}
              {...register('password', {
                required: 'Senha obrigatória...',
              })}
            />
          </FormControl>
          <Box pos="absolute" right="3" top="123" color="red.300">
            <ErrorMessage errors={errors} name="password" />
          </Box>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
