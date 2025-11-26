import { newSpecPage } from '@stencil/core/testing';
import { MantaButton } from '../manta-button';

describe('manta-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MantaButton],
      html: `<manta-button></manta-button>`,
    });
    expect(page.root).toEqualHtml(`
      <manta-button>
        <mock:shadow-root>
          <button></button>
        </mock:shadow-root>
      </manta-button>
    `);
  });
});
