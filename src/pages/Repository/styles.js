import styled, { keyframes } from 'styled-components';

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

export const GoBack = styled.div`
  svg {
    padding: 8px;
    background-color: #f0d78c;
    border-radius: 50%;
    color: #fff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.05);
  }
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
  margin-top: 15px;
  border-top: 1px solid #eee;
  list-style: none;

  p.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0px 10px 0px;
    margin: 20px 0px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
    color: #64c4ed;

    width: 100%;
  }

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

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  button {
    background: #64c4ed;
    color: #fcfafa;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0px 10px;

    &:nth-child(${props => props.active + 1}) {
      background: #4f81c7;
      color: #fff;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 5px;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
