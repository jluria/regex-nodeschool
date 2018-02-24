module.exports = str => {
  return /^[^0-9][^A-Z]/.test(str)
}
