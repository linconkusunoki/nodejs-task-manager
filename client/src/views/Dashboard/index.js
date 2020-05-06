import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Sidebar, Box } from '../../components'
import * as S from './styled'

const input = '# This is a header\n\nAnd this is a paragraph'

export default function Dashboard() {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <S.Title>Current Tasks</S.Title>
        <Box className="p-4 my-4">
          <ReactMarkdown source={input} />
        </Box>
        <Box className="p-4 my-4">dadasd</Box>

        <S.Title className="mt-8">Completed</S.Title>
        <Box className="p-4 my-4 opacity-50">dadasd</Box>
        <Box className="p-4 my-4 opacity-50">dadasd</Box>
        <Box className="p-4 my-4 opacity-50">dadasd</Box>
      </S.Main>
    </S.Wrapper>
  )
}
