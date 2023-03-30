import service from "./config.sercices";

const getAllPhones = () => {
  return service.get("/phones");
};

const getPhoneById = (id) => {
  return service.get(`/phones/${id}`);
};

export { getAllPhones, getPhoneById };
