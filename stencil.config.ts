import {
  angularOutputTarget,
  ValueAccessorConfig
} from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwind from 'tailwindcss';
import { TailwindConfig } from 'tailwindcss/tailwind-config';

const TARGET_ATTRS = {
  CHECKED: 'checked',
  VALUE: 'value'
};

const valueAcessorConfig: ValueAccessorConfig[] = [
  {
    elementSelectors: 'ui-input[type=text]',
    type: 'text',
    event: 'myInput',
    targetAttr: TARGET_ATTRS.VALUE
  },
  {
    elementSelectors: 'ui-input[type=number]',
    type: 'number',
    event: 'myInput',
    targetAttr: TARGET_ATTRS.VALUE
  }
];

const tailwindConfig: TailwindConfig = {
  darkMode: false, // or 'media' or 'class'
  plugins: []
  // purge: ['./src/**/*.html', './src/**/*.js']
} as TailwindConfig;

export const config: Config = {
  namespace: 'ui-component',
  globalStyle: './src/styles/style.css',
  devServer: {
    reloadStrategy: 'pageReload'
  },
  plugins: [
    postcss({
      plugins: [tailwind(tailwindConfig)]
    })
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@raydeeeen/ui-component',
      directivesProxyFile:
        '../ui-component-angular/projects/ui-component-angular/src/lib/directives/proxies.ts',
      valueAccessorConfigs: valueAcessorConfig
    }),
    reactOutputTarget({
      componentCorePackage: '@raydeeeen/ui-component',
      proxiesFile: '../ui-component-react/src/components.ts',
      includeDefineCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
