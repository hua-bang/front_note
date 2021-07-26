class Graph {
  constructor(v) {
    this.v = v;
    this.initAdj();
  }

  initAdj() {
    this.adj = new Array(this.v);
    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(s, t) {
    this.adj[s].push(t);
    this.adj[t].push(s);
  }

}