import axios from "axios";

export const login = (body) => {
  const URL = process.env.REACT_APP_HOST + "/auth/login";
  return axios.post(URL, body);
};

export const signup = (body) => {
  const URL = process.env.REACT_APP_HOST + "/users/register";
  return axios.post(URL, body);
};

export const getProfile = () => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = process.env.REACT_APP_HOST + "/users/profile_user";
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProfile = (body) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = process.env.REACT_APP_HOST + "/users/profile";
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const logout = () => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = process.env.REACT_APP_HOST + "/auth/logout";
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getProduct = (param) => {
  console.log("<<<", param);
  const queryParam = {
    category: param.category ?? "",
    sort: param.sort ?? "id",
    order: param.order ?? "asc",
  };
  const URL =
    process.env.REACT_APP_HOST +
    `/products/get_products?search=&category=${queryParam.category}&order=${queryParam.order}&sort=${queryParam.sort}&page=1&limit=12`;
  return axios.get(URL);
};

export const getFavorite = () => {
  const URL =
    process.env.REACT_APP_HOST +
    `/products/get_products?order=desc&sort=total_selling&page=1&limit=3`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = process.env.REACT_APP_HOST + `/products/product_detail/${id}`;
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getHistory = () => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL =
    process.env.REACT_APP_HOST + `/transactions/history?page=1&limit=15`;
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const deleteHistory = (id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = process.env.REACT_APP_HOST + `/transactions/delete_history/${id}`;
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};
