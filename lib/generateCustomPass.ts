export const generateCustomPass = (
  lengthPassword: number,
  isMayusSlected: boolean,
  isMinusSelected: boolean,
  isNumberSelected: boolean,
  isSpecialCharacters: boolean
) => {
  const mayusCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusCharset = "abcdefghijklmnopqrstuvwxyz";
  const numbersCharset = "0123456789";
  const specialCharset = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let charset = "";

  if (isMayusSlected) charset += mayusCharset;
  if (isMinusSelected) charset += minusCharset;
  if (isNumberSelected) charset += numbersCharset;
  if (isSpecialCharacters) charset += specialCharset;

  let password = "";

  if (isMayusSlected)
    password += mayusCharset.charAt(
      Math.floor(Math.random() * mayusCharset.length)
    );
  if (isMinusSelected)
    password += minusCharset.charAt(
      Math.floor(Math.random() * minusCharset.length)
    );
  if (isNumberSelected)
    password += numbersCharset.charAt(
      Math.floor(Math.random() * numbersCharset.length)
    );
  if (isSpecialCharacters)
    password += specialCharset.charAt(
      Math.floor(Math.random() * specialCharset.length)
    );

  for (let i = password.length; i < lengthPassword; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};
