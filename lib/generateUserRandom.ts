export const generateUserRandom = (length = 12) => {
  const adjetives = [
    "brave",
    "calm",
    "delightful",
    "eager",
    "fierce",
    "gentle",
    "jolly",
    "kind",
    "lively",
    "proud",
  ];

  const nouns = [
    "lion",
    "elephant",
    "tiger",
    "giraffe",
    "panda",
    "koala",
    "dolphin",
    "eagle",
    "whale",
    "penguin",
  ];

  const randomItem = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];
  let username = "";
  username += randomItem(adjetives);
  username += randomItem(nouns);
  username += Math.floor(Math.random() * 10000);

  if (username.length > length) {
    username = username.substring(0, length);
  }

  return username;
};
