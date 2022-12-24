export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
  if (!data) return
  let getUnique = data.map((item) => item[type])
  if (type === 'colors') getUnique = getUnique.flat()
  return ['all', ...new Set(getUnique)]
}
