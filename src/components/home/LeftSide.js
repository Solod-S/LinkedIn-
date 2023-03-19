import {
  Container,
  ArtCard,
  UserInfo,
  CardBackGround,
  Photo,
  Link,
  AddPhotoText,
  Widget,
  Item,
  CommunityCard,
} from "./LeftSide.styled";
import { connect } from "react-redux";

import widget from "../../../src/images/widget-icon.svg";
import item from "../../../src/images/item-icon.svg";
import plus from "../../../src/images/plus-icon.svg";

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackGround />
          <a>
            <Photo />
            <Link>
              Welcome, {props.user ? props.user.displayName : "there"}!
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={widget} alt="widget icon" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={item} alt="item icon" />
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src={plus} alt="plus icon" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
