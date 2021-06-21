import axios from "axios";

export const createOrUpdateAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    "http://localhost:8000/api/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
