import { colors } from '@/styles/colors';

const theme = {
  colors,
  size: {
    maxWidth: '480px',
    appBarHeight: '58px',
    gnbHeight: '76px',
  },
  zIndex: {
    appBar: 10,
    gnb: 10,
    dim: 20,
    bottomSheet: 30,
    modal: 40,
  },
} as const;

export default theme;
