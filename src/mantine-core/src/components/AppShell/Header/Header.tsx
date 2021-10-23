import React from 'react';
import { DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import useStyles, { HeaderPosition } from './Header.styles';

export interface HeaderProps extends DefaultProps {
  children: React.ReactNode;
  height: number | string;
  padding?: MantineNumberSize;
  fixed?: boolean;
  position?: HeaderPosition;
}

export function Header({
  children,
  className,
  style,
  height,
  padding = 0,
  fixed = false,
  position = { top: 0, left: 0, right: 0 },
  ...others
}: HeaderProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const { classes, cx } = useStyles({ height, padding, fixed, position });

  return (
    <nav className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      {children}
    </nav>
  );
}
