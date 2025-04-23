
// ------------------  Llama 4 Model  ----------------------
import groq from "./config/groq.js";
import readlineSync from "readline-sync";
import colors from "colors"

async function main() {

    console.log(colors.bold.green("Hey it's Ahsan Adil. Welcome to the chatbot program!"))
    console.log(colors.bold.green("You can start chatting or type 'exit' to exit the chatbot."))

    const chatHistory = []

    while (true) {
        const userInput = readlineSync.question('\n' + colors.bold.yellow("You: "))
        try {
            const messages = chatHistory.map(([role, content]) => ({ role, content }))

            messages.push({ role: 'user', content: userInput })

            const chatCompletion = await groq.chat.completions.create({
                "messages": messages,
                "model": "meta-llama/llama-4-scout-17b-16e-instruct",
                "temperature": 1,
                "max_completion_tokens": 1024,
                "top_p": 1,
                "stream": true,
                "stop": null
            });

            let fullResponse = '';
            console.log(colors.green('Bot: ') + fullResponse)

            for await (const chunk of chatCompletion) {
                const chunkContent = process.stdout.write(chunk?.choices[0]?.delta?.content || '');
                if (typeof chunkContent === 'string' && chunkContent && !chunkContent.includes("true")) {
                    fullResponse += chunkContent
                }
            }

            if (userInput.toLowerCase() === "exit") {
                console.log(fullResponse)
                return
            }
            chatHistory.push(['user', userInput])
            chatHistory.push(['assistant', fullResponse])

        } catch (error) {
            console.error(colors.red(error))
        }
    }




}

main();


// ------------------  OpenAI ChatGPT 3.5  ----------------------

// import { OpenAI } from "openai";
// import dotenv from "dotenv"

// dotenv.config();

// const openai = new OpenAI({
//     apiKey: process.env.OPEN_API_KEY
// })
// // console.log(openai)
// async function main() {
//     const chatCompletion = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             { role: 'user', content: 'What is capital of Pakistan?' }
//         ]
//     })
//     console.log(chatCompletion)
// }
// main()


// ------------------  DeepSeek Model  ----------------------

// import OpenAI from "openai"
// import dotenv from "dotenv"

// dotenv.config();

// const openai = new OpenAI({
//     baseURL: 'https://api.deepseek.com',
//     apiKey: process.env.OPEN_API_KEY
// })
// console.log(process.env.OPEN_API_KEY);
// // console.log(openai)
// async function main() {
//     try {
//         const chatCompletion = await openai.chat.completions.create({
//             model: 'deepseek-chat',
//             messages: [
//                 { role: 'system', content: 'What is capital of Pakistan?' }
//             ]
//         })
//         // console.log("deep seek: ", chatCompletion)
//         console.log(chatCompletion.choices[0].message.content);

//     } catch (error) {
//         console.error("error: ", error)
//     }
// }
// main()
