import { newSpecPage } from '@stencil/core/testing';
import { MantaButton } from '../manta-button';

describe('manta-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button></manta-button>`,
    });
    expect(page.root).toEqualHtml(`
      <manta-button variant="primary" size="medium">
        <mock:shadow-root>
          <button type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </manta-button>
    `);
  });

  it('renders with text prop', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button text="Click Me"></manta-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.textContent).toContain('Click Me');
  });

  it('renders with secondary variant', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button variant="secondary"></manta-button>`,
    });
    expect(page.root.getAttribute('variant')).toBe('secondary');
  });

  it('renders with large size', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button size="large"></manta-button>`,
    });
    expect(page.root.getAttribute('size')).toBe('large');
  });

  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button disabled></manta-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.hasAttribute('disabled')).toBe(true);
  });
});
