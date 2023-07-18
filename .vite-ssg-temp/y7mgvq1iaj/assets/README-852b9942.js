import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
const meta = [];
const _sfc_main = {
  __name: "README",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "meta": [] };
    __expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Vue 3 + Vite</h1><p>This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 <code>&lt;script setup&gt;</code> SFCs, check out the <a href="https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup">script setup docs</a> to learn more.</p><h2>Recommended IDE Setup</h2><ul><li><a href="https://code.visualstudio.com/">VS Code</a> + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">Volar</a> (and disable Vetur) + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">TypeScript Vue Plugin (Volar)</a>.</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/projects/portfolio/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default,
  meta
};
