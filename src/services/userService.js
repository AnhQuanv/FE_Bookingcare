import axios from '../axios';

const handleLoginAPI = (email, password) => {
    return axios.post('api/login', { email, password })
        .then(response => {
            return response; // Trả về dữ liệu nếu login thành công
        })
        .catch(error => {
            return Promise.reject(error?.response?.data?.message);
        });
};

const getAllUsers = (id) => {
    return axios.post('api/get-all-users', { id })
}

export {
    handleLoginAPI, getAllUsers

};
