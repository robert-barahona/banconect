import { SizedBox } from "../../../components";

interface Props {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: Props) => {
  return (
    <div className="d-flex flex-column">
      <span className='fs-32 fw-700'>
        {title}
      </span>
      {
        description && (
          <>
            <SizedBox height={8} />
            <span className="fw-500">
              {description}
            </span>
          </>
        )
      }
    </div>
  )
}
