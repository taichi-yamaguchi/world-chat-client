'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormControl,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from '@chakra-ui/react'

type inputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type FormData = {
  passWord: string
}

const InputUserName: React.FC<inputProps> = (props) => {
  const { value, onChange } = props
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => {
    setShow(!show)
  }

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    criteriaMode: 'all',
  })

  const passRegExp = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/

  let color: string = 'blue.500'
  if (errors.passWord) {
    color = 'red.500'
  }

  return (
    <FormControl isInvalid={!!errors.passWord}>
      <InputGroup size="md">
        <Input
          id="passWord"
          placeholder="パスワード(英小文字・数字で8字以上)"
          value={value}
          {...register('passWord', {
            required: '必須項目です',
            pattern: {
              value: passRegExp,
              message: '英小文字・数字の組み合わせ8字以上で入力してください',
            },
            onChange: onChange,
          })}
          focusBorderColor={color}
          size="md"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
        />
        <InputRightElement width="3.5rem" marginRight="5px">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {errors.passWord && errors.passWord.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default InputUserName
