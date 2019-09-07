import styled from 'styled-components'

export const Container = styled.div`
  background: #8244bc;
  min-height: 100vh;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
`

export const Tasks = styled.div`
  white-space: nowrap;
  overflow: auto;
  padding: 0 20px 20px;
  position: relative;
`

export const Task = styled.div`
  background: #fff;
  border-radius: 20px;
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  padding: 20px;
  height: 200px;
  width: 150px;
`

export const Header = styled.header`
  background: #fff;
  flex: 1;
  position: relative;
  margin-bottom: -20px;

  &::before {
    content: '';
    background: #8244bc;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50px 0 0 0;
    height: 50px;
    width: 100%;
  }
`
