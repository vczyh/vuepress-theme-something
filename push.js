const shell = require('shelljs')

// console.log(process.argv)
shell.exec(`git add -A && git commit -m ${process.argv[2]}`)
shell.exec('git push')
