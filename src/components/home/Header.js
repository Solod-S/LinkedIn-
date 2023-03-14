import {
  Container,
  Content,
  Logo,
  Link,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavListItem,
} from "./Header.styled";

import logo from "../../../src/images/home-logo.svg";
import search from "../../../src/images/search-icon.svg";
import navHome from "../../../src/images/nav-home.svg";
import navNetwork from "../../../src/images/nav-network.svg";
import navJobs from "../../../src/images/nav-jobs.svg";
import navMessaging from "../../../src/images/nav-messaging.svg";
import navNotification from "../../../src/images/nav-notifications.svg";
import navWork from "../../../src/images/nav-work.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link path="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={search} alt="search icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavListItem className="active">
              <a>
                <img src={navHome} alt="navigation-home icon" />
                <span>Home</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src={navNetwork} alt="navigation-network icon" />
                <span>My Network</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src={navJobs} alt="navigation-jobs icon" />
                <span>Jobs</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src={navMessaging} alt="navigation-messaging icon" />
                <span>Messaging</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src={navNotification} alt="navigation-notification icon" />
                <span>Notification</span>
              </a>
            </NavListItem>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
