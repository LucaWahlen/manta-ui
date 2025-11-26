import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { MantaButton } from './manta-button';

const meta = {
  title: 'Components/MantaButton',
  component: MantaButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The button type attribute',
    },
  },
} satisfies Meta<MantaButton>;

export default meta;
type Story = StoryObj<MantaButton>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    text: 'Delete',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};
