import {
  Container,
  ShareBox,
  Article,
  SharedActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
  Content,
} from "../MainSide/MainSide.styled";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import getArticlesApi from "../../../redux/actions/getArticlesApi";

import PostModal from "../../shared/Post/PostModal";

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
import loadinSpiner from "../../../src/images/spin-loader.gif";

const MainSide = (props) => {
  const [showModal, setshowModal] = useState("close");
  useEffect(() => {
    props.getArticles();
  }, [props.user, props.articles.length]);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setshowModal("close");
        break;

      case "close":
        setshowModal("open");
        break;

      default:
        setshowModal("close");
        break;
    }
  };
  console.log(props.articles);
  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="user icon" />
              ) : (
                <img src={user} alt="user icon" />
              )}

              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
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
          <Content>
            {props.loading && <img src={loadinSpiner} alt="loding spiner" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="user icon" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src={ellipsis} alt="ellipsis icon" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.image && article.video ? (
                        <ReactPlayer
                          width={"100%"}
                          url={article.video}
                          controls={true}
                        />
                      ) : (
                        article.image && (
                          <img src={article.image} alt="shared image" />
                        )
                      )}
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
                      <a>{article.comments}</a>
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
              ))}

            {/* <Article>
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
            </Article> */}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSide);
