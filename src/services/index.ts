const gsxID = import.meta.env.VITE_GSX_ID as string
const key = import.meta.env.VITE_GSX_KEY as string
const sheet = import.meta.env.VITE_GSX_SHEET as string
const url = `https://sheets.googleapis.com/v4/spreadsheets/${gsxID}/values/${sheet}?key=${key}`

interface Ancestor {
  [key: string]: string
}

function prepareGSXData(values: string[][]) {
  const ancestors = [...values]
  const labels = ancestors.shift() || []
  const preparedData = []
  let genSize = 1
  let genArr = []
  let coupleArr = []
  while (ancestors.length) {
    const item: string[] = ancestors.shift() || []
    const ancestor: Ancestor = {}
    labels.forEach((label: string, index: number) => ancestor[label] = item[index])
    coupleArr.push(ancestor)
    if (coupleArr.length === 2 || genSize === 1) {
      genArr.push(coupleArr)
      coupleArr = []
    }
    if (genArr.length === genSize / 2 || genSize === 1) {
      preparedData.push(genArr)
      genArr = []
      genSize *= 2
    }
  }
  return preparedData
}

export async function fetchUrl() {
  const response = await fetch(url)
  const respJSON = await response.json()
  const { values } = respJSON
  return prepareGSXData(values)
}