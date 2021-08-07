class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number;
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector("#score")!;
    this.levelEle = document.querySelector("#level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore(): void {
    this.scoreEle.innerHTML = String(++this.score);
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp(): void {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = String(++this.level);
    }
  }
}

export default ScorePanel;