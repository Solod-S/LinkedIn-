import { useState } from "react";
import {
  Container,
  Contant,
  Header,
  SharedContent,
  UserInfo,
  ShareCreation,
  AttachAssets,
  AssetButton,
  ShareComment,
  PostButton,
  Editor,
} from "./PostModal.styled.Post";

import close from "../../../images/close-icon.svg";
import user from "../../../images/user.svg";
import shareImage from "../../../images/share-image.svg";
import shareVideo from "../../../images/share-video.svg";
import shareComment from "../../../images/share-comment.svg";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText;
  };

  return (
    <Container>
      <Contant>
        <Header>
          <h2>Create a post</h2>
          <button>
            <img src={close} alt="close icon" />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src={user} alt="user icon" />
            <span>Name</span>
          </UserInfo>
          <Editor>
            <textarea
              placeholder="What do you want to talk about&"
              autoFocus={true}
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
            />
          </Editor>
        </SharedContent>
        <ShareCreation>
          <AttachAssets>
            <AssetButton>
              <img src={shareImage} alt="share image icon" />
            </AssetButton>
            <AssetButton>
              <img src={shareVideo} alt="share video icon" />
            </AssetButton>
          </AttachAssets>
          <ShareComment>
            <AssetButton>
              <img src={shareComment} alt="share comment icon" />
              Anyone
            </AssetButton>
          </ShareComment>
          <PostButton>Post</PostButton>
        </ShareCreation>
      </Contant>
    </Container>
  );
};

export default PostModal;
