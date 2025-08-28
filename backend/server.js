/**
 * System and User Prompts for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project, powered by Gemini. Your role is to answer user questions about the platform, provide guidance, and ensure responses are clear, relevant, and actionable. Always follow the RTFC framework: be Relevant, Transparent, Fair, and Consistent in your answers.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, usage, or troubleshooting. For best results, be specific about your issue or what you want to achieve.
 *
 * RTFC Framework Usage:
 * - Relevant: Prompts are tailored to the wtFAQ use case, focusing on platform-specific queries and guidance.
 * - Transparent: The system prompt clearly states the assistant’s role and expectations.
 * - Fair: The assistant is instructed to provide unbiased, helpful answers to all users.
 * - Consistent: Both prompts set a standard for clear, repeatable interactions, ensuring users know what to expect.
 *
 * This structure ensures that every interaction aligns with the RTFC principles, making the assistant reliable and user-friendly.
 */
require('dotenv').config();

const apiKey = process.env.gemimi_api_key;
const axios = require('axios');

async function getGeminiResponse(prompt) {
  try {
    const response = await axios.post('https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateContent', {
      contents: [{ parts: [{ text: prompt }] }]
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        key: apiKey
      }
    });
    return response.data;
  } catch (error) {
    console.error('Gemini API error:', error.response ? error.response.data : error.message);
    return null;
  }
}

// Example usage
getGeminiResponse('Hello, Gemini!').then(console.log);
