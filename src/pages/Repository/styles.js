import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  animation: ${rotate} 2s linear infinite;
  color: #4f81c7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 20px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    font-size: 16px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    background-color: #fff;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      a {
        color: #333;

        &:hover {
          color: #4f81c7;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }

      span {
        font-size: 12px;
        font-weight: 600px;
        background-color: #64c4ed;
        color: #fff;
        margin-left: 10px;
        border-radius: 2px;
        padding: 2px 4px;
      }
    }
  }
`;
