import React from 'react'
import { SizedBox } from './SizedBox';

interface Props {
  iconColor?: string;
  bgColor?: string;
  flexGrow?: number;
  icon: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  width?: number;
  onClick?: () => void;
}

export const IconButton = React.memo(({ icon, iconColor, bgColor, flexGrow, leftElement, rightElement, width, onClick }: Props) => {
  return (
    <div
      style={{ background: bgColor, flexGrow, height: !flexGrow ? 40 : undefined, width, }}
      className={bgColor && 'pointer d-flex align-items-center justify-content-center rounded-8 px-2'}>
      {leftElement && (
        <div className='pe-2'>
          {leftElement}
        </div>
      )}
      <span style={{ color: iconColor }} className='pointer material-symbols-outlined' onClick={onClick}>
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
