(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(94)),r={id:"git",title:"Git",sidebar_label:"Git"},l={unversionedId:"git",id:"git",isDocsHomePage:!1,title:"Git",description:"What",source:"@site/docs/segment-git.md",slug:"/git",permalink:"/docs/git",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-git.md",version:"current",sidebar_label:"Git",sidebar:"docs",previous:{title:"Exit code",permalink:"/docs/exit"},next:{title:"Golang",permalink:"/docs/golang"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[{value:"Standard",id:"standard",children:[]},{value:"Status",id:"status",children:[]},{value:"HEAD context",id:"head-context",children:[]},{value:"Upstream context",id:"upstream-context",children:[]},{value:"Colors",id:"colors",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what"},"What"),Object(o.b)("p",null,"Display ",Object(o.b)("inlineCode",{parentName:"p"},"git status")," information when in a git repository. Also works for subfolders.\nLocal changes can also shown by default using the following syntax for both the working and staging area:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"+")," added"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"~")," modified"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-")," deleted")),Object(o.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "git",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#193549",\n  "background": "#ffeb3b",\n  "properties": {\n    "display_stash_count": true,\n    "display_upstream_icon": true\n  }\n}\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"standard"},"Standard"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"branch_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to use in front of the git branch name - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE0A")),Object(o.b)("li",{parentName:"ul"},"branch_identical_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when remote and local are identical - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF0C9")),Object(o.b)("li",{parentName:"ul"},"branch_ahead_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is ahead of its remote - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF176")),Object(o.b)("li",{parentName:"ul"},"branch_behind_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is behind its remote - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF175")),Object(o.b)("li",{parentName:"ul"},"branch_gone_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when there's no remote branch - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\u2262"))),Object(o.b)("h3",{id:"status"},"Status"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"display_status: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - display the local changes or not - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"display_status_detail: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - display the local changes in detail or not - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"display_stash_count: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," show stash count or not - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"status_separator_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," icon/text to display between staging and working area changes - defaults to ",Object(o.b)("inlineCode",{parentName:"li"}," |")),Object(o.b)("li",{parentName:"ul"},"local_working_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the working area changes - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF044")),Object(o.b)("li",{parentName:"ul"},"local_staged_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the staged area changes - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF046")),Object(o.b)("li",{parentName:"ul"},"stash_count_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," icon/text to display before the stash context - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF692"))),Object(o.b)("h3",{id:"head-context"},"HEAD context"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"commit_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the commit context (detached HEAD) - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF417")),Object(o.b)("li",{parentName:"ul"},"tag_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the tag context - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF412")),Object(o.b)("li",{parentName:"ul"},"rebase_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when in a rebase - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE728 ")),Object(o.b)("li",{parentName:"ul"},"cherry_pick_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when doing a cherry-pick - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE29B ")),Object(o.b)("li",{parentName:"ul"},"merge_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," icon/text to display before the merge context - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE727 "))),Object(o.b)("h3",{id:"upstream-context"},"Upstream context"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"display_upstream_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - display upstrean icon or not - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"github_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Github - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF408 ")),Object(o.b)("li",{parentName:"ul"},"gitlab_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Gitlab - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF296 ")),Object(o.b)("li",{parentName:"ul"},"bitbucket_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Bitbucket - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uF171 ")),Object(o.b)("li",{parentName:"ul"},"git_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is not known/mapped - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uE5FB "))),Object(o.b)("h3",{id:"colors"},"Colors"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"working_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - foreground color for the working area status - defaults to segment foreground"),Object(o.b)("li",{parentName:"ul"},"staging_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - foreground color for the staging area status - defaults to segment foreground"),Object(o.b)("li",{parentName:"ul"},"status_colors_enabled: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - color the segment based on the repository status - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"color_background: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - color background or foreground - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"local_changes_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - segment color when there are local changes - defaults to segment\nforeground/background (see ",Object(o.b)("inlineCode",{parentName:"li"},"color_background"),")"),Object(o.b)("li",{parentName:"ul"},"ahead_and_behind_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - segment color when the branch is ahead and behind -\ndefaults to segment foreground/background (see ",Object(o.b)("inlineCode",{parentName:"li"},"color_background"),")"),Object(o.b)("li",{parentName:"ul"},"behind_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - segment color when the branch is behind - defaults to segment\nforeground/background (see ",Object(o.b)("inlineCode",{parentName:"li"},"color_background"),")"),Object(o.b)("li",{parentName:"ul"},"ahead_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - segment color when the branch is ahead - defaults to segment\nforeground/background (see ",Object(o.b)("inlineCode",{parentName:"li"},"color_background"),")")))}d.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||p[u]||o;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);