import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { firebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { login, logout } from '../store/auth'
import { CheckingAuth } from '../ui/components/CheckingAuth'

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(firebaseAuth, async(user) => {

            if (!user) return dispatch(logout())
            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }))

        })

    }, [])
    

    if( status === 'checking' ) {
        return <CheckingAuth />
    }

    return (

        <Routes>
            {
                (status === 'authenticated')
                ? <Route path='/*' element={ <JournalRoutes /> } />
                : <Route path='auth/*' element={ <AuthRoutes /> } />
            }  
            <Route path='/*' element={ <Navigate to="/auth/login" /> } />          
            {/* <Route path='/*' element={ <JournalRoutes /> } /> */}
        </Routes>

    )

}
