export function removeDuplicatesByProperty(arr: any, propName: string) {
  const uniqueObjects = Array.from(new Set(arr.map((obj: any) => obj[propName])))
  return uniqueObjects.map((propValue) => arr.find((obj: any) => obj[propName] === propValue))
}
