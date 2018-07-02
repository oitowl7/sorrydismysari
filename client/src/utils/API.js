import axios from "axios";

export default {
  createGarment : function(obj) {
    return axios.post(`/api/garment/create`, {
      data: obj
    });
  },

  checkLogin : function(obj) {
    return axios.post('/api/login', {
      data: obj
    })
  },

  createUserExistingHouse : function(obj) {
    return axios.post('/api/create/existing', {
      data: obj
    })
  },

  createUserNewHouse : function(obj) {
    return axios.post('/api/create/new', {
      data: obj
    })
  },
}
