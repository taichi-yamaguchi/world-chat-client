import { firebaseApp } from '@/lib/fireBaseConfig'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebaseApp), (user) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return user
}
