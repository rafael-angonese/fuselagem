const generateUUID = (): string => {
  let dateNow = new Date().getTime()

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dateNow + Math.random() * 16) % 16 | 0
    dateNow = Math.floor(dateNow / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export default generateUUID
