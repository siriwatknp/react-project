import React from 'react'

const Centered = ({ children }) => (
  <div
    className="center-wrapper"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      className="center-child"
      style={{
        position: 'relative',
        minWidth: 250,
      }}
    >
      {children}
    </div>
  </div>
)

export default (story) => (
  <Centered>
    {story()}
  </Centered>
)
