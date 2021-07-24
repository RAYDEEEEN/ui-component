import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const TARGET_ATTRS = {
  CHECKED: 'checked',
  VALUE: 'value',
};

const valueAcessorConfig: ValueAccessorConfig[] = [
  {
    elementSelectors: 'ui-input[type=text]',
    type: 'text',
    event: 'myInput',
    targetAttr: TARGET_ATTRS.VALUE,
  },
  {
    elementSelectors: 'ui-input[type=number]',
    type: 'number',
    event: 'myInput',
    targetAttr: TARGET_ATTRS.VALUE,
  },
];

export const config: Config = {
  namespace: 'ui-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: '@raydeeeen/ui-component',
      directivesProxyFile: '../ui-component-project/projects/ui-component-angular/src/lib/directives/proxies.ts',
      valueAccessorConfigs: valueAcessorConfig,
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
