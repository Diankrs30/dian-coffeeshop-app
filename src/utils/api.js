import axios from "axios";

const HOST = process.env.REACT_APP_HOST;

export const login = (body) => {
  const URL = HOST + "/auth/login";
  return axios.post(URL, body);
};

export const signup = (body) => {
  const URL = HOST + "/users/register";
  return axios.post(URL, body);
};

export const getProfile = () => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = HOST + "/users/profile_user";
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProfile = (body) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = HOST + "/users/profile";
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
  const URL = HOST + "/auth/logout";
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getProduct = (param) => {
  console.log("<<<", param);
  const queryParam = {
    search: param.search ?? "",
    category: param.category ?? "",
    sort: param.sort ?? "id",
    order: param.order ?? "asc",
    page: param.page ?? "1",
    limit: param.limit ?? "12",
  };
  const URL =
    HOST +
    `/products/get_products?search=${queryParam.search}&category=${queryParam.category}&order=${queryParam.order}&sort=${queryParam.sort}&page=${queryParam.page}&limit=${queryParam.limit}`;
  return axios.get(URL);
};

export const getFavorite = () => {
  const URL =
    HOST +
    `/products/get_products?order=desc&sort=total_selling&page=1&limit=3`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = HOST + `/products/product_detail/${id}`;
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getHistory = (param) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const queryParam = {
    page: param.page ?? "1",
    limit: param.limit ?? "15",
  };
  const URL =
    HOST +
    `/transactions/history?page=${queryParam.page}&limit=${queryParam.limit}`;
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
  const URL = HOST + `/transactions/delete_history/${id}`;
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getSizeProduct = () => {
  const URL = HOST + `/size_products`;
  return axios.get(URL);
};

export const getDeliveryMethod = () => {
  const URL = HOST + `/delivery_methods`;
  return axios.get(URL);
};

export const getCategory = () => {
  const URL = HOST + `/categories`;
  return axios.get(URL);
};

export const createTransaction = (body) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = HOST + "/transactions/create_transactions";
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const createProduct = (body) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = HOST + "/products/create_product";
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProduct = (body, id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = HOST + `/products/edit_products/${id}`;
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const deleteProduct = (id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  console.log(token);
  const URL = HOST + `/products/delete_products/${id}`;
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const createPromo = (body) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',body);
  const URL = HOST + "/promos/create_promo";
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editPromo = (body, id) => {
  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token;
  const URL = HOST + `/promos/edit_promo/${id}`;
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};