var minDistance = function(word1, word2) {
  if (!word1) {
    return word2.length;
  }
  if (!word2) {
    return word1.length;
  }
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = Array.from({length: len1 + 1}).map((item) => Array.from({length: len2 + 1}, () => 0));
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
      }
    }
  }
  return dp[len1][len2];
};