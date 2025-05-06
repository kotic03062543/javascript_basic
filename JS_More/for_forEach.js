let colors = ["red", "blue", "green", "grey"];

for (let i = 0; i < colors.length; i++) {
  const element = colors[i];
  console.log("for", element);
}

colors.forEach((element) => {
  console.log("forEach", element);
});
