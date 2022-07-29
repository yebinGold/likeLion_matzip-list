import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";


export const MainContainer = styled.div`
  width: 480px;
  height: 100%;
  margin: 0px auto;
  margin-top: 30px;
  color: ${(props) => props.theme.textColor}; // props에 접근해서 값 적용!
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 25px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const MainHeader = styled.div`
  text-align: center;
  padding: 25px;
  font-size: 26px;
  font-weight: 500;
  background: #fd7e14;
  position: relative;
  .themeIcon {
    position: absolute;
    right: 70px;
  }
`;
export const CategoriesBlock = styled.div`
  height: 100%;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
`;

export const Category = styled(NavLink)`
  font-size: 1.18rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #ffd43b;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ff922b;
    color: #ff922b;
    &:hover {
      color: #ffc078;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const MatzipListBlock = styled.div`
  min-height: 510px;
  padding: 0px 0px 20px 45px;
  position: relative;
`;
export const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-right: 20px;
  font-size: 44px;
  color: red;
  animation: logo-spin infinite 0.8s linear;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Icon = styled.div`
  font-size: 38px;
  color: #fcc419;
  padding-top: 20px;
  margin-right: 24px;
`;
export const PlusIcon = styled.div`
  position: absolute;
  font-size: 28px;
  color: #fcc419;
  top: 25px;
  right: 100px;
  cursor: pointer;
  .shadow {
    border-radius: 50%;
    box-shadow: 0 13px 20px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.35), 0 -6px 16px -6px rgba(0, 0, 0, 0.05);
  }
  &:hover {
    color: #ff922b;
  }
  opacity: 0;
`;

export const MatzipBlock = styled.li`
  list-style: none;
  display: flex;
  position: relative;
  div {
    cursor: pointer;
  }
  h4 {
    margin-bottom: 5px;
  }
  span {
    opacity: 0.8;
    font-size: 16px;
  }
  & + & {
    margin: 0.5rem 0;
  }
  &:hover {
    ${PlusIcon} {
      opacity: 1;
    }
  }
`;

export const PagingBlock = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  position: absolute;
  bottom: 15px;
`;
export const PageDiv = styled.div`
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #fcc419;
  }
  ${(props) =>
    props.here &&
    css`
      color: #ff922b;
    `}
`;
export const ListContainer = styled.div`
  min-height: 500px;
  padding: 25px;
  position: relative;
`;
export const ListBlock = styled.div`
  width: 410px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 20px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    .check {
      color: #fcc419;
      margin-left: 50px;
      margin-right: 35px;
      font-size: 24px;
    }
    h4 {
      ${(props) =>
        props.checked ||
        css`
          opacity: 1;
        `}
    }
    ${(props) =>
      props.checked &&
      css`
        opacity: 0.6;
      `}
  }
  .remove {
    color: #fcc419;
    position: absolute;
    right: 70px;
    &:hover {
      color: red;
    }
  }
`;
