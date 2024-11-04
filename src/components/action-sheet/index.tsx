import theme from '@/styles/theme';
import { handle, menu, menuWrapper, wrapper } from './index.styles';
import { Dim, Text } from '@/components';

interface Menu {
  label: string;
  value?: string | number;
  onClick?: () => void;
}

interface ActionSheetProps {
  menus: Menu[];
  onClickItem?: (value: string | number) => void;
  onClose: () => void;
}

export function ActionSheet({ menus, onClickItem, onClose }: ActionSheetProps) {
  return (
    <>
      <Dim fullScreen onClick={onClose} />
      <div css={wrapper}>
        <div css={handle} />
        <div css={menuWrapper}>
          {menus.map((item) => (
            <div
              key={item.label}
              onClick={onClickItem ? () => onClickItem(item.value ?? item.label) : item.onClick}
              css={menu}
            >
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
