import React from 'react'

interface Props {
  iconColor?: string;
  bgColor?: string;
  flexGrow?: number;
  icon: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  width?: number;
  borderColor?: string;
  align?: string;
  height?: number;
  onClick?: () => void;
}

export const IconButton = React.memo(({ align = 'center', icon, iconColor, height, bgColor, flexGrow, leftElement, rightElement, borderColor, width, onClick }: Props) => {
  return (
    <div
      style={{ background: bgColor, flexGrow, height: flexGrow ? undefined : height, width, border: borderColor && `1px solid ${borderColor}` }}
      className={bgColor || borderColor ? `pointer d-flex align-items-center justify-content-${align} rounded-8 px-2` : ''}>
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