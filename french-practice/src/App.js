import { useState } from 'react';
import './App.css'; 
// import api key from .env file
const API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

const App = () => {
  const [frenchWord, setFrenchWord] = useState('');
  const [englishTranslation, setEnglishTranslation] = useState('');

  // Fetch a random French word
  const getFrenchWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?lang=fr');
      const data = await response.json();
      const word = data[0];
      setFrenchWord(word);

      // Translate the fetched French word to English
      const translation = await translateText(word); // Assuming 'en' is the target language
      setEnglishTranslation(translation);
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  // Translate text to English using the Translation API
  const translateText = async (text) => {
    // This part I mostly copied from the API documentation
    const myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);
    // I added the target language to the body of the request
    const raw = text; 
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw,
    };
    // added a try and catch block to make sure that the error output is shown on screen and not just in the console

    // AI: I tried to make CHATGPT generate the try and catch block to output the response ////////////////////////////////////////// 
    try {
      // wait for the response from API
      const response = await fetch("https://api.apilayer.com/language_translation/translate?target=en", requestOptions);
      // wait for the response to be converted to JSON
      const result = await response.json();
      // return just the value of Translation from the result json
      return result.translations[0].translation|| 'Translation not found';
    } 
    //catch errors if response is not successful
    catch (error) 
    {
      console.log('error', error);
      return 'Translation not found';
    }
  };
  

  return (
    // basic styling for the app, used from app.css stylesheet
    <div className="container">
      <h1 className="title">French Word Generator</h1>
      <button onClick={getFrenchWord} className="button">
        Generate Word
      </button>
      {frenchWord && (
        <div className="wordDisplay">
          <p className="wordText"><strong>French Word:</strong> {frenchWord}</p>
          {englishTranslation && (
            <p className="wordText"><strong>English Translation:</strong> {englishTranslation}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
