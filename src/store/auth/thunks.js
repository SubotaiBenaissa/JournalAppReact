import { registerUserEmailPassword, signInWithGoogle } from "../../firebase/providers";
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

        console.log({email, password, displayName})
        dispatch(checkingCredentials());
        const resp = await registerUserEmailPassword({ email, password, displayName });
        console.log(resp);
        
    }
}