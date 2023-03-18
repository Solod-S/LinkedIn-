import {
  Container,
  ShareBox,
  Article,
  SharedActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
} from "./MainSide.styled";

import user from "../../../src/images/user.svg";
import photo from "../../../src/images/photo-icon.svg";
import event from "../../../src/images/event.svg";
import video from "../../../src/images/video.svg";
import article from "../../../src/images/article.svg";
import ellipsis from "../../../src/images/ellipsis.svg";
import exmpPost from "../../../src/images/post_exmpl.jpg";
import like from "../../../src/images/like.svg";
import claping from "../../../src/images/claping.svg";
import likeAction from "../../../src/images/like2.svg";
import commentAction from "../../../src/images/commentAction.svg";
import reportAction from "../../../src/images/reportAction.svg";
import sendAction from "../../../src/images/sendAction.svg";

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
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src={exmpPost} alt="shared image" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src={like} alt="like icon" />
                <img src={claping} alt="claping icon" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src={likeAction} alt="likeAction icon" />
              <span>Like</span>
            </button>
            <button>
              <img src={commentAction} alt="commentAction icon" />
              <span>Comments</span>
            </button>
            <button>
              <img src={reportAction} alt="reportAction icon" />
              <span>Report</span>
            </button>
            <button>
              <img src={sendAction} alt="reportAction icon" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

export default MainSide;
