import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Alert";
import { login } from "../../actions/users";
import ScreenTemplate from "../../components/ScreenTemp";
import "./Signin.css";
import {useNavigate} from 'react-router-dom'

function SignIn(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login(email, password));

  };

  return (
    <ScreenTemplate title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/signup">Register Here</Link>
          </Col>
        </Row>
      </div>
    </ScreenTemplate>
  );
}

export default SignIn