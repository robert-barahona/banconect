interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return (
    <span className='fs-32 fw-700'>
      {title}
    </span>
  )
}
