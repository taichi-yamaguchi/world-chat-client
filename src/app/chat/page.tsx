'use client'
// pages/index.js
import {
  ChakraProvider,
  CSSReset,
  Stack,
  Box,
  Flex,
  Input,
  Button,
  Grid,
  GridItem,
  HStack,
  Center,
} from '@chakra-ui/react'
import { useState } from 'react'

type BubbleType = {
  test: string
  isUser: boolean
}

const ChatBubble = (props: BubbleType) => {
  const { test, isUser } = props
  return (
    <Flex direction="column" align={isUser ? 'flex-end' : 'flex-start'} mb={2}>
      <Box
        p={4}
        rounded="lg"
        bg={isUser ? 'teal.500' : 'gray.200'}
        color={isUser ? 'white' : 'black'}
        maxW="60%"
      >
        {test}
      </Box>
    </Flex>
  )
}

const Chat = () => {
  const [messages, setMessages] = useState<BubbleType[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {}

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={3} w="100%" h="10" area={'nav'}>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box1
        </Box>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box2
        </Box>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box3
        </Box>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box4
        </Box>
        <Box bg="tomato" w="100%" h="100" color="white">
          This is the Box5
        </Box>
      </GridItem>
      <GridItem colSpan={9} w="100%" h="100vh" area={'main'}>
        <Box w="100%" h="90%" bg="gray.100"></Box>
        <Box w="100%" h="10%" bg="gray.100">
          <HStack spacing="15px" mx="auto" w="80%" pos="fixed" bottom={0}>
            <Input
              variant="outline"
              placeholder="small size"
              size="sm"
              width="100%"
            />
            <Button>送信</Button>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Chat
