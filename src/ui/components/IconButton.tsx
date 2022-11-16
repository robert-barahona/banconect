import React from 'react'

interface Props {
  icon: string;
  onClick: () => void;
}

export const IconButton = React.memo(({ icon, onClick }: Props) => {
  return (
    <span className={'pointer material-symbols-outlined'} onClick={onClick}>
      {icon}
    </span>
  )
})
