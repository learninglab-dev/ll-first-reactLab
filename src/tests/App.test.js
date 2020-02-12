import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../02_starter/App'

test('it renders and images display', () => {
  const { asFragment, getByAltText } = render(
  <App />
  )
  expect(asFragment()).toMatchSnapshot()
  expect(getByAltText('cute kitten')).toHaveAttribute('src', 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg')
  expect(getByAltText('also cute')).toHaveAttribute('src', 'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg')
})
