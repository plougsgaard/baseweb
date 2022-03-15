/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import { mergeOverride, toObjectOverride } from '../helpers/overrides.js';

import Icon from './icon.js';
import type { IconPropsT } from './types.js';

function Hide(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const { title = 'Hide', size, color, overrides = {}, ...restProps } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      component: theme.icons && theme.icons.Hide ? theme.icons.Hide : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
  );
  return (
    // $FlowExpectedError[cannot-spread-inexact]
    <Icon
      viewBox="0 0 20 20"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{ Svg: SvgOverride }}
      {...restProps}
    >
      <path d="M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z" />
    </Icon>
  );
}

export default React.forwardRef<IconPropsT, mixed>(Hide);
