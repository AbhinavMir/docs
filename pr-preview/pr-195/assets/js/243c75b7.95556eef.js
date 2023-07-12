"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2279],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1563:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_label:"Building with Rollkit",description:"Learn about the different ways you can build with Rollkit."},r="Building with Rollkit",o={unversionedId:"tutorials/building-with-rollkit",id:"tutorials/building-with-rollkit",title:"Building with Rollkit",description:"Learn about the different ways you can build with Rollkit.",source:"@site/docs/tutorials/building-with-rollkit.md",sourceDirName:"tutorials",slug:"/tutorials/building-with-rollkit",permalink:"/pr-preview/pr-195/docs/tutorials/building-with-rollkit",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/building-with-rollkit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Building with Rollkit",description:"Learn about the different ways you can build with Rollkit."},sidebar:"docs",previous:{title:"Tutorials",permalink:"/pr-preview/pr-195/docs/category/tutorials"},next:{title:"Beginner",permalink:"/pr-preview/pr-195/docs/category/beginner"}},s={},p=[{value:"Building from source",id:"building-from-source",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Building on Celestia",id:"building-on-celestia",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Local Development Environment",id:"local-development-environment",level:3},{value:"Arabica devnet and Mocha testnet",id:"arabica-devnet-and-mocha-testnet",level:3},{value:"Testing",id:"testing",level:2},{value:"Helpful Commands",id:"helpful-commands",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Dependency Graph",id:"dependency-graph",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-with-rollkit"},"Building with Rollkit"),(0,l.kt)("p",null,"While Rollkit is a modular framework that aims to be compatible with\na wide range of data availability layers, settlement layers, and\nexecution environments, the most supported development environment\nis building on Celestia as a data availability layer."),(0,l.kt)("h2",{id:"building-from-source"},"Building from source"),(0,l.kt)("h3",{id:"dependencies"},"Dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Requires Go version >= 1.19")),(0,l.kt)("p",null,"To build:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/rollkit/rollkit.git\ncd rollkit \ngo build -v ./...\n")),(0,l.kt)("h2",{id:"building-on-celestia"},"Building on Celestia"),(0,l.kt)("p",null,"There are currently 2 ways to build on Celestia:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Using a local development environment with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rollkit/local-celestia-devnet"},"local-celestia-devnet")),(0,l.kt)("li",{parentName:"ol"},"Using the Arabica or Mocha Celestia testnets*")),(0,l.kt)("h3",{id:"compatibility"},"Compatibility"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"network"),(0,l.kt)("th",{parentName:"tr",align:null},"rollkit"),(0,l.kt)("th",{parentName:"tr",align:null},"celestia-node"),(0,l.kt)("th",{parentName:"tr",align:null},"celestia-app"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local-celestia-devnet"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.9.0"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.11.0-rc6"),(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.0-rc7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arabica"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.9.0"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.11.0-rc6"),(0,l.kt)("td",{parentName:"tr",align:null},"v1.0.0-rc7")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rollkit/cosmos-sdk"),(0,l.kt)("th",{parentName:"tr",align:null},"rollkit/cometbft"),(0,l.kt)("th",{parentName:"tr",align:null},"rollkit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v0.46.13-rollkit-v0.9.0-no-fraud-proofs"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.0-20230524013049-75272ebaee38"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.9.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v0.45.16-rollkit-v0.9.0-no-fraud-proofs"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.0-20230524013001-2968c8b8b121"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.9.0")))),(0,l.kt)("h3",{id:"local-development-environment"},"Local Development Environment"),(0,l.kt)("p",null,"The Rollkit v0.9.0 release is compatible with the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollkit/local-celestia-devnet"},"local-celestia-devnet"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollkit/local-celestia-devnet/releases/tag/v0.11.0-rc6"},"oolong"),"\nrelease. This version combination is compatible with celestia-app\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/releases/tag/v1.0.0-rc7"},"v1.0.0-rc7"),"\nand celestia-node\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0-rc6"},"v0.11.0-rc6"),"."),(0,l.kt)("h3",{id:"arabica-devnet-and-mocha-testnet"},"Arabica devnet and Mocha testnet"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Rollkit v0.9.0 is not compatible with latest release of Mocha."))),(0,l.kt)("p",null,"The Rollkit v0.9.0 release is compatible with Arabica devnet which is\nrunning celestia-app\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/releases/tag/v1.0.0-rc7"},"v1.0.0-rc7"),"\nand celestia-node\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0-rc6"},"v0.11.0-rc6"),"."),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://golangci-lint.run/usage/install/"},"golangci-lint")),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/DavidAnson/markdownlint"},"markdownlint")),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/hadolint/hadolint"},"hadolint")),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://yamllint.readthedocs.io/en/stable/quickstart.html"},"yamllint"))),(0,l.kt)("h3",{id:"helpful-commands"},"Helpful Commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# Run unit tests\nmake test-unit\n\n# Run unit tests with the data race detector\nmake test-unit-race\n\n# Run tests with and without the data race detector\nmake test-all\n\n# Generate protobuf files (requires Docker)\nmake proto-gen\n\n# Run linters (requires golangci-lint, markdownlint, hadolint, and yamllint)\nmake lint\n\n# Lint protobuf files (requires Docker and buf)\nmake proto-lint\n\n")),(0,l.kt)("h2",{id:"contributing"},"Contributing"),(0,l.kt)("p",null,"We welcome your contributions! Everyone is welcome to contribute,\nwhether it's in the form of code,\ndocumentation, bug reports, feature requests, or anything else."),(0,l.kt)("p",null,"If you're looking for issues to work on, try looking at the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue list"),".\nIssues with this tag are suitable for a new external contributor\nand is a great way to find something you can help with!"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/CONTRIBUTING.md"},"the contributing guide")," for more details."),(0,l.kt)("p",null,"Please join our ",(0,l.kt)("a",{parentName:"p",href:"https://discord.com/invite/YsnTPcSfWQ"},"Community Discord"),"\nto ask questions, discuss your ideas, and connect with other contributors."),(0,l.kt)("h2",{id:"dependency-graph"},"Dependency Graph"),(0,l.kt)("p",null,"To see our progress and a possible future of Rollkit visit our\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/docs/specification/rollkit-dependency-graph.md"},"Dependency Graph"),"."))}u.isMDXComponent=!0}}]);