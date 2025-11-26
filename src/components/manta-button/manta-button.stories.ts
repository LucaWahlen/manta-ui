import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { MantaButton } from './manta-button';

const meta = {
  title: 'Components/MantaButton',
  component: MantaButton,
  tags: ['autodocs'],
} satisfies Meta<MantaButton>;

export default meta;
type Story = StoryObj<MantaButton>;

export const Default: Story = {
  args: {
    text: 'Click Me',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Submit',
  },
};
