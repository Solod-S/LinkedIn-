import { Container, Section, Layout } from "./Home.styled";

import LeftSide from "./LeftSide";
import MainSide from "./MainSide";
import RigthSide from "./RightSide";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in hurry? - </a>
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

export default Home;
