import { Story, Meta } from '@storybook/react/types-6-0';

import TextContent, { TextContentProps } from './index';

import textMock from './mock';

export default {
  title: 'Game/TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);
