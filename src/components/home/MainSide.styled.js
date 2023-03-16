import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  grid-area: mainside;
`;

export const CommondCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
`;
export const ShareBox = styled(CommondCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-size: 60;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      img {
        margin: 0 4px 0 -2px;
      }
      span {
        color: #5e5e5e;
      }
    }
  }
`;

export const Article = styled(CommondCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 16px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
  }
`;
