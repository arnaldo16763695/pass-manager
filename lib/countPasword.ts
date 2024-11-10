import { Element } from "@prisma/client";

export function countPassword(elements: Element[]) {
  const passwordCounts = new Map<string, number>();

  // we iterate the elements array
  elements.forEach((element) => {
    const password = element.password;
    if (password) {
      if (passwordCounts.has(password)) {
        passwordCounts.set(password, (passwordCounts.get(password) || 0) + 1);
      } else {
        passwordCounts.set(password, 1);
      }
    }
  });

  let uniquePasswordCount = 0,
    repeatedPasswordsCount = 0;
    
  // we count the elements in the Map class 
  passwordCounts.forEach((count) => {
    if (count === 1) {
      uniquePasswordCount++;
    } else {
      repeatedPasswordsCount++;
    }
  });

  return {
    unique: uniquePasswordCount,
    repeated: repeatedPasswordsCount,
  };
}
