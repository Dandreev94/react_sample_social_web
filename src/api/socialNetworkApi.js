import * as axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "465a41a2-c4bc-47f5-8b81-8de9cc4d8905"
    }
});

export const userApi = {
    getAuthMe() {
        return apiInstance.get('auth/me').then(response => response.data);
    },
    uploadUsersData(count, page = 1) {
        return  apiInstance.get(`users?page=${page}&count=${count}`).then(response => response.data);
    },
    doFollow(id) {
        return  apiInstance.post('follow/' + id).then(response => response.data);
    },
    doUnfollow(id) {
        return  apiInstance.delete('follow/' + id).then(response => response.data);
    },
    getProfileInfo(id) {
        return apiInstance.get(`profile/${id}`).then(response => response.data);
    }
};