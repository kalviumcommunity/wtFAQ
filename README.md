# wtFAQ ⚖️  

Your AI-powered legal FAQ bot — because sometimes the law makes you say *wtf?*  

---

## Overview  

wtFAQ is a smart legal FAQ assistant that allows users to ask legal questions in plain language.  
By leveraging **Retrieval-Augmented Generation (RAG)**, it retrieves relevant sections from a curated dataset of public legal documents (e.g., labor laws, tenancy laws, consumer rights) and generates a **clear, user-friendly explanation**.  

This tool empowers citizens to better understand their rights and obligations without needing to parse dense legal text.  

---

## Features  

**Natural Language Legal Queries:** Ask questions like *"Can my landlord raise rent without notice?"*  
**Retrieval-Augmented Generation (RAG):** Combines document retrieval with AI reasoning to provide grounded answers.  
**Plain Language Explanations:** Converts legal jargon into accessible, simplified explanations.  
**Citations & References:** Provides references to the original laws or clauses used in the answer.  
**Multi-Document Support:** Works across multiple legal texts such as tenancy acts, labor laws, and consumer rights acts.  
**Customizable Knowledge Base:** Easily expand with new jurisdictions, documents, or regulations.  

---

## Key Concepts  

### System and User Prompt  

**System prompt:** Defines wtFAQ’s role as a legal guide, ensuring outputs are concise, accurate, and accessible.  
**User prompt:** The legal question entered by the citizen (e.g., *"Is it legal to fire someone without notice?"*).  

### Zero-Shot Prompting  
wtFAQ can answer queries without prior examples, relying on its retrieval system and pre-trained legal knowledge.  

### One-Shot Prompting  
Providing a single example (e.g., a Q&A on rent laws) to guide the output format for consistency.  

### Multi-Shot Prompting  
Supplying multiple Q&A examples across different laws to improve reliability and coverage.  

### Dynamic Prompting  
Adapting prompts dynamically based on retrieved legal text and user context, ensuring accurate and personalized answers.  

### Chain of Thought Prompting  
Encouraging the AI to reason step by step — for instance, citing the law first, then summarizing it, then explaining its implications.  

### Evaluation Dataset and Testing Framework  
wtFAQ includes a dataset of frequently asked legal questions to benchmark performance. Automated testing ensures retrieval accuracy and clarity of explanations.  

### Tokens and Tokenization  
**Tokens:** Small chunks of text (words/subwords) used by the LLM.  
**Tokenization:** Breaking user queries and legal documents into tokens for efficient retrieval and generation.  

---

## Tech Stack  

### Backend Server (JavaScript)  

The backend server is built with **Node.js and Express**. It demonstrates the use of **system and user prompts** with the RTFC framework for legal Q&A.  

### RTFC Framework in Prompts  

- **Role:** The system prompt defines wtFAQ’s role as a legal guide.  
- **Task:** Retrieve relevant clauses and explain them simply.  
- **Format:** Structured, concise responses with citations.  
- **Constraints:** Ensure legal accuracy and clarify that the bot is not a substitute for professional legal advice.  

### Example Prompts  

**System Prompt:**  
You are wtFAQ, an AI-powered legal assistant.  
Role: Guide citizens in understanding their rights and obligations.  
Task: Retrieve relevant legal clauses and explain them in plain language.  
Format: Provide structured answers with citations.  
Constraints: Ensure clarity, accuracy, and a disclaimer that this is not legal advice.  

**User Prompt:**  
*"Can my landlord raise rent without notice?"*  

---

## How to Run  

1. Install dependencies:  

   ```bash
   npm install express
