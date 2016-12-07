# User Roles

tl;dr Roles are defined in `./server/config/roles.js`. The `User` model must
have a `role` field, for example:

    'use strict'

    module.exports = function (mongoose) {
      const name = 'User'
      const schema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        role: { type: String, default: 'USER' }
      }, {
        timestamps: true
      })

      return mongoose.model(name, schema)
    }

To guard routes, define which roles are allowed like so:

    'POST /resources': {
      handler: 'ResourcesController.create',
      config: {
        plugins: {
          hapiAuthorization: { roles: ['SUPERADMIN', 'ADMIN'] }
        }
      }
    }
