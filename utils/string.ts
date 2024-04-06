export function trucateString(strg: string, length = 12) {
  if (!strg) throw new Error("You must provide a valid string");

  if (strg.length <= length) return strg;

  return strg.substring(0, length) + "...";
}
