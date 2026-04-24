function fibonnacy(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  return fibonnacy(index - 1) + fibonnacy(index - 2);
}

module.exports = fibonnacy;
