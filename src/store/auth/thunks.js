import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"

export const checkingAuth = ( email, password ) => {

    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }

}

export const displayGoogleSignIn = ( email, password ) => {

    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const result = signInWithGoogle();
    }

}