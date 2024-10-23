import axios from "axios";

export const Signup = async (
  firstName,
  lastName,
  email,
  password,
  phone,
  username
) => {
  try {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };

    if (username) {
      payload.username = username;
    }

    const response = await axios.post(
      "http://localhost:5000/users/register",
      payload
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const Login = async (email, password) => {
  return await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
    email,
    password,
  });
};
