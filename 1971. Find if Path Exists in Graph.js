//1971. Find if Path Exists in Graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjList = new Array(n).fill(null).map(() => []);
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    // DFS function to traverse the graph
    function dfs(curr, visited) {
        if (curr === destination) {
            return true;
        }
        visited.add(curr);
        for (const neighbor of adjList[curr]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    // Start DFS traversal from the source vertex
    const visited = new Set();
    return dfs(source, visited);
};