import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'

const bounceInUp = keyframes`
  from,
  60%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    transform: translate3d(0, 200px, 0);
  }

  60% {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 10px, 0);
  }
`

const bounceOutDown = keyframes`
  from,
  60%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    transform: translate3d(0, 10px, 0);
  }

  60% {
    transform: translate3d(0, 210px, 0);
  }

  to {
    transform: translate3d(0, 200px, 0);
  }
`

const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: .4;
  }

  to {
    transform: scale(3);
    opacity: 0;
  }
`

export const Container = styled.div`
  background: #fff;
  bottom: 0;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  height: 260px;
  left: 0;
  position: fixed;
  transform: translateY(200px);
  width: 100%;

  ${props =>
    props.touched &&
    css`
      animation: ${bounceOutDown} 0.8s forwards;
    `}

  ${props =>
    props.open &&
    css`
      animation: ${bounceInUp} 0.8s forwards;
    `}
`

export const Menu = styled.nav`
  margin: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const MenuLink = styled(Link)`
  transition: all 300ms ease-in;
  opacity: ${props => (props.open ? 0 : 1)};
`

export const Toggle = styled.button`
  background: #8244bc;
  border-radius: 40px;
  height: 40px;
  width: 40px;
  -webkit-tap-highlight-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${props => (props.open ? 'rotate(135deg)' : 'rotate(0)')};

  :focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`

export const Ripple = styled.span`
  background: #8244bc;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 50%;
  opacity: 0.1;

  ${props =>
    props.ripple &&
    css`
      animation: ${ripple} 0.3s;
    `}
`

export const Form = styled.form`
  padding: 20px;
`
