/**
 * Chain of Thought Prompt Example for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project. When answering user questions, think step-by-step and explain your reasoning process clearly. Break down complex queries into logical steps and show how you arrive at your answer.
 *
 * Example:
 * Q: How do I recover access if I forgot both my wtFAQ password and email?
 * A: Let's break this down:
 * 1. First, try to recover your email using any linked phone number or alternate email.
 * 2. Once you have access to your email, use the "Forgot Password" option on wtFAQ to reset your password.
 * 3. If you can't recover your email, contact wtFAQ support with proof of identity for manual account recovery.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, or troubleshooting. The assistant will respond by explaining its reasoning step-by-step.
 *
 * Chain of Thought Prompting Explanation:
 * Chain of thought prompting is a technique where the AI is encouraged to reason through a problem step-by-step, making its thought process explicit. In this prompt, the assistant demonstrates logical reasoning and transparency, helping users understand how answers are derived.
 */
/**
 * Dynamic Prompt Example for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project. Answer user questions about the platform by adapting your responses based on the user's context, preferences, and previous interactions. Use dynamic information such as the user's current session, recent activity, or specific needs to personalize your answers.
 *
 * Example:
 * If a user recently asked about password reset, prioritize security tips and follow-up steps. If a user is a new member, provide onboarding guidance and helpful resources.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, or troubleshooting. The assistant will tailor its response dynamically to your situation.
 *
 * Dynamic Prompting Explanation:
 * Dynamic prompting is a technique where the AI adapts its prompt and responses in real-time based on changing user context or input. In this prompt, the assistant uses session data, user history, or preferences to generate more relevant and personalized answers, improving user experience and engagement.
 */
/**
 * Multi-Shot Prompt Example for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project. Answer user questions about the platform using your general knowledge and reasoning abilities. Use the following examples to guide your response:
 *
 * Example 1:
 * Q: How do I reset my wtFAQ password?
 * A: To reset your wtFAQ password, go to the login page and click on "Forgot Password." Follow the instructions sent to your registered email to complete the reset process.
 *
 * Example 2:
 * Q: How do I change my email address in wtFAQ?
 * A: To change your email address, go to your account settings, select "Edit Profile," and update your email information. Save the changes to apply them.
 *
 * Example 3:
 * Q: How do I delete my wtFAQ account?
 * A: To delete your account, visit the account settings page, scroll down to "Delete Account," and follow the confirmation steps.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, or troubleshooting. The assistant will use the provided examples to inform its response.
 *
 * Multi-Shot Prompting Explanation:
 * Multi-shot prompting is a technique where the AI is given several examples to help it understand the task. In this prompt, the assistant uses multiple question and answer pairs to guide its reasoning and provide more accurate responses to a wider range of queries.
 */
/**
 * One-Shot Prompt Example for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project. Answer user questions about the platform using your general knowledge and reasoning abilities. Use the following example to guide your response:
 *
 * Example:
 * Q: How do I reset my wtFAQ password?
 * A: To reset your wtFAQ password, go to the login page and click on "Forgot Password." Follow the instructions sent to your registered email to complete the reset process.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, or troubleshooting. The assistant will use the provided example to inform its response.
 *
 * One-Shot Prompting Explanation:
 * One-shot prompting is a technique where the AI is given a single example to help it understand the task. In this prompt, the assistant uses the example question and answer to guide its reasoning and provide more accurate responses to similar queries.
 */
/**
 * Zero-Shot Prompt Example for wtFAQ (Gemini Integration)
 *
 * System Prompt:
 * You are an AI assistant for the wtFAQ project. Answer user questions about the platform using your general knowledge and reasoning abilities, even if you have not seen similar examples before. Do not rely on prior examples; instead, infer the best response from the information provided in the user's query.
 *
 * User Prompt:
 * Ask any question about wtFAQ, its features, or troubleshooting. The assistant will respond based on its understanding, without needing specific examples.
 *
 * Zero-Shot Prompting Explanation:
 * Zero-shot prompting is a technique where the AI is asked to perform a task without being given any prior examples. In this prompt, the assistant is instructed to answer questions using its general capabilities, demonstrating zero-shot reasoning. This allows the AI to handle new, unseen queries effectively.
 */
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
