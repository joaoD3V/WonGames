import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextData } from 'hooks/useCart';

import GameInfo, { GameInfoProps } from './index';

import mockGame from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGame,
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
