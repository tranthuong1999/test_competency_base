import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { apiDetailCourse, apiFetchCourseByCategory, apiFetchListAllCourse, apiGetListCourse, apiGetistCategory } from '../../apis/category.api';


type category = {
    maDanhMuc: string,
    tenDanhMuc: string
}
interface CategoryState {
    listCategories: [],
    listCourse: any,
    listCourseByCategory: [],
    currentCategory: category | null,
    listAllCourse: [],
    detailCourse: any
}

const initialState: CategoryState = {
    listCategories: [],
    listCourse: [],
    listCourseByCategory: [],
    currentCategory: null,
    listAllCourse: [],
    detailCourse: {}

}

class CategoryAsyncThunk {
    // TODO: Write new thunk here
    listCategory = createAsyncThunk(`category/createSubTask`, async () => {
        const result = await apiGetistCategory();
        return result;
    });

    fetchListCourse = createAsyncThunk(`category/fetchListCourse`, async (props: { page: number, pageSize?: number, MaNhom?: string }) => {
        const { page, pageSize, MaNhom } = props;
        const result = await apiGetListCourse({ page, pageSize, MaNhom });
        return result;
    });

    fetchCourseByCategory = createAsyncThunk(`category/fetchCourseByCategory`, async (category: string) => {
        const result = await apiFetchCourseByCategory(category);
        return result;
    });

    fetchListAllCategory = createAsyncThunk(`category/fetchListAllCategory`, async () => {
        const result = await apiFetchListAllCourse();
        return result;
    });
    fetchDetailCourse = createAsyncThunk(`category/fetchDetailCourse`, async (maKhoaHoc: string) => {
        const result = await apiDetailCourse(maKhoaHoc);
        return result;
    });

}

const categoryAsyncThunk = new CategoryAsyncThunk();
// action
export const listCategory = categoryAsyncThunk.listCategory;
export const fetchListCourse = categoryAsyncThunk.fetchListCourse;
export const fetchCourseByCategory = categoryAsyncThunk.fetchCourseByCategory;
export const fetchListAllCategory = categoryAsyncThunk.fetchListAllCategory;
export const fetchDetailCourse = categoryAsyncThunk.fetchDetailCourse;

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCurrentCategory(state, action) {
            state.currentCategory = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, action) => {
            state.listCategories = action.payload;
        });
        builder.addCase(fetchListCourse.fulfilled, (state, action) => {
            state.listCourse = action.payload;
        });
        builder.addCase(fetchCourseByCategory.fulfilled, (state, action) => {
            state.listCourseByCategory = action.payload;
        });
        builder.addCase(fetchListAllCategory.fulfilled, (state, action) => {
            state.listAllCourse = action.payload;
        });
        builder.addCase(fetchDetailCourse.fulfilled, (state, action) => {
            state.detailCourse = action.payload;
        });
    }
})

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer