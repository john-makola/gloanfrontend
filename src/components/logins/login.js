import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/auth";
import { STAFF_LOGIN } from "../../graphql/users";
import { Form, Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/hooks";

const Login = () => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [netErrors, setNetErrors] = useState("");
  const navigate = useNavigate();

  const { onChange, onSubmit, values, validated, setValues } = useForm(
    loginStaff,
    {
      username: "",
      password: "",
    }
  );

  let err = "";
  const [login] = useMutation(STAFF_LOGIN, {
    update(_, { data: { login: userdata } }) {
      context.login(userdata);
      navigate("/dashboard");
      window.location.reload();
    },
    onError({ graphQLErrors, networkError }) {
      if (networkError) {
        err = "Error connecting to System Server contact Administrator";
        setNetErrors(err);
        return;
      }
      if (graphQLErrors) {
        err = graphQLErrors[0].extensions.exception.errors;
        setErrors(err);
        return;
      }
    },

    variables: values,
  });

  function loginStaff() {
    login();
  }

  function handleClick() {
    setValues({
      username: "",
      password: "",
    });
  }

  //DESTRUCTURE FIELDS
  const { username, password } = values;
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <FormControl
              required
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <FormControl
              required
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="  mt-3">
            <Form.Group>
              <Button
                onClick={handleClick}
                variant="secondary"
                className="mx-3"
              >
                Cancel
              </Button>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Form.Group>
          </div>
          <p className="forgot-password text-right mt-2"></p>
        </div>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={netErrors ? "ui error message" : null}>
          {netErrors ? netErrors : null}
        </div>
      </Form>
    </div>
  );
};

export default Login;
