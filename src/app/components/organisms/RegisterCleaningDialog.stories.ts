import type { Meta, StoryObj } from '@storybook/react';
import RegisterCleaningDialog from './RegisterCleaningDialog';

const meta = {
    title: 'components/organisms/RegisterCleaningDialog',
    component: RegisterCleaningDialog,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
} satisfies Meta<typeof RegisterCleaningDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};
