/* Examples
  const arrayOfObjects = [
    { id: 1, name: 'Aaaaaaa' },
    { id: 2, name: 'Larissa' },
    { id: 3, name: 'Rafael' },
    { id: 4, name: 'João' },
    { id: 5, name: 'Luiz' },
    { id: 6, name: 'Bbbbbbb' },
  ];
  sortArray(arrayOfObjects, 'name')      => [
    { id: 1, name: 'Aaaaaaa' },
    { id: 6, name: 'Bbbbbbb' },
    { id: 4, name: 'João' },
    { id: 2, name: 'Larissa' },
    { id: 5, name: 'Luiz' },
    { id: 3, name: 'Rafael' },
  ]
  const arrayOfStrings = ['Aaaaaaa', 'Larissa', 'Rafael', 'João', 'Luiz', 'Bbbbbbb'];
  sortArray(arrayOfStrings) => ['Aaaaaaa', 'Bbbbbbb', 'João', 'Larissa', 'Luiz', 'Rafael']
*/

const sortArray = (data: Array<any>, key?: string): Array<any> => {
  let ordered: Array<any> = []

  if (!Array.isArray(data)) {
    return ordered
  }

  try {
    if (key) {
      ordered = data.sort(function (firstElement, secondElement) {
        return firstElement[key].localeCompare(secondElement[key])
      })
    } else {
      ordered = data.sort(function (firstElement, secondElement) {
        return firstElement.localeCompare(secondElement)
      })
    }

    return ordered
  } catch (error) {
    return ordered
  }
}

export default sortArray
