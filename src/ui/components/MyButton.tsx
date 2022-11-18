import React from 'react'

interface Props {
  bgColor?: string;
  textColor?: string;
  title: string;
  rounded?: boolean;
  borderColor?: string;
  onClick?: () => void;
}

export const MyButton = React.memo(({ borderColor, bgColor, textColor, title, rounded, onClick }: Props) => {
  return (
    <div
      style={{ background: bgColor, color: textColor, border: borderColor && `1px solid ${borderColor}` }}
      className={`px-3 py-1 fs-16 fw-700 pointer ${rounded ? 'rounded-8' : 'rounded-4px'}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
})
