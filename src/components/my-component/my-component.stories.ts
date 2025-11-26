import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { MyComponent } from './my-component';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<MyComponent>;

export default meta;
type Story = StoryObj<MyComponent>;

export const Default: Story = {
  args: {
    first: 'Stencil',
    last: 'JS',
  },
};

export const WithMiddleName: Story = {
  args: {
    first: 'John',
    middle: 'William',
    last: 'Doe',
  },
};
