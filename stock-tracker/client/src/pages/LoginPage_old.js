import React from "react";
import { Link } from "react-router-dom";
// import Validator from "validator";

// const LoginPage = () => {
//     <div>
//         <p>Password Required</p>
//     </div>
// }

// import InlineError from '../messages/InlineError';

class LoginPage extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

//   onChange = () =>
//     this.setState({ ...this.state.data, [this.name]: this.value });

//   onSubmit = () => {
//     const errors = this.validate(this.state.data);
//     this.setState({
//       errors
//     });
//   };

//   validate = data => {
//     const errors = {};
//     if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
//     if (!data.password) errors.password = "Can't be blank";
//     return errors;
//   };


  render() {
    //  const {data}=this.state;
    return (
      <div>
        <form>
            <Input name="email" placeholder="E-mail (required)" />
            <Input name="password" placeholder="Password (required)" />
            <FormBtn>Submit</FormBtn>
        </form>
      </div>
    );
  }
}

export default LoginPage;
