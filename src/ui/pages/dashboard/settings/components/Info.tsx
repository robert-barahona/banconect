import React from 'react'

interface Props {
  title: string;
  info: string;
}

export const Info = React.memo(({ title, info }: Props) => {
  return (
    <div className='d-flex flex-column'>
      <span className='fs-12'>
        {title}
      </span>
      <span className='fs-14 fw-600'>
        {info}
      </span>
    </div>
  )
})
