import { generateUserRandom } from "./generateUserRandom";

export const generateRandomEmail = () => {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "aol.com",
    "protonmail.com",
    "zoho.com",
    "yandex.com",
    "mail.com",
  ];
  const username = generateUserRandom();
  const domain = domains[Math.floor(Math.random() * domains.length)]

  return `${username}@${domain}`
};
