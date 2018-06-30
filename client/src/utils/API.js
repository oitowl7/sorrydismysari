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
  }
}
