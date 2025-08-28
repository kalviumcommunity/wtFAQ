// eval.test.js
const judgePrompt = require('./judgePrompt');
const fs = require('fs');
const path = require('path');

describe('Evaluation Pipeline', () => {
  const dataset = JSON.parse(fs.readFileSync(path.join(__dirname, 'eval_dataset.json'), 'utf8'));

  dataset.forEach((sample, idx) => {
    it(`should evaluate sample ${idx + 1} correctly`, () => {
      // Simulate model output (for demo, use expected)
      const modelOutput = sample.expected; // Replace with actual model call in real pipeline
      const result = judgePrompt(modelOutput, sample.expected);
      expect(result.score).toBeGreaterThanOrEqual(3); // Expect at least 3/4 for perfect match
    });
  });
});
