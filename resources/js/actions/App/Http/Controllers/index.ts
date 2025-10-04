import HomeController from './HomeController'
import AboutController from './AboutController'
import ProjectController from './ProjectController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
AboutController: Object.assign(AboutController, AboutController),
ProjectController: Object.assign(ProjectController, ProjectController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers