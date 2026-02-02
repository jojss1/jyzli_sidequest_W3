// game.js

let karma = 0;
let currentNodeId = "scene1";

function resetStory() {
  karma = 0;
  currentNodeId = "scene1";
}

function drawGame() {
  background(230, 235, 240);

  // ---- card panel ----
  rectMode(CENTER);
  noStroke();
  fill(255);
  rect(width / 2, height / 2, 640, 520, 20);

  // ---- karma badge ----
  fill(240);
  rect(120, 70, 160, 40, 20);

  fill(50);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(`Karma: ${karma}`, 120, 70);

  // ---- story content ----
  const node = story[currentNodeId];

  fill(30);
  textAlign(CENTER, TOP);
  textSize(34);
  text(node.title, width / 2, 170);

  textSize(20);
  text(node.text, width / 2, 230);

  // buttons (same as before)
  const btnA = { x: width / 2, y: 500, w: 460, h: 70, label: node.a.label };
  const btnB = { x: width / 2, y: 590, w: 460, h: 70, label: node.b.label };

  drawBtn(btnA);
  drawBtn(btnB);

  cursor(isHover(btnA) || isHover(btnB) ? HAND : ARROW);
}

function drawBtn({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? 210 : 230);
  rect(x, y, w, h, 12);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(label, x, y);
}

function gameMousePressed() {
  const node = story[currentNodeId];
  const btnA = { x: width / 2, y: 520, w: 420, h: 70 };
  const btnB = { x: width / 2, y: 620, w: 420, h: 70 };

  if (isHover(btnA)) pick(node.a);
  else if (isHover(btnB)) pick(node.b);
}

function pick(choice) {
  karma += choice.karma;

  if (choice.next === "END") {
    if (karma >= 1) currentScreen = "win";
    else currentScreen = "lose";
    return;
  }

  currentNodeId = choice.next;
}
