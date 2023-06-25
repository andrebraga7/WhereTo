/** This functions takes in the postcode and formats it to have one space in the middle.
 * It first checks to see if there is a space, if not it adds one and returns the new string.
 */
export const formatPostcode = (postcode) => {
  if (postcode.at(-4) !== " ") {
    const newPostcode = postcode.split("");
    return newPostcode.toSpliced(-3, 0, " ");
  }
  return postcode;
};
