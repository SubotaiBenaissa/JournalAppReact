import { logInEmailPassword, logOutFirebase, registerUserEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogOut } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuth = ( email, password ) => {

    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }

}

export const displayGoogleSignIn = ( email, password ) => {

    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if ( !result.ok ) {
            return dispatch(logout( result.errorMessage ));
        }
        dispatch(login( result ))
        console.log({ result });
    }

}

export const creatingUserEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {

        dispatch(checkingCredentials());
        const { ok, photoURL, uid, errorMessage } = await registerUserEmailPassword({ email, password, displayName });

        if( !ok ) return dispatch( logout({ errorMessage }) )

        dispatch(login({ uid, email, displayName, photoURL }));
    }
}

export const startLogInEmailPassword = ({ email, password }) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const resp = await logInEmailPassword({ email, password });

        if(!resp.ok) return dispatch(logout(resp));

        dispatch( login(resp) )

    }

}

export const startLogOut = () => {

    return async( dispatch ) => {

        await logOutFirebase();
        dispatch( clearNotesLogOut() )
        dispatch( logout({}) )

    }

}