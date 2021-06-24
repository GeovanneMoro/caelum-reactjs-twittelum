import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu';
import Dashboard from '../../components/Dashboard';
import Widget from '../../components/Widget';
import TrendsArea from '../../components/TrendsArea';
import Tweet from '../../components/Tweet';
import FormNovoTweet from '../../components/FormNovoTweet';
import TweetService from '../../services/TweetService';

function HomePage() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    TweetService.getTweets().then((listaTweets) => setTweets(listaTweets));
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <>
      <Helmet>
        <title>{`Twittelum - (${tweets.length})`}</title>
      </Helmet>

      <Cabecalho>
        <NavMenu usuario="@omariosouto" />
      </Cabecalho>
      <div className="container">
        <Dashboard>
          <Widget>
            <FormNovoTweet addTweet={addTweet} />
          </Widget>
          <Widget>
            <TrendsArea />
          </Widget>
        </Dashboard>
        <Dashboard posicao="centro">
          <Widget>
            <div className="tweetsArea">
              {tweets.map((tweet, index) => (
                <Tweet
                  key={index}
                  id={tweet._id}
                  text={tweet.conteudo}
                  usuario={tweet.usuario}
                />
              ))}
            </div>
          </Widget>
        </Dashboard>
      </div>
    </>
  );
}

export default HomePage;
