import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log("Dispatching:", action);
    return next(action);
};
const apiMiddleware = (store: any) => (next: any) => async (action: any) => {
    if (action.type !== "FETCH_USER") return next(action); // Kiểm tra action
    store.dispatch({ type: "FETCH_USER_PENDING" }); // 🚀 Bắt đầu gọi API
    try {
        const response = await fetch(`https://api.example.com/user/${action.payload}`);
        const data = await response.json();

        store.dispatch({ type: "FETCH_USER_SUCCESS", payload: data }); // ✅ API thành công
    } catch (error) {
        store.dispatch({ type: "FETCH_USER_ERROR", payload: error }); // ❌ API thất bại
    }
};

const store = configureStore({
    reducer: {
        userReducer: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;