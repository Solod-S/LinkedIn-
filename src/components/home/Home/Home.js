import { Container, Section, Layout } from "./Home.styled";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import LeftSide from "../LeftSide/LeftSide";
import MainSide from "../MainSide/MainSide";
import RigthSide from "../RightSide/RightSide";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h5>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hiring in hurry? -{" "}
          </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <MainSide />
        <RigthSide />
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
