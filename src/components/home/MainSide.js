import { Container, ShareBox, Article, SharedActor } from "./MainSide.styled";

import user from "../../../src/images/user.svg";
import photo from "../../../src/images/photo-icon.svg";
import event from "../../../src/images/event.svg";
import video from "../../../src/images/video.svg";
import article from "../../../src/images/article.svg";
import ellipsis from "../../../src/images/ellipsis.svg";
const MainSide = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src={user} alt="user icon" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src={photo} alt="photocard icon" />
            <span>Photo</span>
          </button>
          <button>
            <img src={video} alt="video icon" />
            <span>Video</span>
          </button>
          <button>
            <img src={event} alt="event icon" />
            <span>Event</span>
          </button>
          <button>
            <img src={article} alt="article icon" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src={user} alt="user icon" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src={ellipsis} alt="ellipsis icon" />
            </button>
          </SharedActor>
        </Article>
      </div>
    </Container>
  );
};

export default MainSide;
