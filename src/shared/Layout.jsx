import React from 'react'
import tw from 'tailwind-styled-components'

export default function Layout({children}) {
  return (
    <Container>{children}</Container>
  )
}

const Container=tw.div`

`