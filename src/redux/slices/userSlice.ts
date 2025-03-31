import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Middleware gọi API (Redux Thunk)
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!response.ok) throw new Error("User not found");
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// Định nghĩa state
interface UserState {
    data: any;
    loading: boolean;
    error: string | null;
    user: {}
}

// Khởi tạo state ban đầu
const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
    user: {}
};

// Reducer cập nhật state
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
