import Axios from "axios";
import API_URL from "../../config";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`

    await Axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    })
      .then((data) => console.log("data", data))
      .catch((err) => console.log("err", err));

    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
  };
}
