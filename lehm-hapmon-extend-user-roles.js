'use strict'

module.exports = {
  name: 'Hapi.js User Roles',
  description: 'https://github.com/mustardamus/lehm-hapmon-extend-user-roles',
  delimiters: '{{ }}',
  ignore: ['README.md'],

  after ({ srcPath, distPath, variables, utils }) {
    console.log(utils.Chalk.green('\n\nExtend `./client/components/nav-bar/nav-bar.html`, or anywhere else, with:'))
    console.log(utils.Chalk.yellow(`
  <template v-if="userIsAuthenticated">
    <a class="nav-item" href="/logout">
      Logout
    </a>
  </template>

  <template v-else>
    <a class="nav-item" href="/login">
      Login
    </a>
  </template>
    `))

    console.log(utils.Chalk.green('\n\nExtend the Schema of the User model at `./server/models/User.js` with the field:'))
    console.log(utils.Chalk.yellow(`
  role: { type: String, default: 'USER' }
    `))

    console.log(utils.Chalk.green('\n\nInstalling dependencies...'))
    utils.Shell.exec('npm install hapi-authorization --save')
  }
}
