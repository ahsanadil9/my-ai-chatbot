
# Chatbot Program with Llama 4 & Groq

Welcome to the **Chatbot Program**! This project demonstrates an AI-powered chatbot that uses the **Llama 4** model for conversation and **Groq** for interacting with AI. The chatbot is built using JavaScript, and it allows users to chat interactively in real-time.

### Key Features:
- **Interactive Chat**: Users can chat with the AI model and receive real-time responses.
- **Streamed Responses**: The bot streams responses as it generates them, providing a more dynamic user experience.
- **Chat History**: The chatbot remembers previous interactions, making conversations more meaningful.
- **Exit Command**: Type 'exit' anytime to end the conversation.
- **Error Handling**: The program includes error handling for smooth user experience.

---

## Requirements

- **Node.js**: Make sure you have Node.js installed to run this application.
- **API Key**: You'll need an API key for Groq and the Llama 4 model.

### Dependencies:
- `groq-sdk`: For interacting with the Groq API.
- `readline-sync`: For handling user input.
- `colors`: For adding colored text to the console.
- `dotenv`: For managing environment variables.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/chatbot-program.git
   cd chatbot-program
   ```

2. **Install dependencies**:
   Run the following command to install required dependencies:
   ```bash
   npm install
   ```

3. **Set up the environment**:
   Create a `.env` file in the root of your project and add your API keys:
   ```env
   OPEN_API_KEY=your_api_key_here
   ```

4. **Start the application**:
   Run the following command to start the chatbot:
   ```bash
   npm start
   ```

   You will see a welcome message, and you can start chatting with the bot. Type `exit` to stop the conversation.

---

## How It Works

The chatbot uses the **Llama 4 model** to generate responses to user input. It interacts with the model in a streaming manner, meaning that the response is sent in chunks as it’s being generated.

1. **User Input**: The user enters their message through the command line interface.
2. **AI Model Interaction**: The message is sent to the Groq API, which processes it using the Llama 4 model.
3. **Streamed Response**: The bot streams the response back to the user, showing the content in real-time.
4. **Chat History**: The chat history is stored and used to make the conversation more meaningful.

---

## Example

### Chatbot Interaction

```
Hey it's Ahsan Adil. Welcome to the chatbot program!
You can start chatting or type 'exit' to exit the chatbot.

You: What is the capital of Pakistan?
Bot: The capital of Pakistan is Islamabad.
```

---

## Contributing

1. **Fork the repository**: Click the "Fork" button at the top-right of this page to create a copy of the repository on your own GitHub account.
2. **Clone the fork**: 
   ```bash
   git clone https://github.com/yourusername/chatbot-program.git
   cd chatbot-program
   ```
3. **Make changes**: Create a branch, make your changes, and commit them:
   ```bash
   git checkout -b feature-name
   git add .
   git commit -m "Your message"
   ```
4. **Push changes**:
   ```bash
   git push origin feature-name
   ```
5. **Create a pull request**: Go to your repository on GitHub and click "Compare & Pull Request."

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or contributions, feel free to reach out to **Ahsan Adil** at [your-email@example.com].

