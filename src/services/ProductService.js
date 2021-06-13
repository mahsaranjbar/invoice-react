import http from "./http-common";

const getAll = () => {
  return http.get("/getproducts");
};

const create = data => {
  return http.post("/insertproduct", data);
};

const remove = id => {
  return http.delete(`/deleteproduct/${id}`);
};

const ProductSrvice = {
  getAll,
  create,
  remove
};

export default ProductSrvice;
