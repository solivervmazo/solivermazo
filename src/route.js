import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import Credentials from './pages/Credentials.vue';
import Contact from './pages/Contact.vue';
import Project from './pages/Project.vue';
import ProjectContent from './components/project/ProjectContent.vue';
import NotFound from './components/error/NotFound.vue';
import { projects } from './data/projects.js';

export const router = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/credentials",
        name: "credentials",
        component: Credentials
    },
    {
        path: "/projects",
        name: "project",
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
    },
	{ 
		path: '/:pathMatch(.*)*', 
		name: 'NotFound', 
		component: NotFound 
	},
]