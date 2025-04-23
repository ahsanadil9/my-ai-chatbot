
// ------------------  Llama 4 Model  ----------------------

import { Groq } from 'groq-sdk';
import dotenv from "dotenv"

dotenv.config();
const groq = new Groq({
    apiKey: process.env.OPEN_API_KEY
});


async function main() {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            { role: 'user', content: 'What is the Capital of Pakistan?' }
        ],
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "temperature": 1,
        "max_completion_tokens": 1024,
        "top_p": 1,
        "stream": true,
        "stop": null
    });

    let fullResponse = '';

    for await (const chunk of chatCompletion) {
        const chunkContent = process.stdout.write(chunk?.choices[0]?.delta?.content || '');
        if (typeof chunkContent === 'string' && chunkContent && !chunkContent.includes("true")) {
            fullResponse += chunkContent
        }
    }

    console.log(fullResponse)
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
