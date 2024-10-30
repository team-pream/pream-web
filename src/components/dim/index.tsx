import { wrapper } from './index.styles';

interface DimProps {
  fullScreen?: boolean;
}

export function Dim({ fullScreen = false }: DimProps) {
  return <div css={wrapper({ fullScreen })} />;
}
