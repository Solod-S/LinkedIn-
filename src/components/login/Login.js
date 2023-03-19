import {
  Container,
  Nav,
  Link,
  Joint,
  SignIn,
  Section,
  Hero,
  Form,
  Google,
} from "./Login.styled";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { connect } from "react-redux";
import signInApi from "../../redux/actions/signInApi";

import logo from "../../../src/images/login-logo.svg";
import hero from "../../../src/images/login-hero.svg";
import google from "../../../src/images/google.svg";

const Login = (props) => {
  console.log(props);
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <Link path="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <Joint>Joint now</Joint>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={hero} alt="hero" />
        </Hero>
      </Section>
      <Form>
        <Google onClick={() => props.signIn()}>
          <img src={google} alt="google" />
          Sign in with Google
        </Google>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
