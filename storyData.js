// storyData.js

const story = {
  scene1: {
    title: "Scene 1",
    text: "You find a lost wallet on the ground.",
    a: { label: "Return it", next: "scene2", karma: +1 },
    b: { label: "Keep it", next: "scene2", karma: -1 },
  },

  scene2: {
    title: "Scene 2",
    text: "A stranger asks for help finding the bus stop.",
    a: { label: "Help them", next: "END", karma: +1 },
    b: { label: "Ignore them", next: "END", karma: -1 },
  },
};
