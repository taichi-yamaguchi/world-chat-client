'use client'

import Link from 'next/link'
import { Inter } from 'next/font/google'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Hide,
  Show,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div
            className="flex items-center w-full text-white font-bold bg-gray-900"
            style={{ height: '10%' }}
          >
            <div className="mx-7 w-full flex justify-between">
              <div className="text-3xl flex items-center">
                <span>WORLD CHAT</span>
              </div>
              <Show below="lg">
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                  >
                    File
                    <HamburgerIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem color="black">HOME</MenuItem>
                    <MenuItem color="black">自己紹介</MenuItem>
                    <MenuItem color="black">
                      <Link href="/chat">チャット</Link>
                    </MenuItem>
                    <MenuItem color="black">ログイン</MenuItem>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </Show>
              <Hide below="lg">
                <div className="flex justify-center">
                  <div className="menu-item">
                    <Link href="/" className="menu-item-text">
                      HOME
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link href="/chat" className="menu-item-text">
                      自己紹介
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link href="/chat" className="menu-item-text">
                      チャット
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link href="/logout" className="menu-item-text">
                      ログアウト
                    </Link>
                  </div>
                </div>
              </Hide>
            </div>
          </div>
          <div style={{ height: '90%' }}>{children}</div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
