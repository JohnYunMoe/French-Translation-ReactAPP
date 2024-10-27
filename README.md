# Simple French Practice App

I'm learning French right now and with all of my other classes, usually I just don't have the time to learn more French words so I wanted to make something that would help me quickly learn a new word everyday. This simple React app generates a random French word using the RandomWord API and then uses the Language Translation API(https://apilayer.com/marketplace/language_translation-api#documentation-tab) from API Layer to translate it into English. I wanted to also include usage and definition but the API does not provide this information so I am just sticking to simple Translation. 
####(NOTE: The API I am using is a bit finicky and does not know a lot of French words so if the app returns "Translation Not Found", please keep trying and eventually it will find a word it can translate. I wanted to use Google Translate API or other Translation APIs but they all asked for Card Details so I decided to use this one because it is the only one that's free)

## Features

- Generates random French words
- Translates the generated words to English
- User-friendly interface

## Technologies Used

- React.js
- Fetch API
- CSS for styling

## Credits for AI
- Copilot for random autocomplete here and there
- ChatGPT to generate code for styling and some parts of the API calls(specified in the source code)(search for keyword "AI")

## Setup Instructions

#### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

#### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/french-word-translator.git
2. **Navigate into the project directory:**
    ```bash 
    cd french-word-translator
3. **Create a .env file in the root directory and add your API key:**
    ```bash 
    REACT_APP_TRANSLATE_API_KEY=your_api_key_here
4. **Start the development server:**
    ```bash 
    npm start
5. **Open your browser and navigate to http://localhost:3000 to see the application in action.**

6. **Note: There are no extra dependencies/packages to install**



