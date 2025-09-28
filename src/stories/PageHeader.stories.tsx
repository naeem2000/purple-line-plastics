import type { Meta, StoryObj } from '@storybook/nextjs';

import PageHeader from './PageHeader';

const meta = {
	component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { title: '', subHeading: '' },
};
