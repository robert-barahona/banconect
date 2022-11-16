import React from 'react'

interface Props {
  size: number;
}

export const MyAvatar = React.memo(({ size }: Props) => {
  return (
    <div className='rounded-8 overflow-hidden' >
      <img src="https://i.pravatar.cc/300" alt="avatar" height={size} width={size} style={{ objectFit: 'fill' }} />
    </div>
  )
})
