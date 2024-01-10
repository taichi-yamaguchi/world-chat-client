import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '../hooks/useCurrentUser'

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useCurrentUser()
  const router = useRouter()
  // firebase初期化処理（useCurrentUser）が非同期のため下記対応
  let isAuthChecked = false

  useEffect(() => {
    if (user) {
      isAuthChecked = true
    }
    if (user === null && isAuthChecked) {
      router.push('/login')
    }
  }, [user])

  return <>{children}</>
}

export default AuthGuard
