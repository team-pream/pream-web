import theme from '@/styles/theme';
import { handle, menu, menuWrapper, wrapper } from './index.styles';
import { Dim, Text } from '@/components';

interface Menu {
  label: string;
  onClick: () => void;
}

interface ActionSheetProps {
  isShow: boolean;
  menus: Menu[];
}

export function ActionSheet({ isShow, menus }: ActionSheetProps) {
  return (
    <>
      <Dim fullScreen />
      <div css={wrapper({ isShow })}>
        <div css={handle} />
        <div css={menuWrapper}>
          {menus.map((item) => (
            <div key={item.label} onClick={item.onClick} css={menu}>
              <Text typo="subtitle2" color={theme.colors.black}>
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
