import type { Meta, StoryObj } from '@storybook/react';
import DayOfWeekSelector from './DayOfWeekSelector';

const meta = {
  title: 'components/atoms/DayOfWeekSelector',
  component: DayOfWeekSelector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DayOfWeekSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
