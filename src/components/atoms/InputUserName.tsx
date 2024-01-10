'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormControl, Input } from '@chakra-ui/react'

type inputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type FormData = {
  userId: string
}

const InputUserName: React.FC<inputProps> = (props) => {
  const { value, onChange } = props

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    criteriaMode: 'all',
  })

  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  let color: string = 'blue.500'
  if (errors.userId) {
    color = 'red.500'
  }

  return (
    <FormControl isInvalid={!!errors.userId}>
      <Input
        id="userId"
        placeholder="ユーザーID（メールアドレス）"
        value={value}
        {...register('userId', {
          required: '必須項目です',
          pattern: {
            value: mailRegExp,
            message: 'メールアドレスの形式で入力してください',
          },
          onChange: onChange,
        })}
        focusBorderColor={color}
        size="md"
      />
      <FormErrorMessage>
        {errors.userId && errors.userId.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default InputUserName
