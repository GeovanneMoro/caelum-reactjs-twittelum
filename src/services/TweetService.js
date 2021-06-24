import { getAuthToken, TWITTELUM_API } from '../utils';

class TweetService {
  static async getTweets() {
    const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error ao retornar a lista de tweets do servidor!');
    }

    const tweets = await response.json();
    return tweets;
  }
}

export default TweetService;
