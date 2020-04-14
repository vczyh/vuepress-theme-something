const shell = require('shelljs')

// console.log(process.argv[2])
const info = process.argv[2] + ' '
shell.exec(`git add -A && git commit -m \"${info}\"`)
shell.exec('git push')
