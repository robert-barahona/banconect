import React from 'react'
import { SizedBox } from './SizedBox';

interface Props {
  bgColor?: string;
  flexGrow?: number;
  icon: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onClick: () => void;
}

export const IconButton = React.memo(({ icon, bgColor, flexGrow, leftElement, rightElement, onClick }: Props) => {
  return (
    <div className={bgColor && 'pointer d-flex align-items-center justify-content-center rounded-8 px-2'} style={{ background: bgColor, flexGrow }}>
      {leftElement && (
        <div className='pe-2'>
          {leftElement}
        </div>
      )}
      <span className='pointer material-symbols-outlined' onClick={onClick}>
        {icon}
      </span>
      {rightElement && (
        <div className='ps-2'>
          {rightElement}
        </div>
      )}
    </div>
  )
})
