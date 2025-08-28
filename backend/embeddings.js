const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.gemimi_api_key;

async function getEmbeddings(text) {
  try {
    const response = await axios.post('https://generativelanguage.googleapis.com/v1beta2/models/embedding-001:embedContent', {
      content: { parts: [{ text }] }
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
    console.error('Embeddings API error:', error.response ? error.response.data : error.message);
    return null;
  }
}

// Example usage
getEmbeddings('What is wtFAQ?').then(console.log);

/**
 * What are embeddings in LLMs?
 * Embeddings are numerical vector representations of text, capturing semantic meaning and relationships. They are computed by LLMs to enable tasks like search, clustering, recommendation, and semantic similarity. Embeddings make it possible to compare and analyze text in a machine-readable way.
 */
