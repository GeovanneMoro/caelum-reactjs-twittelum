import { useState } from 'react';

const FormNovoTweet = ({ addTweet }) => {
  const [novoTweet, setNovoTweet] = useState('');
  const isDisabled = novoTweet.trim().length === 0 || novoTweet.length > 140;

  const handleSubmit = (event) => {
    event.preventDefault();
    addTweet(novoTweet);
    setNovoTweet('');
  };

  return (
    <form className="novoTweet" onSubmit={handleSubmit}>
      <div className="novoTweet__editorArea">
        <span
          className={`novoTweet__status ${
            novoTweet.length > 140 ? 'novoTweet__status--invalido' : ''
          }`}
        >
          {novoTweet.length}/140
        </span>
        <textarea
          className="novoTweet__editor"
          placeholder="O que está acontecendo?"
          value={novoTweet}
          onChange={(e) => setNovoTweet(e.target.value)}
        ></textarea>
      </div>
      <button disabled={isDisabled} type="submit" className="novoTweet__envia">
        Tweetar
      </button>
    </form>
  );
};

export default FormNovoTweet;
