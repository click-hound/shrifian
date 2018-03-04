import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("http://sold-by-ahmad.herokuapp.com/api/auth", { credentials })
        .then(res => res.data.user, res => console.log(res)),
    signup: user =>
      axios
        .post("http://sold-by-ahmad.herokuapp.com/api/users", { user })
        .then(res => res.data.user),
    confirm: token =>
      axios
        .post("http://sold-by-ahmad.herokuapp.com/api/auth/confirmation", {
          token
        })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post(
        "http://sold-by-ahmad.herokuapp.com/api/auth/reset-password-request",
        {
          email
        }
      ),
    validateToken: token =>
      axios.post("http://sold-by-ahmad.herokuapp.com/api/auth/validate-token", {
        token
      }),
    resetPassword: data =>
      axios.post("http://sold-by-ahmad.herokuapp.com/api/auth/reset-password", {
        data
      })
  },
  listings: {
    getListings: query =>
      axios.get("http://sold-by-ahmad.herokuapp.com/api/listings")
  }
};
