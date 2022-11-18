import React from 'react'

interface Props {
  status: number;
}

export const Status = React.memo(({ status }: Props) => {
  return (
    <span className={`rounded-8 px-2 py-1 ${status === 1 ? 'status-completed' : 'status-pending'}`}>
      {status === 1 ? 'Completado' : 'Pendiente'}
    </span>
  )
})
