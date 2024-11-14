import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch } from '../store'
import { fetchMeRequest } from '../views/account/account.slice'

export const useAuthCheck = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!user && !loading) {
      dispatch(fetchMeRequest())
    }
  }, [dispatch, user, loading])

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [loading, user, navigate])

  return { user, isAuthenticated, loading }
}


