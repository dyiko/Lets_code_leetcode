//140. Word Break II
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const buildSentences = (
    remainingString,
    wordDict,
    currentSentence = [],
    results = []
  ) => {
    if (!remainingString.length) {
      results.push(currentSentence.join(" "));
      return;
    }

    for (let word of wordDict) {
      if (!remainingString.startsWith(word)) continue;
      currentSentence.push(word);
      buildSentences(
        remainingString.slice(word.length),
        wordDict,
        currentSentence,
        results
      );
      currentSentence.pop();
    }

    return results;
  };

  return buildSentences(s, wordDict);
};