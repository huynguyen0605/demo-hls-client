import axios from '../axios';

const accountService = {
    login(data) {
        return axios.post(`/login`, data);
    }
};

export default accountService;