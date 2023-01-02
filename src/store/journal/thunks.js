import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote } from "./journalSlice"

export const startNewNote = () => {

    return async( dispatch, getState ) => {

        // uid
        const { uid } = getState().auth
        console.log(uid)
        console.log('Start new note')

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        
        const newDoc = doc(collection( firebaseDB, `/${ uid }/journal/notes` ))
        await setDoc( newDoc, newNote )

        // console.log({ newDoc, setDocResp })

        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) )


    }

}