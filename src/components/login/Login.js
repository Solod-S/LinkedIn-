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

import logo from "../../../src/images/login-logo.svg";
import hero from "../../../src/images/login-hero.svg";
import google from "../../../src/images/google.svg";

const Login = () => {
  return (
    <Container>
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
        <Google>
          <img src={google} alt="google" />
          Sign in with Google
        </Google>
      </Form>
    </Container>
  );
};

export default Login;
