import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NoteState {
    list: {title: string; body: string}[];
}

const initialState: NoteState = {
    list: []
}

export const slice = createSlice({
    name: 'note',
    initialState, 
    reducers: {
        addNote: (state, action: PayloadAction<{ title: string; body: string}>) => {
            const { title, body } = action.payload;

            state.list.push({title, body});
        },
        editNote: (state, action: PayloadAction<{ key: number; title: string; body: string }>) => {
            const { key, title, body } = action.payload;
            const noteToEdit = state.list[key];

            if(noteToEdit) {
                noteToEdit.title = title;
                noteToEdit.body = body;
            }
        },
        delNote: (state, action: PayloadAction<{key: number}>) => {
            const { key } = action.payload;
            state.list.splice(key, 1);
        }
    }
});

export const { addNote, editNote, delNote } = slice.actions;

export default slice.reducer;