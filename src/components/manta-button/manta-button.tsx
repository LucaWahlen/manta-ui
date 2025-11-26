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

  render() {
    return (
      <Host>
        <button>{this.text}</button>
      </Host>
    );
  }
}
