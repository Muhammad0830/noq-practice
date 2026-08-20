import ShopsController from './ShopsController'
import ServicesController from './ServicesController'
import AuthController from './AuthController'

const Controllers = {
    ShopsController: Object.assign(ShopsController, ShopsController),
    ServicesController: Object.assign(ServicesController, ServicesController),
    AuthController: Object.assign(AuthController, AuthController),
}

export default Controllers