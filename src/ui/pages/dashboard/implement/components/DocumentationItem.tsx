import React from 'react'

interface Props {
  title: string;
  content: string;
}

export const DocumentationItem = React.memo(({ title, content }: Props) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <span className="fw-700 fs-18">
          {title}
        </span>
      </div>
      <div className="col-lg-6 fs-12">
        {content}
      </div>
    </div>
  )
})
