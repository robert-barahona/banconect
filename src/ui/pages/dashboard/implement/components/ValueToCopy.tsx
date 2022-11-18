import React from 'react'
import { primary } from '../../../../../theme';
import { IconButton, SizedBox } from '../../../../components';

interface Props {
  title: string;
  value: string;
}

export const ValueToCopy = React.memo(({ title, value }: Props) => {
  return (
    <div>
      <span className='fs-12 fw-400'>
        {title}
      </span>
      <SizedBox height={4} />
      <div className='d-flex align-items-center bg-white rounded-8 p-2'>
        <span className='flex-1 fw-600'>
          {value}
        </span>
        <IconButton
          icon='content_copy'
          height={22}
          iconColor={primary}
        />
      </div>
    </div>
  )
})
