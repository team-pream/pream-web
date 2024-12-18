import { HTMLAttributes } from 'react';
import { buttonWrapper, secondaryButton, text, wrapper } from './index.styles';
import { Text, Button, Dim } from '@/components';

export type DialogType = 'action' | 'error';
export type SecondaryActionType = 'neutral';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  type?: DialogType;
  title: string;
  description?: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  secondaryActionType?: SecondaryActionType;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export function Dialog({
  type = 'action',
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  secondaryActionType = 'neutral',
  onPrimaryAction,
  onSecondaryAction,
  ...props
}: DialogProps) {
  return (
    <>
      <Dim fullScreen />

      <div {...props} css={wrapper}>
        <div css={text}>
          <Text typo="subtitle1">{title}</Text>
          <Text typo="body2">{description}</Text>
        </div>

        <div css={buttonWrapper}>
          <Button
            shape="box"
            size="xs"
            fullWidth
            status={type === 'error' ? 'error' : 'active'}
            onClick={onPrimaryAction}
          >
            {primaryActionLabel}
          </Button>

          {secondaryActionLabel && (
            <Button
              shape="box"
              size="xs"
              fullWidth
              css={secondaryButton({ secondaryActionType })}
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
