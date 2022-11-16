import React from 'react'
import { lightEa, primary } from '../../../../constants'
import { IconButton, SizedBox } from '../../../components'

interface Props {
  onOptions?: () => void;
  onDownload?: () => void;
}

export const DownloadButton = React.memo(({ onOptions, onDownload }: Props) => {
  return (
    <div className='d-flex justify-content-end'>
      <IconButton
        icon="more_horiz"
        bgColor={lightEa}
        onClick={onOptions}
      />
      <SizedBox width={16} />
      <IconButton
        icon="download"
        bgColor={primary}
        onClick={onDownload}
        iconColor="white"
        width={160}
        rightElement={(
          <span className="text-white fw-700 fs-16">
            Descargar
          </span>
        )}
      />
    </div>
  )
})
