//1-Design Graph With Shortest Path Calculator 
//- Js Solution
//Graph and Constructor
class Graph {
    constructor(n, edges) {
        this.adj = new Array(n).fill().map(() => []);
        this.n = n;

        for (const edge of edges) {
            this.addEdge(edge);
        }
    }
// Adds an edge to the graph by updating the adjacency list with the edge information.
    addEdge(edge) {
        const [start, end, weight] = edge;
        this.adj[start].push([weight, end]);
    }
//Implementing Dijkstra's algorithm 
    shortestPath(node1, node2) {
        const pq = new MinHeap();
        const dist = new Array(this.n).fill(Number.MAX_SAFE_INTEGER);
        dist[node1] = 0;
        pq.push([0, node1]);

        while (!pq.isEmpty()) {
            const [d, i] = pq.pop();

            if (i === node2) {
                this.addEdge([node1, node2, d]);
                return d;
            }

            if (d > dist[i]) continue;

            for (const [w, j] of this.adj[i]) {
                const d2 = d + w;
                if (d2 < dist[j]) {
                    dist[j] = d2;
                    pq.push([d2, j]);
                }
            }
        }

        return -1;
    }
}
//min-heap to maintain the priority queue functionality.
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) return null;

        this.swap(0, this.heap.length - 1);
        const popped = this.heap.pop();
        this.heapifyDown();

        return popped;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let current = this.heap.length - 1;
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (this.heap[current][0] < this.heap[parent][0]) {
                this.swap(current, parent);
                current = parent;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let current = 0;
        while (true) {
            const leftChild = 2 * current + 1;
            const rightChild = 2 * current + 2;
            let smallest = current;

            if (leftChild < this.heap.length && this.heap[leftChild][0] < this.heap[smallest][0]) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild][0] < this.heap[smallest][0]) {
                smallest = rightChild;
            }

            if (smallest !== current) {
                this.swap(current, smallest);
                current = smallest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

