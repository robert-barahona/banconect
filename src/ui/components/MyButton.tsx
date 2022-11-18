import React from 'react'

interface Props {
  bgColor?: string;
  textColor?: string;
  title: string;
  rounded?: boolean;
  onClick?: () => void;
}

export const MyButton = React.memo(({ bgColor, textColor, title, rounded, onClick }: Props) => {
  return (
    <div
      style={{ background: bgColor, color: textColor }}
      className={`${rounded ? 'rounded-8' : 'rounded-4px'} px-3 py-1 fs-16 fw-700 pointer`}
      onClick={onClick}
    >
      {title}
    </div>
  )
})
