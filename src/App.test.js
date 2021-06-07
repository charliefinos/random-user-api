import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

describe("Random user app", () => {
  it("render user 1 on the screen", () => {
    const { getByText } = render(<App />)

    expect(getByText(/user 1\b/i)).toBeInTheDocument();
  })
})