import { Container } from 'components/Container';
import Heading from 'components/Heading';
import { Divider } from 'components/Divider';
import Base from 'templates/Base';
import Showcase from 'components/Showcase';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import CartList, { CartListProps } from 'components/CartList';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';

import * as S from './styles';

export type CartProps = {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

export default function Cart({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards,
}: CartProps) {
  function handlePayment() {
    return true;
  }

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
}
