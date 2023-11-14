// prettier-ignore
'use client'
import { Inter } from 'next/font/google'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
  Hide,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex items-center w-full text-white font-bold bg-gray-900 h-20">
            <div className="mx-7 w-full flex justify-between">
              <div className="text-3xl flex items-center">
                <span>WORLD CHAT</span>
              </div>
              <div className="lg:hidden">
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
                    File <HamburgerIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </div>
              <Hide below="lg">
                <div className="flex justify-center">
                  <div className="menu-item">
                    <button className="menu-item-text">HOME</button>
                  </div>
                  <div className="menu-item">
                    <button className="menu-item-text">自己紹介</button>
                  </div>
                  <div className="menu-item">
                    <button className="menu-item-text">ログイン</button>
                  </div>
                  <div className="menu-item">
                    <button className="menu-item-text">チャット</button>
                  </div>
                </div>
              </Hide>
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
