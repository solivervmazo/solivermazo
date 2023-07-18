import { useSSRContext, inject, ref, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, defineAsyncComponent, onBeforeMount } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { ViteSSG } from "vite-ssg";
import { useHead } from "@unhead/vue";
const AppHeader_vue_vue_type_style_index_0_scoped_424b8d4b_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { logoLight, logoDark } = {
      "logoLight": new URL("../../assets/images/logo-light.png", import.meta.url).href,
      "logoDark": new URL("../../assets/images/logo-dark.png", import.meta.url).href
    };
    const appTheme = inject("appTheme");
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_AppHeaderLinks = resolveComponent("AppHeaderLinks");
      const _component_theme_switcher = resolveComponent("theme-switcher");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        id: "nav",
        class: "fixed top-0 z-10 bg-gray-50 w-full x-0 mx-auto top-0 z-10 bg-primary-light dark:bg-primary-dark"
      }, _attrs))} data-v-424b8d4b><div class="z-10 max-w-screen-lg mx-auto sm:flex justify-between sm:items-center my-3" data-v-424b8d4b><div class="flex justify-between items-center px-4 sm:px-0" data-v-424b8d4b><div data-v-424b8d4b>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(appTheme) === "light") {
              _push2(`<img${ssrRenderAttr("src", unref(logoDark))} class="w-36" alt="Dark Logo" data-v-424b8d4b${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(logoLight))} class="w-36" alt="Light Logo" data-v-424b8d4b${_scopeId}>`);
            }
          } else {
            return [
              unref(appTheme) === "light" ? (openBlock(), createBlock("img", {
                key: 0,
                src: unref(logoDark),
                class: "w-36",
                alt: "Dark Logo"
              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                key: 1,
                src: unref(logoLight),
                class: "w-36",
                alt: "Light Logo"
              }, null, 8, ["src"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-items sm:hidden" data-v-424b8d4b><button type="button" class="focus:outline-none" aria-label="Hamburger Menu" data-v-424b8d4b><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light" data-v-424b8d4b>`);
      if (isOpen.value) {
        _push(`<path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd" data-v-424b8d4b></path>`);
      } else {
        _push(`<!---->`);
      }
      if (!isOpen.value) {
        _push(`<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" data-v-424b8d4b></path>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg></button></div></div>`);
      _push(ssrRenderComponent(_component_AppHeaderLinks, {
        showModal: _ctx.showModal,
        isOpen: isOpen.value
      }, null, _parent));
      _push(`<div class="hidden sm:flex justify-between items-center flex-col md:flex-row" data-v-424b8d4b>`);
      _push(ssrRenderComponent(_component_theme_switcher, {
        theme: unref(appTheme),
        onThemeChanged: _ctx.updateTheme,
        class: "ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-424b8d4b"]]);
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const appTheme = inject("appTheme");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(appTheme), "pt-0.5"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<div class="pt-8">`);
      _push(ssrRenderComponent(_component_router_view, { theme: unref(appTheme) }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(_attrs)}>${ssrInterpolate(__props.title)}</button>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/reusable/Button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const main = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_AppButton = resolveComponent("AppButton");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto" }, _attrs))}><div class="container mx-auto"><div class="mt-10 sm:mt-20 flex justify-center">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/projects",
    class: "font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300",
    "aria-label": "More Projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppButton, { title: "More Projects" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AppButton, { title: "More Projects" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> About </div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}> Project `);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const ProjectContent_vue_vue_type_style_index_0_scoped_c4562a8c_lang = "";
const ProjectContent_vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "ProjectContent",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const { project } = __props;
    const Md = defineAsyncComponent({
      loader: () => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../data/projects/portfolio/README.md": () => import("./assets/README-852b9942.js"), "../../data/projects/sql_airbnb_london/README.md": () => import("./assets/README-2ab81f59.js"), "../../data/projects/sql_window_func/README.md": () => import("./assets/README-b46b55cb.js") }), `../../data/projects/${project.dir}/README.md`),
      timeout: 200
    });
    useHead({
      title: "Website Title",
      meta: [
        {
          name: "description",
          content: project.title
        }
      ]
    });
    onBeforeMount(() => {
      console.log("AHHAHAHH", Md);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c4562a8c><h1 data-v-c4562a8c>${ssrInterpolate(__props.project.title)}</h1>`);
      _push(ssrRenderComponent(unref(Md), { class: "prose" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4562a8c"]]);
const sources = {
  coursera: {
    id: "coursera",
    name: "Coursera.org",
    url: "https://www.coursera.org/"
  }
};
const repos = {
  kaggle: {
    name: "Kaggle",
    icon: "kaggle",
    iconSet: "fontawesome"
  },
  github: {
    name: "Github",
    icon: "github",
    iconSet: "feathericons"
  },
  bigquery: {
    name: "BigQuery",
    icon: "google",
    iconSet: "fontawesome"
  }
};
const projects = [
  {
    id: 1,
    dir: "portfolio",
    project: "soliver-portfolio-using-vue-vite-tailwind",
    title: "Soliver portfolio using Vue+Vite and TailwinCSS hosted in Github pages",
    category: "others",
    img: "cover.png",
    type: "soliver mazo",
    date: "July 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: `To create a portfolio for showcasing your my skills. With interactive project displays, skill highlighting, and optimized performance, impress potential employers and clients.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Vue3", "Vite", "TailwindCSS", "GitHub Pages"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [
        "about.png",
        /*'about-dark.png',*/
        "project1.png",
        "project2.png"
      ],
      md: "README"
    },
    link: {
      ...repos.github,
      url: "https://github.com/solivervmazo/soliver"
    }
  },
  {
    id: 2,
    dir: "sql_airbnb_london",
    project: "sql-data-cleaning-london-airbnb-listings-2023",
    title: "Data cleaning using SQL: London AirBnb listings March 2023",
    category: "Data Analysis",
    img: "cover.png",
    type: "soliver mazo",
    date: "June 2023",
    details: {
      client: false,
      guided: false,
      objective: {
        key: "objective",
        heading: "Objective",
        text: `This project aims to prepare the data for analysis by filtering out data outside Uk.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["SQL", "Data Analysis", "BigQuery"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [],
      md: "README"
    },
    link: {
      ...repos.bigquery,
      url: "https://console.cloud.google.com/bigquery?sq=855219307890:df8ae76bb28948059671d59ab8a5d913"
    }
  },
  {
    id: 3,
    dir: "1",
    project: "exploratory-data-analysis-python-pandas",
    title: "Exploratory Data Analysis With Python and Pandas",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `Exploratory Data Analysis With Python and Pandas`,
            url: "https://www.coursera.org/projects/exploratory-data-analysis-python-pandas"
          },
          certificate: {
            name: "98S98F7JS7CT",
            url: "https://www.coursera.org/account/accomplishments/certificate/98S98F7JS7CT"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: `Apply practical Exploratory Data Analysis (EDA) techniques on any tabular dataset using Python packages such as Pandas and Numpy.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Python", "Data Analysis", "Pandas", "EDA"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["output_15_1.png", "output_14_1.png", "output_32_2.png"],
      md: "notebook"
    },
    link: {
      ...repos.kaggle,
      url: "https://www.kaggle.com/code/solivermazo/exploratory-data-analysis-with-python-and-pandas"
    }
  },
  {
    id: 4,
    dir: "coursera_py2",
    project: "python-for-data-analysis-pandas-numpy",
    title: "Python for Data Analysis: Pandas & NumPy",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `Python for Data Analysis: Pandas & NumPy`,
            url: "https://www.coursera.org/projects/python-for-data-analysis-numpy"
          },
          certificate: {
            name: "527RS23WZTLH",
            url: "https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH"
          }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: ` Understand the fundamentals of data analysis in Python and we will leverage the power of two important python libraries known as Numpy and pandas. NumPy and Pandas are two of the most widely used python libraries in data science. They offer high-performance, easy to use structures and data analysis tools.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["Python", "Data Analysis", "Pandas", "NumPy", "Data Science"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: [],
      md: "notebook"
    },
    link: {
      ...repos.kaggle,
      url: "https://www.kaggle.com/solivermazo/python-for-data-analysis-pandas-numpy"
    }
  },
  {
    id: 4,
    dir: "sql_window_func",
    project: "sql-window-functions-for-analytics",
    title: "SQL Window Functions for Analytics",
    category: "Data Analysis",
    img: "cover.png",
    type: "guided project",
    date: "July 2023",
    details: {
      client: false,
      guided: {
        heading: "About Project",
        details: {
          provider: sources["coursera"],
          course: {
            name: `SQL Window Functions for Analytics`,
            url: "https://www.coursera.org/projects/sql-window-functions-for-analytics"
          }
          // certificate: {
          // 	name: '527RS23WZTLH',
          // 	url: 'https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH'
          // }
        }
      },
      objective: {
        key: "objective",
        heading: "Objective",
        text: `This is a hands-on project that will help SQL users use window functions extensively for database insights. In this project, you will learn how to explore and query the project-db database extensively. We will start this hands-on project by retrieving the data in the table in the database.`
      },
      tags: {
        key: "tags",
        heading: "Tools & Technologies",
        tags: ["SQL", "MySql Workbench", "Data Analysis", "Data Science"]
      }
    },
    src: {
      coverImg: "cover.png",
      images: ["1.png"],
      md: "README"
    },
    link: false
  }
];
const router = [
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
    ).map((project) => ({
      path: project.project,
      component: ProjectContent,
      props: {
        project
      }
    }))
  }
];
const createApp = ViteSSG(
  _sfc_main$5,
  {
    routes: router
  },
  ({ app, router: router2, routes, isClient, initialState }) => {
    const appTheme = ref(localStorage ? localStorage.getItem("theme") ?? "light" : light);
    app.provide("appTheme", appTheme);
    app.component("AppButton", _sfc_main$4);
  }
);
export {
  createApp
};
