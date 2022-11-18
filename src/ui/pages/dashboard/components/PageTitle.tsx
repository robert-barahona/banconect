import { DownloadButton } from ".";
import { SizedBox } from "../../../components";

interface Props {
  title: string;
  description?: string;
  showDownloadButton?: boolean;
}

export const PageTitle = ({ title, description, showDownloadButton = false }: Props) => {
  return (
    <>
      <div className="row align-items-end">
        <div className={`col-12 ${showDownloadButton && 'col-md-6'}`}>
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
        {
          showDownloadButton && (
            <div className="col-12 col-md-6">
              <DownloadButton />
            </div>
          )
        }
      </div>
      <SizedBox height={24} />
    </>
  )
}
