import React from 'react'

const Text = ({ children }: { children: string }) => {
  const text = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })
  return <div>{text}</div>
}

export default Text
