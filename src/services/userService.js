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

// const getAllUsers = (id) => {
//     return axios.post('api/get-all-users', { id })
// }

const getAllUsers = (id) => {
    return axios.get(`api/get-all-users?id=${id}`);
};

const createNewUser = (email, password, firstName, lastName, address) => {
    const data = {
        email,
        password,
        firstName,
        lastName,
        address,
    };
    return axios.post('api/create-new-user', data)
}

const deleteUser = (id) => {
    return axios.delete(`api/delete-user/${id}`);
}

const editUser = (id, email, firstName, lastName, address) => {
    const data = {
        id,
        email,
        firstName,
        lastName,
        address,
    };
    return axios.put('/api/edit-user', data)
}

export {
    handleLoginAPI, getAllUsers, createNewUser, deleteUser, editUser

};
