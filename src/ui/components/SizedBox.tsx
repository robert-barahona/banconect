interface Props {
  width?: number;
  height?: number;
}

export const SizedBox = ({ width, height }: Props) => {
  return (
    <div style={{ width, height }} />
  )
}
