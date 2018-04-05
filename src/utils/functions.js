const axios = require('axios');

module.exports = {
    ageCheck(age) {
        age = +age;
        if (typeof age === 'number' && age >= 18 && age <= 108) return true;
        return false;
    },
    emailCheck(email) {
        if (!email) return false;
        if (!email.length) return false;
        if (!email.includes('@')) return false;
        if (!email.includes('.')) return false;
        return true;
    },
    getCars(url) {
        return axios.get(url).then(res => {
            return res.data;
        });
    }
};
