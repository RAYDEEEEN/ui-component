import { Config } from '@stencil/core';
import {angularOutputTarget, ValueAccessorConfig} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ui-component',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@raydeeeen/ui-component',
      directivesProxyFile: ''
    }),
    {
      type: 'dist',
    },
  ],
};
