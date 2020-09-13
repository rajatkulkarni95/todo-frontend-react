import axios from "axios";
const url = process.env.REACT_APP_BACKEND_URL;

export const add_todo = async (payload) => {
  return await axios.post(`${url}`, payload);
};

export const delete_todo = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const complete_todo = async (payload, id) => {
  return await axios.put(`${url}/${id}`, payload);
};

export const get_todos = () => {
  return axios.get(url);
};
