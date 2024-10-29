import { HTMLAttributes } from 'react';
import { buttonWrapper, dim, secondaryButton, text, wrapper } from './index.styles';
import { Text } from '../text';
import { Button } from '../button';

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
  ...rest
}: DialogProps) {
  return (
    <>
      <div css={dim} />

      <div {...rest} css={wrapper}>
        <div css={text}>
          <Text typo="subtitle1">{title}</Text>
          <Text typo="body2">{description}</Text>
        </div>

        <div css={buttonWrapper}>
          <Button variant="box" size="xs" fullWidth status={type === 'error' ? 'error' : 'active'}>
            {primaryActionLabel}
          </Button>

          {secondaryActionLabel && (
            <Button
              variant="box"
              size="xs"
              fullWidth
              css={secondaryButton({ secondaryActionType })}
            >
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
