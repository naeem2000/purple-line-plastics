import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './Button';

const meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: '',
		variant: 'dark',
	},
};
