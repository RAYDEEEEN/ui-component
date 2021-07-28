import { Component, h, Host, Prop } from '@stencil/core';

export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ui-input',
  styleUrl: './ui-input.css',
  shadow: true
})
export class UiInput {
  @Prop()
  label: string;

  @Prop()
  name: string;

  @Prop()
  placeholder: string;

  render(): unknown {
    return (
      <Host class="">
        <label>{this.label}</label>
        <input
          class="h-10 py-6 rounded-lg leading-6"
          name={this.name}
          placeholder={this.placeholder}
        />
      </Host>
    );
  }
}
