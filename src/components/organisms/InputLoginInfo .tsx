'use client'
import React, { useState } from 'react'
import InputUserName from '../atoms/InputUserName'
import InputPassWord from '../atoms/InputPassWord'
import { Box, Button, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '@/lib/fireBaseConfig'
import { useRouter } from 'next/navigation'

function InputLoginInfo() {
  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')
  const router = useRouter()

  const onUserChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const onPassChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(event.target.value)
  }

  const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const auth = getAuth(firebaseApp)
    signInWithEmailAndPassword(auth, userName, passWord)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('ログインエラーです')
      })
  }

  return (
    <Box className="w-1/3 h-3/5 flex items-center" mx="auto">
      <VStack className="w-4/5 h-4/5 m-auto" spacing={8}>
        <InputUserName value={userName} onChange={onUserChangeHandler} />
        <InputPassWord value={passWord} onChange={onPassChangeHandler} />
        {/* <Sample value={a} onChange={onSampleHandler} /> */}
        <Button colorScheme="teal" onClick={loginHandler}>
          ログイン
        </Button>
        <Link href="/signup" className="hover:text-blue-600/100">
          未登録の方はこちら
        </Link>
      </VStack>
    </Box>
  )
}

export default InputLoginInfo
