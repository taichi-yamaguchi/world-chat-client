'use client'
import React, { useState } from 'react'
import InputUserName from '../atoms/InputUserName'
import InputPassWord from '../atoms/InputPassWord'
import { Box, Button, VStack } from '@chakra-ui/react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../lib/fireBaseConfig'

function InputSignUpInfo() {
  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const onUserChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const onPassChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(event.target.value)
  }

  const signInHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const auth = getAuth(firebaseApp)
    createUserWithEmailAndPassword(auth, userName, passWord)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert('エラーが発生しました。')
      })
  }

  return (
    <Box className="w-1/3 h-3/5 flex items-center" mx="auto">
      <VStack className="w-4/5 h-3/5 m-auto" spacing={8}>
        <InputUserName value={userName} onChange={onUserChangeHandler} />
        <InputPassWord value={passWord} onChange={onPassChangeHandler} />
        <Button colorScheme="teal" onClick={signInHandler}>
          登録
        </Button>
      </VStack>
    </Box>
  )
}

export default InputSignUpInfo
