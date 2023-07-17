import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Project from './pages/Project.vue'
import ProjectContent from './components/project/ProjectContent.vue';
import { projects } from './data/projects.js'

export const router = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/project",
        name: "Project",
        component: Project,
        children: Array.from(
                JSON.parse(JSON.stringify(projects))
            ).map( (project) => ({
                path:  project.project,
                component: ProjectContent,
                props: {
                    project: project
                }
            })) ,
    }
]