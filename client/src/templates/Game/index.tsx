import Base from 'templates/Base';

import GameInfo, { GameInfoProps } from 'components/GameInfo';

import * as S from './styles';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import TextContent from 'components/TextContent';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';
import Showcase from 'components/Showcase';
import { Divider } from 'components/Divider';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

export default function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title={upcomingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title={recommendedTitle} games={recommendedGames} />
      </S.Main>
    </Base>
  );
}
