#506. Relative Ranks
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        score_map = {score[i]: i for i in range(len(score))}
        score.sort(reverse=True)
        result = ["" for _ in range(len(score))]
        for i in range(len(score)):
            if i == 0:
                result[score_map[score[i]]] = "Gold Medal"
            elif i == 1:
                result[score_map[score[i]]] = "Silver Medal"
            elif i == 2:
                result[score_map[score[i]]] = "Bronze Medal"
            else:
                result[score_map[score[i]]] = str(i + 1)
        return result  