import {
  Container,
  FollowCard,
  Title,
  FeedList,
  Avatar,
  Recommendation,
  BannerCard,
} from "../RightSide/RightSide.styled";

import feed from "../../../../src/images/feed-icon.svg";
import right from "../../../../src/images/right-icon.svg";
import banner from "../../../../src/images/banner.jpg";

const RigthSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src={feed} alt="feed icon" />
        </Title>
        <FeedList>
          <li>
            <a
              href="/LinkedInClone/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar />
            </a>
            <div>
              <span>Linkedin</span>
              <a
                href="/LinkedInClone/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </a>
            </div>
          </li>
          <li>
            <a
              href="/LinkedInClone/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar />
            </a>
            <div>
              <span>Video</span>
              <a
                href="/LinkedInClone/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </a>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src={right} alt="right icon" />
        </Recommendation>
        <BannerCard>
          <img src={banner} alt="banner icon" />
        </BannerCard>
      </FollowCard>
    </Container>
  );
};

export default RigthSide;
