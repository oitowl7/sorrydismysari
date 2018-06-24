import axios from "axios";

export default {
  createGarment : function(obj) {
    return axios.post(`/api/garment/create`, {
      data: obj
    });
  }
}
