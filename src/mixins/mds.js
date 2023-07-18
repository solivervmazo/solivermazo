
import { defineAsyncComponent } from 'vue'
export default {
    methods: {
        projectMdAsComponent(string) {
			return defineAsyncComponent(() => import(`../data/projects/portfolio/${string}.md`));
		}
    }
}