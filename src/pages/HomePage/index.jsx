import React, { useState } from 'react';

import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu';
import Dashboard from '../../components/Dashboard';
import Widget from '../../components/Widget';
import TrendsArea from '../../components/TrendsArea';
import Tweet from '../../components/Tweet';
import FormNovoTweet from '../../components/FormNovoTweet';

function HomePage() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <>
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
                <Tweet key={index} text={tweet} />
              ))}
            </div>
          </Widget>
        </Dashboard>
      </div>
    </>
  );
}

export default HomePage;
