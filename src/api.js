import axios from 'axios';

export function getProductData(id) {
  return axios.get(`https://myeasykart.codeyogi.io/product/${id}`).then(res => res.data);
}

export function getProductsByIds(ids) {
  const commaIds = ids.join();
  return axios.get("https://myeasykart.codeyogi.io/products/bulk", {
    params: {
      ids: commaIds,
    }
  }).then(function(response) {
    return response.data;
  });
}

export function getProductList(sortBy, search, page, sortType) {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }
  return axios.get("https://myeasykart.codeyogi.io/products", {
    params,
  }).then(response => response.data);
}
//[1:5, 7:8;
export function saveCart(cart) {
  console.log('saveCart is called with', cart);
  return axios.post("https://myeasykart.codeyogi.io/carts", { data: cart }, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  }).then(function(response) {
    return response.data;
  });
}

export function getCart() {
  return axios.get("https://myeasykart.codeyogi.io/carts", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(function(response) {
    return response.data;
  });
}