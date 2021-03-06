import Home, { HomeTemplateProps } from 'templates/Home';
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers';
import { initializeApollo } from 'utils/apollo';
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { GetStaticProps } from 'next';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10); // "2021-12-15"

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache', //garantir sempre dado novo na geração do estático
  });

  return {
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
    },
    revalidate: 10,
  };
};
