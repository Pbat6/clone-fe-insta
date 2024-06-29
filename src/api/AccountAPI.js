import axios from "axios";

export async function createAccount({
  username,
  password,
  email,
  fullName,
  gender,
  dateOfBirth,
}) {
  const url = `http://localhost:?/api/v1/accounts`;
  return await axios.post(url, {
    dateOfBirth: dateOfBirth,
    email: email,
    fullName: fullName,
    gender: gender,
    password: password,
    username: username,
  });
}

export async function login({ username, password }) {
  const url = `http://localhost:?/api/v1/auth/login`;
  return await axios.post(url, {
    password: password,
    username: username,
  });
}

export async function checkToken({ token }) {
  const url = `http://localhost:?/api/v1/auth/token/introspect`;
  return await axios.post(url, {
    token: token,
  });
}
