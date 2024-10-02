export const isPalindrome = (str: string): Boolean => {
  str = str.replace(/\s/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};
