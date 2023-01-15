import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { fileUpload } from "../../helpers"
import { loadNotes } from "../../helpers/loadNotes"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"

export const startNewNote = () => {

    return async( dispatch, getState ) => {

        dispatch( savingNewNote() )

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

export const startLoadingNotes = () => {

    return async(dispatch, getState) => {
        
        const { uid } = getState().auth
        if ( !uid ) throw new Error('UID No encontrado')
        console.log({ uid })
        const resp = await loadNotes( uid );
        dispatch( setNotes(resp) )

    }

}

export const startSaveNote = () => {

    return async(dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc(firebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFirestore, { merge: true })

        dispatch(updateNote( note ));
    }

}

export const startUploadingFiles = ( files = [] ) => {

    return async( dispatch ) => {

        dispatch( setSaving() );
        // await fileUpload(files[0]);

        const fileUploadPromises = [];
        for( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        console.log( photosUrls )
        dispatch( setPhotosToActiveNote( photosUrls ) );


    }

}