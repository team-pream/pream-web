import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';

const theme = {
  colors,
  size: {
    maxWidth: '480px',
    appBarHeight: '58px',
    gnbHeight: '76px',
  },
  zIndex: {
    overlay: 5,
    appBar: 10,
    gnb: 10,
    fab: 10,
    dim: 20,
    actionSheet: 30,
    bottomSheet: 30,
    dialog: 40,
  },
  typo: { ...typography },
} as const;

export default theme;
