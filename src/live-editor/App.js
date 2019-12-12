import React, { useState } from 'react'
// import './App.css'
// import Playground from 'component-playground'
// import Button from './Button'
import {
  LiveProvider,
  LiveError,
  LivePreview
} from 'react-live'
import LiveEditor from './reactLive/LiveEditor'
import styled, { css } from 'styled-components'
import * as polished from 'polished'
import {reactLiveHome} from './themes/theme.js'

const background = '#42374a';
const foreground = '#f8f8f2';
const red = '#ff5555';
const blue = polished.lighten(0.2, '#98E342');
const lightGrey = polished.darken(0.06, '#272727');


const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: window.innerWidth) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 100%;
  max-width: 100%;
  @media (max-width: 1000px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(20)};
  height: ${polished.rem(500)};
  max-height: ${polished.rem(500)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: ${blue};
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const scope = { useState }

const code = `
() => {

  return (
    <>
      <strong>Hello!</strong>
      <p>Code a React component on the left to preview it here.</p>
    </>
  )
}
`




const App = () => {
  return (
    <div style={{marginTop: '10%', marginLeft: '2%', marginRight: '2%'}}>
      <StyledProvider code={code} theme={reactLiveHome} scope={scope} language={'jsx'}>
        <LiveWrapper>
          <StyledEditor>
            <LiveEditor />
          </StyledEditor>
          <StyledPreview />
        </LiveWrapper>
        <StyledError />
      </StyledProvider>
    </div>
  )
}

export default App
