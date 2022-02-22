const str = `
010-1234-5678
theaaa@naver.com
https://www.google.com/
The quick brown fox jumps over the lazy dogs.
aaabbbbccccccccddd
`

// const regexp = new RegExp('the','gi')

console.log(
  str.match(/[0-9]{1,}/g)
)