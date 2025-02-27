import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category.slice";

const store = configureStore({
    reducer: {
        categoryReducer: categorySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;