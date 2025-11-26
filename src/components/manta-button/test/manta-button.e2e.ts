import { newE2EPage } from '@stencil/core/testing';

describe('manta-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<manta-button></manta-button>');

    const element = await page.find('manta-button');
    expect(element).toHaveClass('hydrated');
  });
});
