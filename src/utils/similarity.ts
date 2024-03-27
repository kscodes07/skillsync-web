import stringSimilarity from "string-similarity";

interface ObjectWithStrings {
  [key: string]: string;
}

export function findSimilarObjects(
  testString: string,
  objectsArray: ObjectWithStrings[],
  threshold: number
): ObjectWithStrings[] {
  const similarObjects: ObjectWithStrings[] = [];

  // Concatenate object keys for each object
  const objectKeyStrings = objectsArray.map((obj) =>
    Object.values(obj).join(" ")
  );

  for (let i = 0; i < objectsArray.length; i++) {
    console.log(
      testString +
        " " +
        objectKeyStrings[i] +
        " " +
        stringSimilarity.compareTwoStrings(testString, objectKeyStrings[i])
    );
    const similarity = stringSimilarity.compareTwoStrings(
      testString,
      objectKeyStrings[i]
    );

    if (similarity >= threshold) {
      similarObjects.push(objectsArray[i]);
    }
  }

  return similarObjects;
}
