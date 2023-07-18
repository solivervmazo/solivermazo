import { inject, resolveComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode, ref, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, defineAsyncComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { ViteSSG } from "vite-ssg";
import { useHead } from "@unhead/vue";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faKaggle, faGoogle, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun, faEnvelope, faMap, faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
const _sfc_main$p = {
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const appTheme = inject("appTheme");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "#",
        "aria-label": "Theme Switcher"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["far", unref(appTheme) == "light" ? "moon" : "sun"],
        class: "text-primary-dark hover:text-gray-600 dark:hover:text-gray-400 dark:text-ternary-light dark:hover:border-primary-light w-5"
      }, null, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ThemeSwitcher.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "AppHeaderLinks",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.isOpen ? "block" : "hidden", "m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/projects",
        class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2",
        "aria-label": "Projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/about",
        class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
        "aria-label": "About Me"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Me`);
          } else {
            return [
              createTextVNode("About Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
        "aria-label": "Contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/credentials",
        class: "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
        "aria-label": "Credentials"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Credentials`);
          } else {
            return [
              createTextVNode("Credentials")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppHeaderLinks.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const AppHeader_vue_vue_type_style_index_0_scoped_27da57eb_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = {
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
      _push(`<nav${ssrRenderAttrs(mergeProps({
        id: "nav",
        class: "fixed top-0 z-10 bg-gray-50 w-full x-0 mx-auto top-0 z-10 bg-primary-light dark:bg-primary-dark"
      }, _attrs))} data-v-27da57eb><div class="z-10 max-w-screen-lg mx-auto sm:flex justify-between sm:items-center my-3" data-v-27da57eb><div class="flex justify-between items-center px-4 sm:px-0" data-v-27da57eb><div data-v-27da57eb>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(appTheme) === "light") {
              _push2(`<img${ssrRenderAttr("src", unref(logoDark))} class="w-36" alt="Dark Logo" data-v-27da57eb${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(logoLight))} class="w-36" alt="Light Logo" data-v-27da57eb${_scopeId}>`);
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
      _push(`</div><div class="flex flex-items sm:hidden" data-v-27da57eb>`);
      _push(ssrRenderComponent(_sfc_main$p, { class: "sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 mx-1.5 py-2 rounded-lg" }, null, _parent));
      _push(`<button type="button" class="focus:outline-none" aria-label="Hamburger Menu" data-v-27da57eb><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light" data-v-27da57eb>`);
      if (isOpen.value) {
        _push(`<path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd" data-v-27da57eb></path>`);
      } else {
        _push(`<!---->`);
      }
      if (!isOpen.value) {
        _push(`<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" data-v-27da57eb></path>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg></button></div></div>`);
      _push(ssrRenderComponent(_sfc_main$o, { isOpen: isOpen.value }, null, _parent));
      _push(`<div class="hidden sm:flex justify-between items-center flex-col md:flex-row" data-v-27da57eb>`);
      _push(ssrRenderComponent(_sfc_main$p, { class: "ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppHeader.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-27da57eb"]]);
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center text-center dark:bg-primary-dark" }, _attrs))}><div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"> © 2023  -  Soliver Mazo. </div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterCopyright.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const FooterCopyright = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
const socmeds = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "linkedin",
    set: "fab",
    url: "https://linkedin.com/in/solivervmazo"
  },
  {
    id: 2,
    name: "GitHub",
    icon: "github",
    set: "fab",
    url: "https://github.com/solivervmazo"
  },
  {
    id: 3,
    name: "Kaggle",
    icon: "kaggle",
    set: "fab",
    url: "https://www.kaggle.com/solivermazo"
  }
];
const _sfc_main$l = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"><div class="flex flex-col justify-center items-center mb-12 sm:mb-20"><p class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"> Follow me </p><ul class="flex gap-4 sm:gap-8"><!--[-->`);
      ssrRenderList(unref(socmeds), (socmed) => {
        _push(`<a${ssrRenderAttr("href", socmed.url)} target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: [socmed.set, socmed.icon],
          class: "w-5 sm:w-8 h-5 sm:h-8"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(FooterCopyright, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/AppFooter.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const appTheme = inject("appTheme");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(appTheme), "pt-0.5"]
      }, _attrs))}><div class="flex flex-col dark:bg-primary-dark min-h-screen">`);
      _push(ssrRenderComponent(AppHeader, { class: "flex-none" }, null, _parent));
      _push(`<div class="flex-grow pt-8">`);
      _push(ssrRenderComponent(_component_router_view, { theme: unref(appTheme) }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$l, { class: "flex-none pt-5" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/reusable/Button.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const main = "";
function capitalize(string) {
  return string.split(" ").map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
}
function projectUrl(string) {
  return new URL(`../data/projects/${string}`, import.meta.url).href;
}
const _sfc_main$i = {
  __name: "ProjectSingle",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const imgProjectErrorUrl = inject("imgProjectErrorUrl");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        to: { path: `/projects/${__props.project.project}` },
        class: "relative rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
        "aria-label": "Single Project"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden max-h-40"${_scopeId}><img${ssrRenderAttr("src", unref(projectUrl)(`${__props.project.dir}/${__props.project.project}-img-${__props.project.img}`))}${ssrRenderAttr("alt", __props.project.img)} class="rounded-t-xl border-none"${_scopeId}></div><div class="text-center px-4 pt-6 pb-4"${_scopeId}><p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"${_scopeId}>${ssrInterpolate(__props.project.title)}</p></div>`);
            if (__props.project.details && __props.project.details.tags) {
              _push2(`<div class="flex px-4 pt-2 pb-8"${_scopeId}><span class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light"${_scopeId}>${ssrInterpolate(__props.project.details.tags.tags.join(", "))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-x-0 bottom-0 text-right px-2 pt-2 pb-2"${_scopeId}><p class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light"${_scopeId}>${ssrInterpolate(unref(capitalize)(__props.project.type))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden max-h-40" }, [
                createVNode("img", {
                  src: unref(projectUrl)(`${__props.project.dir}/${__props.project.project}-img-${__props.project.img}`),
                  alt: __props.project.img,
                  onError: ($event) => $event.target.src = unref(imgProjectErrorUrl),
                  class: "rounded-t-xl border-none"
                }, null, 40, ["src", "alt", "onError"])
              ]),
              createVNode("div", { class: "text-center px-4 pt-6 pb-4" }, [
                createVNode("p", { class: "font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" }, toDisplayString(__props.project.title), 1)
              ]),
              __props.project.details && __props.project.details.tags ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex px-4 pt-2 pb-8"
              }, [
                createVNode("span", { class: "font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light" }, toDisplayString(__props.project.details.tags.tags.join(", ")), 1)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "absolute inset-x-0 bottom-0 text-right px-2 pt-2 pb-2" }, [
                createVNode("p", { class: "font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light" }, toDisplayString(unref(capitalize)(__props.project.type)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectSingle.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
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
    set: "fab"
  },
  github: {
    name: "Github",
    icon: "github",
    set: "fab"
  },
  bigquery: {
    name: "BigQuery",
    icon: "google",
    set: "fab"
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
const _sfc_main$h = {
  __name: "ProjectsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const projects$1 = JSON.parse(JSON.stringify(projects)).reverse();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-10 sm:pt-14" }, _attrs))}><div class="text-center"><p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"> Projects Portfolio </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"><!--[-->`);
      ssrRenderList(unref(projects$1), (project) => {
        _push(ssrRenderComponent(_sfc_main$i, {
          key: project.id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectsGrid.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
function creatMeta(description, url, type, title, img = "https://solivervmazo.github.io/solivermazo/solivervmazo.png") {
  return [
    {
      name: "description",
      content: description
    },
    //OpenGraph
    {
      property: "og:description",
      content: description
    },
    {
      property: "og:type",
      content: type
    },
    {
      property: "og:url",
      content: "https://solivervmazo.github.io/solivermazo/" + url
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:image",
      content: img
    },
    //Twitter
    {
      property: "twitter:description",
      content: description
    },
    {
      property: "twitter:card",
      content: "summary_large_image"
    },
    {
      property: "https://solivervmazo.github.io/solivermazo/" + url,
      content: url
    },
    {
      property: "twitter:title",
      content: title
    },
    {
      property: "twitter:image",
      content: img
    }
  ];
}
const _sfc_main$g = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Soliver Mazo",
      meta: creatMeta(
        "Data Analyst, Sql, Python, Tableu, Google Sheets",
        "",
        "website",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_AppButton = resolveComponent("AppButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto" }, _attrs))}><div class="container mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`<div class="mt-5 sm:mt-20 flex justify-center">`);
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
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Soliver Mazo — Projects",
      meta: creatMeta(
        "Data Analyst, Sql, Python, Tableu, Google Sheets",
        "projects",
        "article",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Projects.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: `Hello, I'm Soliver, a professional with a diverse background in software development and a passion for data analytics. From 2015 to 2019, I dedicated myself to the world of software development, honing my skills in various programming languages and frameworks. During those years, I had the opportunity to work on several exciting projects, gaining valuable experience in creating efficient and innovative software solutions.`
        },
        {
          id: 2,
          bio: `However, due to the demands of my family business, I had to temporarily step away from my software development career. As an individual committed to family responsibilities, I dedicated my time and energy to ensuring the success and growth of our family business. While this was a rewarding experience, my passion for data analysis and technology never waned.`
        },
        {
          id: 3,
          bio: `Now, as I seek to re-enter the professional world as a data analyst, I am excited to leverage my software development background to explore new opportunities in the field of data analytics. I believe that my strong foundation in programming, combined with my analytical mindset and attention to detail, will allow me to excel in this evolving industry.`
        },
        {
          id: 4,
          bio: `Although I have yet to determine a specific industry in which to focus my data analytics career, I approach this decision with an open mind and eagerness to learn. I understand the power of data-driven decision-making and the immense potential it holds across various sectors. With my strong analytical skills and technical acumen, I am confident in my ability to adapt and contribute to any industry that values the transformative potential of data analytics.`
        },
        {
          id: 5,
          bio: `I am eager to engage with like-minded professionals and organizations that value data-driven insights and are open to innovative approaches to problem-solving. Together, we can harness the power of data to drive informed decision-making, uncover valuable insights, and unlock new opportunities for growth.`
        },
        {
          id: 5,
          bio: `I look forward to embarking on this exciting journey as a data analyst and contributing to the advancement of data-driven practices in whichever industry I ultimately choose.`
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block sm:flex sm:gap-10 mt-10 sm:mt-20" }, _attrs))}><div class="w-full text-center sm:w-4/4 text-left"><!--[-->`);
  ssrRenderList($setup.bios, (bio) => {
    _push(`<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-sm">${ssrInterpolate(bio.bio)}</p>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutMe.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$d = {
  __name: "AboutCertSingle",
  __ssrInlineRender: true,
  props: {
    cert: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.cert.credential,
        target: "_blank",
        class: "relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
        "aria-label": "Single Project"
      }, _attrs))}>`);
      if (__props.cert.featured) {
        _push(`<div class="absolute left-0 top-0 h-16 w-16"><div class="bg-gradient-to-r from-green-400 to-blue-500 absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]"> Featured </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><img${ssrRenderAttr("src", __props.cert.img)}${ssrRenderAttr("alt", __props.cert.img)} class="rounded-t-xl border-none"></div><div class="text-center px-4 py-6"><p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">${ssrInterpolate(__props.cert.title)}</p><span class="font-general-medium text-sm text-ternary-dark dark:text-ternary-light">${ssrInterpolate(__props.cert.org)}</span></div></a>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutCertSingle.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const certificates = {
  featured: [
    {
      id: 1,
      title: "Python for Everybody Specialization",
      credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/74TB8VE8HFQ9",
      img: new URL("../assets/images/certs/74TB8VE8HFQ9.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: true,
      skills: ["Python", "JSON", "XML", "DBMS"]
    }
  ],
  courses: [
    {
      id: 1,
      title: "SQL for Data Science",
      credential: "https://www.coursera.org/account/accomplishments/certificate/RPHXLFSDMY5Q",
      img: new URL("../assets/images/certs/RPHXLFSDMY5Q.png", import.meta.url).href,
      org: "Coursera | University of California, Davis",
      featured: false,
      skills: ["Data Science"]
    },
    {
      id: 2,
      title: "Foundations: Data, Data, Everywhere",
      credential: "https://www.coursera.org/account/accomplishments/certificate/WQTCNGESCJE6",
      img: new URL("../assets/images/certs/WQTCNGESCJE6.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 3,
      title: "Ask Questions to Make Data-Driven Decisions",
      credential: "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: new URL("../assets/images/certs/4PACMBRHMSD4.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 4,
      title: "Prepare Data for Exploration",
      credential: "https://www.coursera.org/account/accomplishments/certificate/4PACMBRHMSD4",
      img: new URL("../assets/images/certs/4PACMBRHMSD4.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 5,
      title: "Process Data from Dirty to Clean",
      credential: "https://www.coursera.org/account/accomplishments/certificate/VSMTAGTWLBN3",
      img: new URL("../assets/images/certs/VSMTAGTWLBN3.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Data Analysis"]
    },
    {
      id: 6,
      title: "Analyze Data to Answer Questions",
      credential: "https://www.coursera.org/account/accomplishments/certificate/7BUJPD6TJL3Q",
      img: new URL("../assets/images/certs/7BUJPD6TJL3Q.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: ["Google BigQuery", "Data Analysis", "Google Sheets", "SQL"]
    },
    {
      id: 7,
      title: "Share Data Through the Art of Visualization",
      credential: "https://www.coursera.org/account/accomplishments/certificate/FL94MR4L6JZY",
      img: new URL("../assets/images/certs/FL94MR4L6JZY.png", import.meta.url).href,
      org: "Coursera | Google Career Certificates",
      featured: false,
      skills: [""]
    },
    {
      id: 8,
      title: "Programming for Everybody (Getting Started with Python)",
      credential: "https://www.coursera.org/account/accomplishments/certificate/AN5QQMNDFDKM",
      img: new URL("../assets/images/certs/AN5QQMNDFDKM.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 9,
      title: "Python Data Structures",
      credential: "https://www.coursera.org/account/accomplishments/certificate/WW9AXFF2J87L",
      img: new URL("../assets/images/certs/WW9AXFF2J87L.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 10,
      title: "Using Python to Access Web Data",
      credential: "https://www.coursera.org/account/accomplishments/certificate/VRHW6YK5CAR9",
      img: new URL("../assets/images/certs/VRHW6YK5CAR9.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    },
    {
      id: 11,
      title: "Using Databases with Python",
      credential: "https://www.coursera.org/account/accomplishments/certificate/D5V2D4PUP35R",
      img: new URL("../assets/images/certs/D5V2D4PUP35R.png", import.meta.url).href,
      org: "Coursera | University of Michigan",
      featured: false,
      skills: [""]
    }
  ]
};
const _sfc_main$c = {
  __name: "AboutCerts",
  __ssrInlineRender: true,
  setup(__props) {
    const { certsHeading } = {
      certsHeading: "Certificates"
    };
    const linkClass = inject("linkClass");
    const certificates$1 = JSON.parse(JSON.stringify(certificates["featured"])).reverse().splice(0, 4).concat(JSON.parse(JSON.stringify(certificates["courses"])).reverse().splice(0, 4));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 sm:mt-20" }, _attrs))}><p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">${ssrInterpolate(unref(certsHeading))}</p><div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"><!--[-->`);
      ssrRenderList(unref(certificates$1), (cert) => {
        _push(ssrRenderComponent(_sfc_main$d, {
          key: cert.id,
          cert
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/credentials",
        class: "font-general-medium text-center block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
        "aria-label": "Certificates"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="${ssrRenderClass([unref(linkClass)])}"${_scopeId}>See all</a>`);
          } else {
            return [
              createVNode("a", {
                class: [unref(linkClass)]
              }, "See all", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutCerts.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Soliver Mazo",
      meta: creatMeta(
        "Data Analyst, Sql, Python, Tableu, Google Sheets",
        "about",
        "article",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto">`);
      _push(ssrRenderComponent(AboutMe, null, null, _parent));
      _push(`</div><div class="container mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Certificates",
  __ssrInlineRender: true,
  setup(__props) {
    const { certsHeading, featured, courses } = {
      certsHeading: "Certificates",
      featured: JSON.parse(JSON.stringify(certificates["featured"])).reverse(),
      courses: JSON.parse(JSON.stringify(certificates["courses"])).reverse()
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 sm:mt-20" }, _attrs))}><p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">${ssrInterpolate(unref(certsHeading))}</p><p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light"> Featured </p><div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2 mb-5"><!--[-->`);
      ssrRenderList(unref(featured), (cert) => {
        _push(ssrRenderComponent(_sfc_main$d, {
          key: cert.id,
          cert
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="border-t-2 border-primary-light dark:border-secondary-dark"><p class="font-general-medium text-start text-2lg sm:text-3lg mt-2 sm:mt-6 text-primary-dark dark:text-primary-light"> Courses </p><div class="grid grid-cols-2 sm:grid-cols-4 mt-2 sm:mt-6 gap-2"><!--[-->`);
      ssrRenderList(unref(courses), (cert) => {
        _push(ssrRenderComponent(_sfc_main$d, {
          key: cert.id,
          cert
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/credentials/Certificates.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Credentials",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Soliver Mazo — Credentials",
      meta: creatMeta(
        "Data Analyst, Sql, Python, Tableu, Google Sheets",
        "credentials",
        "article",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Credentials.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ContactDetails",
  __ssrInlineRender: true,
  props: {
    contacts: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-2/2" }, _attrs))}><div class="text-left max-w-xl px-6"><h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"> Contact details </h2><ul class="font-general-regular"><!--[-->`);
      ssrRenderList(__props.contacts, (contact) => {
        _push(`<li class="flex">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: [contact.set, contact.icon],
          class: "w-5 text-gray-500 dark:text-gray-400 mr-4 py-2"
        }, null, _parent));
        _push(`<a href="#" class="${ssrRenderClass([
          contact.icon === "mail" || contact.icon === "phone" ? "hover:underline cursor-pointer" : "",
          "text-lg mb-4 text-ternary-dark dark:text-ternary-light"
        ])}" aria-label="Website and Phone">${ssrInterpolate(contact.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/ContactDetails.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contacts = [
      {
        id: 1,
        name: "Davao City, Davao del Sur Philippines, 8000",
        set: "far",
        icon: "map"
      },
      {
        id: 2,
        name: "solivervmazo.jobs@gmail.com",
        set: "far",
        icon: "envelope"
      },
      {
        id: 3,
        name: "github.com/solivervmazo",
        set: "fab",
        icon: "github"
      },
      {
        id: 3,
        name: "linkedin.com/in/solivervmazo/",
        set: "fab",
        icon: "linkedin"
      }
    ];
    useHead({
      title: "Soliver Mazo — Contact",
      meta: creatMeta(
        "Data Analyst, Sql, Python, Tableu, Google Sheets",
        "contact",
        "article",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, { contacts }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Project.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _sfc_main$5 = {
  __name: "ProjectHeader",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const linkClass = inject("linkClass");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">${ssrInterpolate(__props.project.title)}</p><div class="flex"><div class="flex items-center mr-10">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["far", "lightbulb"],
        class: "w-4 h-4 text-ternary-dark dark:text-ternary-light"
      }, null, _parent));
      _push(`<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate(unref(capitalize)(__props.project.type))}</span></div>`);
      if (__props.project.link) {
        _push(`<div class="flex items-center mr-10">`);
        if (__props.project.link) {
          _push(ssrRenderComponent(_component_font_awesome_icon, {
            icon: [__props.project.link.set, __props.project.link.icon],
            class: "w-4 h-4 text-ternary-dark dark:text-ternary-light"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<a${ssrRenderAttr("href", __props.project.link.url)} target="_blank" class="${ssrRenderClass(`font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light ${unref(linkClass)}`)}">${ssrInterpolate(`View in ${__props.project.link.name}`)}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["far", "clock"],
        class: "w-4 h-4 text-ternary-dark dark:text-ternary-light"
      }, null, _parent));
      _push(`<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate(__props.project.date)}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProjectGallery",
  __ssrInlineRender: true,
  props: {
    linkClass: String,
    project: Object
  },
  setup(__props) {
    const open = ref(false);
    const imgEnlarge = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        as: "template",
        show: open.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "relative z-10",
              onClose: ($event) => open.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 z-10 overflow-y-auto"${_scopeId2}><div class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([[__props.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_font_awesome_icon, {
                                icon: "xmark",
                                class: "w-4 h-4 cursor-pointer",
                                onClick: ($event) => {
                                  open.value = false;
                                  imgEnlarge.value = void 0;
                                }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4"${_scopeId4}><img${ssrRenderAttr("src", imgEnlarge.value)} alt=""${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: [[__props.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    icon: "xmark",
                                    class: "w-4 h-4 cursor-pointer",
                                    onClick: ($event) => {
                                      open.value = false;
                                      imgEnlarge.value = void 0;
                                    }
                                  }, null, 8, ["onClick"])
                                ], 2),
                                createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                                  createVNode("img", {
                                    src: imgEnlarge.value,
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [[__props.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                              }, [
                                createVNode(_component_font_awesome_icon, {
                                  icon: "xmark",
                                  class: "w-4 h-4 cursor-pointer",
                                  onClick: ($event) => {
                                    open.value = false;
                                    imgEnlarge.value = void 0;
                                  }
                                }, null, 8, ["onClick"])
                              ], 2),
                              createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                                createVNode("img", {
                                  src: imgEnlarge.value,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                      createVNode("div", { class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                          "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [[__props.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    icon: "xmark",
                                    class: "w-4 h-4 cursor-pointer",
                                    onClick: ($event) => {
                                      open.value = false;
                                      imgEnlarge.value = void 0;
                                    }
                                  }, null, 8, ["onClick"])
                                ], 2),
                                createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                                  createVNode("img", {
                                    src: imgEnlarge.value,
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                class: "relative z-10",
                onClose: ($event) => open.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 z-10 overflow-y-auto" }, [
                    createVNode("div", { class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "relative max-w-screen-lg sm:max-h-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-10" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [[__props.linkClass], "bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-3"]
                              }, [
                                createVNode(_component_font_awesome_icon, {
                                  icon: "xmark",
                                  class: "w-4 h-4 cursor-pointer",
                                  onClick: ($event) => {
                                    open.value = false;
                                    imgEnlarge.value = void 0;
                                  }
                                }, null, 8, ["onClick"])
                              ], 2),
                              createVNode("div", { class: "bg-white border-t-2 border-primary-light dark:border-secondary-dark px-4 py-4 sm:p-6 sm:pb-4" }, [
                                createVNode("img", {
                                  src: imgEnlarge.value,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.project.src.images, (img) => {
        _push(`<div class="mb-10 sm:mb-0"><img${ssrRenderAttr("src", unref(projectUrl)(`${__props.project.dir}/${__props.project.project}-img-${img}`))} class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"${ssrRenderAttr("alt", `${__props.project.dir}/${__props.project.project}-img-${img}`)}></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectGallery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProjectInfo",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const { linkClass } = {
      linkClass: inject("linkClass")
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.project.details.client) {
        _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">${ssrInterpolate(_ctx.details.clientHeading)}</p><ul class="leading-loose"><!--[-->`);
        ssrRenderList(_ctx.details.companyInfos, (info) => {
          _push(`<li class="font-general-regular text-ternary-dark dark:text-ternary-light"><span>${ssrInterpolate(info.title)}: </span><a href="#" class="${ssrRenderClass(
            info.title == "Website" || info.title == "Phone" ? "hover:underline cursor-pointer" : ""
          )}" aria-label="Project Website and Phone">${ssrInterpolate(info.details)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.details.guided) {
        _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">${ssrInterpolate(__props.project.details.guided.heading)}</p><ul class="leading-loose"><li class="font-general-regular text-ternary-dark dark:text-ternary-light"><a${ssrRenderAttr("href", __props.project.details.guided.courseUrl)}>${ssrInterpolate(__props.project.details.guided.courseTitle)}</a></li><!--[-->`);
        ssrRenderList(Object.keys(__props.project.details.guided.details), (key) => {
          _push(`<span>`);
          if (__props.project.details.guided.details[key]) {
            _push(`<li class="font-general-regular text-ternary-dark dark:text-ternary-light"><span>${ssrInterpolate(unref(capitalize)(key))}: </span><a${ssrRenderAttr("href", __props.project.details.guided.details[key].url)} class="${ssrRenderClass(unref(linkClass))}" target="_blank">${ssrInterpolate(__props.project.details.guided.details[key].name)}</a></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.details.objective) {
        _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate(__props.project.details.objective.heading)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate(__props.project.details.objective.text)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.details.tags) {
        _push(`<div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate(__props.project.details.tags.heading)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate(__props.project.details.tags.tags.join(", "))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Markdown404",
  __ssrInlineRender: true,
  setup(__props) {
    const img = new URL(`../../assets/images/404.png`, import.meta.url).href;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))}><div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"><div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"><div class="relative"><div class="absolute"><div class=""><h1 class="my-2 text-gray-800 font-bold text-2xl"> Oops!! Something went wrong </h1><p class="my-2 text-gray-800 mb-5">Sorry about that! Please visit our hompage to get where you need to go.</p></div></div><div><span class="text-9xl font-bold text-gray-300">404</span></div></div></div><div><img${ssrRenderAttr("src", unref(img))}></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/error/Markdown404.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProjectContent_vue_vue_type_style_index_0_scoped_44ac4f01_lang = "";
const ProjectContent_vue_vue_type_style_index_1_lang = "";
const _sfc_main$1 = {
  __name: "ProjectContent",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const { project } = __props;
    const Md = defineAsyncComponent({
      loader: () => {
        var _a;
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../data/projects/1/notebook.md": () => import("./assets/notebook-104bf69c.js"), "../../data/projects/coursera_py2/notebook.md": () => import("./assets/notebook-2b349b89.js"), "../../data/projects/portfolio/README.md": () => import("./assets/README-852b9942.js"), "../../data/projects/sql_airbnb_london/README.md": () => import("./assets/README-2ab81f59.js"), "../../data/projects/sql_window_func/README.md": () => import("./assets/README-b46b55cb.js") }), `../../data/projects/${project.dir}/${((_a = project.src) == null ? void 0 : _a.md) ?? "404"}.md`);
      },
      timeout: 200,
      errorComponent: _sfc_main$2
    });
    function createDescription() {
      var _a, _b;
      var description = project.title;
      if ((_b = (_a = project == null ? void 0 : project.details) == null ? void 0 : _a.tags) == null ? void 0 : _b.tags) {
        description = description + " — " + project.details.tags.tags.join(", ");
      }
      return description;
    }
    useHead({
      title: "Soliver Mazo",
      meta: creatMeta(
        createDescription(),
        project.project,
        "article",
        "Soliver Mazo"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))} data-v-44ac4f01>`);
      _push(ssrRenderComponent(_sfc_main$5, { project: __props.project }, null, _parent));
      if (__props.project.src && __props.project.src.images && __props.project.src.images.length > 0) {
        _push(ssrRenderComponent(_sfc_main$4, { project: __props.project }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="block sm:flex gap-0 sm:gap-10 mt-14" data-v-44ac4f01><div class="w-full sm:w-1/4 text-left" data-v-44ac4f01>`);
      _push(ssrRenderComponent(_sfc_main$3, { project: __props.project }, null, _parent));
      _push(`</div><div class="w-full sm:w-3/4 text-left mt-10 text-sm sm:mt-0 bg-slate-100 p-3 rounded-md overflow-auto max-h-screen" data-v-44ac4f01>`);
      _push(ssrRenderComponent(unref(Md), { class: "prose" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/project/ProjectContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-44ac4f01"]]);
const _sfc_main = {
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const img = new URL(`../../assets/images/404.png`, import.meta.url).href;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-10 sm:mt-20" }, _attrs))}><div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"><div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"><div class="relative"><div class="absolute"><div class=""><h1 class="my-2 text-gray-800 dark:text-ternary-light font-bold text-2xl"> Looks like you&#39;ve found the doorway to the great nothing </h1><p class="my-2 text-gray-800 dark:text-ternary-light mb-5">Sorry about that! Please visit our hompage to get where you need to go.</p><a href="/" class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"> Take me there! </a></div></div><div><span class="text-9xl font-bold text-gray-300 dark:text-ternary-dark">404</span></div></div></div><div><img${ssrRenderAttr("src", unref(img))}></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/error/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = [
  {
    path: "/",
    name: "home",
    component: _sfc_main$g
  },
  {
    path: "/projects",
    name: "projects",
    component: _sfc_main$f
  },
  {
    path: "/about",
    name: "about",
    component: _sfc_main$b
  },
  {
    path: "/contact",
    name: "contact",
    component: _sfc_main$7
  },
  {
    path: "/credentials",
    name: "credentials",
    component: _sfc_main$9
  },
  {
    path: "/projects",
    name: "project",
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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: _sfc_main
  }
];
library.add(
  faKaggle,
  faXmark,
  faGoogle,
  faMoon,
  faSun,
  faGithub,
  faLinkedin,
  faEnvelope,
  faMap,
  faClock,
  faLightbulb
);
const createApp = ViteSSG(
  _sfc_main$k,
  {
    routes: router,
    base: "/solivermazo"
  },
  ({ app, router: router2, routes, isClient, initialState }) => {
    const appTheme = ref("light");
    try {
      appTheme.value = localStorage.getItem("theme") ?? "light";
    } catch (error) {
    }
    app.provide("appTheme", appTheme).provide("linkClass", "text-indigo-600 dark:text-indigo-300");
    app.component("AppButton", _sfc_main$j).component("font-awesome-icon", FontAwesomeIcon);
  }
);
export {
  createApp
};
