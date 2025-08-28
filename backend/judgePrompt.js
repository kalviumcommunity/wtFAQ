// judgePrompt.js
/**
 * Judge Prompt for wtFAQ Evaluation Pipeline
 *
 * Parameters considered:
 * - Relevance: Does the model output address the user's question?
 * - Accuracy: Is the information provided correct and complete?
 * - Clarity: Is the response easy to understand?
 * - Helpfulness: Does the answer guide the user to a solution?
 *
 * The judge prompt compares the model output with the expected result and scores the response based on these parameters.
 */

function judgePrompt(modelOutput, expected) {
  let score = 0;
  let feedback = [];

  // Relevance
  if (modelOutput.toLowerCase().includes(expected.split(' ')[0].toLowerCase())) {
    score += 1;
    feedback.push('Relevant');
  } else {
    feedback.push('Not relevant');
  }

  // Accuracy
  if (modelOutput.trim().toLowerCase() === expected.trim().toLowerCase()) {
    score += 1;
    feedback.push('Accurate');
  } else {
    feedback.push('Not accurate');
  }

  // Clarity
  if (modelOutput.length > 20) {
    score += 1;
    feedback.push('Clear');
  } else {
    feedback.push('Not clear');
  }

  // Helpfulness
  if (modelOutput.toLowerCase().includes('help') || modelOutput.toLowerCase().includes('support') || modelOutput.toLowerCase().includes('reset')) {
    score += 1;
    feedback.push('Helpful');
  } else {
    feedback.push('Not helpful');
  }

  return { score, feedback };
}

module.exports = judgePrompt;
