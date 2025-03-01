import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

type category = {
    maDanhMuc: string,
    tenDanhMuc: string
}
interface CategoryState {
    listContact: []
}

const initialState: CategoryState = {
    listContact: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setListContact(state, action) {
            state.listContact = JSON.parse(localStorage?.getItem("formData")!);
        },
        deleteItemContact(state, action) {
            const dataUpdate = state.listContact.filter((item: any) => item.id !== action.payload.id);
            state.listContact = dataUpdate as [];
            localStorage.setItem("formData", JSON.stringify(dataUpdate));
        },
        updateItemContact(state, action) {
            const updatedItem = action.payload;
            const updatedList = state.listContact.map((item: any) =>
                item.id === updatedItem.id ? updatedItem : item
            );
            state.listContact = updatedList as [];
            localStorage.setItem("formData", JSON.stringify(updatedList));
        }
    },
})

export const { deleteItemContact, setListContact, updateItemContact } = categorySlice.actions;

export default categorySlice.reducer