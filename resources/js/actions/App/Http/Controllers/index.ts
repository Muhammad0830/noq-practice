import ShopsController from './ShopsController'
import ServicesController from './ServicesController'
import AuthController from './AuthController'
import AdminDashboardController from './AdminDashboardController'

const Controllers = {
    ShopsController: Object.assign(ShopsController, ShopsController),
    ServicesController: Object.assign(ServicesController, ServicesController),
    AuthController: Object.assign(AuthController, AuthController),
    AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
}

export default Controllers