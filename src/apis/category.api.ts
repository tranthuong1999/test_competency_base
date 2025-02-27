
const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI"

export const apiGetistCategory = async () => {
    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`, {
            method: "GET",
            headers: {
                "Tokencybersoft": `${token}`,
                "Content-Type": "application/json"
            }
        });
        const data: any = await response.json();
        return data;
    }
    catch (error) {
        console.log("apiGetistCategory", error)
    }
}
export const apiGetListCourse = async (props: { page: number, pageSize?: number, MaNhom?: string }) => {
    const { page } = props;
    try {
        const response = await fetch(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=12&MaNhom=GP01`, {
            method: "GET",
            headers: {
                "Tokencybersoft": `${token}`,
                "Content-Type": "application/json"
            }
        });
        const data: any = await response.json();
        return data;
    }
    catch (error) {
        console.log("apiGetistCategory", error)
    }
}

export const apiFetchCourseByCategory = async (category: string) => {
    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`, {
            method: "GET",
            headers: {
                "Tokencybersoft": `${token}`,
                "Content-Type": "application/json"
            }
        });
        const data: any = await response.json();
        return data;
    }
    catch (error) {
        console.log("apiGetistCategory", error)
    }
}

export const apiFetchListAllCourse = async () => {
    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc`, {
            method: "GET",
            headers: {
                "Tokencybersoft": `${token}`,
                "Content-Type": "application/json"
            }
        });
        const data: any = await response.json();
        return data;
    }
    catch (error) {
        console.log("apiGetistCategory", error)
    }
}

export const apiDeleteCourse = async (maKhoaHoc: string, taiKhoan: string) => {
    const _token = JSON.parse(localStorage.getItem("credential")!).accessToken
    console.log("maKhoaHoc", maKhoaHoc)
    console.log("taiKhoan", taiKhoan)

    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/HuyGhiDanh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_token}`,
                "Tokencybersoft": `${token}`,
            },
            body: JSON.stringify({ maKhoaHoc, taiKhoan })
        });
        const result: any = await response.json();
        return result;
    }
    catch (error) {
        console.log("apiDeleteCourse", error)
    }
}

export const apiDetailCourse = async (maKhoaHoc: string) => {
    const _token = JSON.parse(localStorage.getItem("credential")!).accessToken
    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Tokencybersoft": `${token}`,
                "Authorization": `Bearer ${_token}`,
            }
        });
        const result: any = await response.json();
        return result;
    }
    catch (error) {
        console.log("apiDetailCourse", error)
    }
}

export const apiRegisterCourse = async (maKhoaHoc: string, taiKhoan: string) => {
    const _token = JSON.parse(localStorage.getItem("credential")!).accessToken
    try {
        const response = await fetch(`${BASE_URL}/QuanLyKhoaHoc/DangKyKhoaHoc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_token}`,
                "Tokencybersoft": `${token}`,
            },
            body: JSON.stringify({ maKhoaHoc, taiKhoan })
        });
        const result: any = await response.json();
        return result;
    }
    catch (error) {
        console.log("apiRegisterCourse", error)
    }
}
