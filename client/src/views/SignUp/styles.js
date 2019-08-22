import styled from 'styled-components'
import desk from 'assets/images/desk.jpg'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

export const BackLink = styled(Link)`
  position: absolute;
  left: 2.5rem;
  top: 2.95rem;
`

export const BackIcon = styled(FiChevronLeft)`
  color: #8244bc;
`

export const Wrapper = styled.div`
  background-color: #fafbfc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: #8244bc;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

export const Quote = styled.div`
  background: #8244bc;
  display: flex;
  align-items: flex-end;
  width: 380px;
  min-height: 381px;
  padding: 2rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${desk}) no-repeat;
    opacity: 0.15;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Message = styled.p`
  color: #fff;
  line-height: 1.4;
  margin: 0 0 0.5rem 1rem;

  i {
    display: block;
    font-weight: 700;
  }
`

export const Avatar = styled.div`
  border-radius: 80px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`
