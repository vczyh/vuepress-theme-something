const shell = require('shelljs')

shell.exec(`git add -A && git commit -m \"${process.argv[2]} \"`)
shell.exec('git push -u origin master')
