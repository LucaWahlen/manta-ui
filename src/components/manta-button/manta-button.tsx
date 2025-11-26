import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'manta-button',
  styleUrl: 'manta-button.css',
  shadow: true,
})
export class MantaButton {
  /**
   * The text on the button
   */
  @Prop() text: string;

  /**
   * The button variant
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';

  /**
   * The button size
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether the button is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * The button type
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <Host>
        <button 
          type={this.type} 
          disabled={this.disabled}
        >
          <slot>{this.text}</slot>
        </button>
      </Host>
    );
  }
}
