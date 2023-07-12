"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),o=a(7294),r=a(6010),s=a(2389),l=a(7392),i=a(7094),c=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:s,values:p,groupId:d,className:h}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=p??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(w,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,i.U)(),[y,N]=(0,o.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&w.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=w[a].value;n!==y&&(T(t),N(n),null!=d&&f(d,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},w.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:x},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,s.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},5753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),s=a(5162);const l={sidebar_label:"CosmWasm tutorial",description:"Build a sovereign rollup with CosmWasm, Celestia, and Rollkit"},i="\ud83d\uddde\ufe0f CosmWasm rollup",c={unversionedId:"tutorials/cosmwasm",id:"tutorials/cosmwasm",title:"\ud83d\uddde\ufe0f CosmWasm rollup",description:"Build a sovereign rollup with CosmWasm, Celestia, and Rollkit",source:"@site/docs/tutorials/cosmwasm.mdx",sourceDirName:"tutorials",slug:"/tutorials/cosmwasm",permalink:"/pr-preview/pr-195/docs/tutorials/cosmwasm",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/cosmwasm.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm tutorial",description:"Build a sovereign rollup with CosmWasm, Celestia, and Rollkit"},sidebar:"docs",previous:{title:"Wordle tutorial",permalink:"/pr-preview/pr-195/docs/tutorials/wordle"},next:{title:"Advanced",permalink:"/pr-preview/pr-195/docs/category/advanced"}},m={},u=[{value:"\ud83d\udcbb CosmWasm dependency installations",id:"-cosmwasm-dependency-installations",level:2},{value:"\ud83d\udee0\ufe0f Environment setup",id:"\ufe0f-environment-setup",level:3},{value:"\ud83c\udfc3 Golang dependency",id:"-golang-dependency",level:3},{value:"\ud83e\udd80 Rust installation",id:"-rust-installation",level:3},{value:"\ud83d\udd28 Rustup",id:"-rustup",level:4},{value:"\ud83d\udc33 Docker installation",id:"-docker-installation",level:3},{value:"\ud83d\udcbb Wasmd installation",id:"-wasmd-installation",level:3},{value:"\u2728 Celestia node",id:"-celestia-node",level:3},{value:"\ud83c\udf0c Setting up your environment for CosmWasm on Celestia",id:"-setting-up-your-environment-for-cosmwasm-on-celestia",level:2},{value:"\ud83d\uddde\ufe0f Initializing CosmWasm rollup with a bash script",id:"\ufe0f-initializing-cosmwasm-rollup-with-a-bash-script",level:3},{value:"\ud83d\udca0 Optional: see what&#39;s inside the script",id:"-optional-see-whats-inside-the-script",level:3},{value:"\ud83d\udcd2 Contract deployment on CosmWasm with Rollkit",id:"-contract-deployment-on-cosmwasm-with-rollkit",level:2},{value:"\ud83e\udd16 Compile the smart contract",id:"-compile-the-smart-contract",level:3},{value:"\ud83e\uddea Unit tests",id:"-unit-tests",level:3},{value:"\ud83c\udfce\ufe0f Optimized smart contract",id:"\ufe0f-optimized-smart-contract",level:3},{value:"\ud83d\ude80 Contract deployment",id:"-contract-deployment",level:3},{value:"\ud83c\udf1f Contract interaction on CosmWasm with Celestia",id:"-contract-interaction-on-cosmwasm-with-celestia",level:2},{value:"\ud83d\udd0e Contract querying",id:"-contract-querying",level:3},{value:"\ud83d\udcc3 Contract instantiation",id:"-contract-instantiation",level:3},{value:"\ud83d\udcc4 Contract interaction",id:"-contract-interaction",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-cosmwasm-rollup"},"\ud83d\uddde\ufe0f CosmWasm rollup"),(0,o.kt)("p",null,"CosmWasm is a smart contracting platform built for the Cosmos\necosystem by making use of ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org"},"WebAssembly")," (Wasm)\nto build smart contracts for Cosmos-SDK. In this tutorial, we will be\nexploring how to integrate CosmWasm with Celestia's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/concepts/how-celestia-works/data-availability-layer"},"data availability layer"),"\nusing Rollkit."),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial will explore developing with Rollkit,\nwhich is still in Alpha stage. If you run into bugs, please write a Github\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/issues/new"},"Issue ticket"),"\nor let us know in our ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/rollkit"},"Telegram"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Celestia's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/arabica-devnet"},"Arabica devnet"),".")),(0,o.kt)("p",null,"You can learn more about CosmWasm ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/"},"here"),"."),(0,o.kt)("p",null,"In this tutorial, we will going over the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-your-environment-for-cosmwasm-on-celestia"},"Setting up your dependencies for your CosmWasm smart contracts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#wasmd-installation"},"Setting up Rollkit on CosmWasm")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#contract-interaction-on-cosmwasm-with-celestia"},"Instantiate a local network for your CosmWasm chain connected to Celestia")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#contract-deployment-on-cosmwasm-with-rollkit"},"Deploying a Rust smart contract to CosmWasm chain")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#contract-interaction-on-cosmwasm-with-celestia"},"Interacting with the smart contract"))),(0,o.kt)("p",null,"The smart contract we will use for this tutorial is one provided by\nthe CosmWasm team for Nameservice purchasing."),(0,o.kt)("p",null,"You can check out the contract ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice"},"here"),"."),(0,o.kt)("p",null,"How to write the Rust smart contract for Nameservice is outside the scope of\nthis tutorial. In the future we will add more tutorials for writing CosmWasm\nsmart contracts for Celestia."),(0,o.kt)("h2",{id:"-cosmwasm-dependency-installations"},"\ud83d\udcbb CosmWasm dependency installations"),(0,o.kt)("h3",{id:"\ufe0f-environment-setup"},"\ud83d\udee0\ufe0f Environment setup"),(0,o.kt)("p",null,"For this tutorial, we will be using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," as helpful\ntools. You can follow the guide on installing them\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment/#-install-wget-and-jq"},"here"),"."),(0,o.kt)("h3",{id:"-golang-dependency"},"\ud83c\udfc3 Golang dependency"),(0,o.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,o.kt)("p",null,"You can install Golang\nby following our tutorial ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment#install-golang"},"here"),"."),(0,o.kt)("h3",{id:"-rust-installation"},"\ud83e\udd80 Rust installation"),(0,o.kt)("h4",{id:"-rustup"},"\ud83d\udd28 Rustup"),(0,o.kt)("p",null,"First, before installing Rust, you would need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,o.kt)("p",null,"On Mac and Linux systems, here are the commands for installing it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You will see a note similar to below after installing Rust:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Rust is installed now. Great!\n\nTo get started you may need to restart your current shell.\nThis would reload your PATH environment variable to include\nCargo\'s bin directory ($HOME/.cargo/bin).\n\nTo configure your current shell, run:\nsource "$HOME/.cargo/env"\n')),(0,o.kt)("p",{parentName:"admonition"},"If you don't follow the guidance, you won't be able to continue with the\ntutorial!")),(0,o.kt)("p",null,"After installation, follow the commands here to setup Rust."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup default stable\ncargo version\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,o.kt)("p",null,"Your output should look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"info: using existing install for 'stable-aarch64-apple-darwin'\ninfo: default toolchain set to 'stable-aarch64-apple-darwin'\n\n  stable-aarch64-apple-darwin unchanged - rustc 1.65.0 (897e37553 2022-11-02)\n  \ncargo 1.65.0 (4bc8f24d3 2022-10-20)\naarch64-apple-darwin\ninfo: downloading component 'rust-std' for 'wasm32-unknown-unknown'\ninfo: installing component 'rust-std' for 'wasm32-unknown-unknown'\n")),(0,o.kt)("h3",{id:"-docker-installation"},"\ud83d\udc33 Docker installation"),(0,o.kt)("p",null,"We will be using Docker later in this tutorial for compiling a smart contract\nto use a small footprint. We recommend installing Docker on your machine."),(0,o.kt)("p",null,"Examples on how to install it on Linux are found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu"},"here"),".\nFind the right instructions specific for\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"your OS here"),"."),(0,o.kt)("h3",{id:"-wasmd-installation"},"\ud83d\udcbb Wasmd installation"),(0,o.kt)("p",null,"Here, we are going to pull down the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," repository and replace Tendermint\nwith Rollkit. Rollkit is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's data availability network."),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"local-devnet",label:"Local Devnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\ngit fetch --tags\ngit checkout v0.27.0\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.45.16-rollkit-v0.9.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/rollkit/cometbft@v0.0.0-20230524013001-2968c8b8b121\ngo mod tidy -compat=1.17\ngo mod download\nmake install\n"))),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica Devnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\ngit fetch --tags\ngit checkout v0.27.0\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.45.16-rollkit-v0.9.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/rollkit/cometbft@v0.0.0-20230524013001-2968c8b8b121\ngo mod tidy -compat=1.17\ngo mod download\nmake install\n")))),(0,o.kt)("h3",{id:"-celestia-node"},"\u2728 Celestia node"),(0,o.kt)("p",null,"You will need a light node running with test tokens on\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/blockspace-race"},"Blockspace race testnet")," in order\nto complete this tutorial. Please complete the tutorial\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"here"),",\nor start up your node."),(0,o.kt)("h2",{id:"-setting-up-your-environment-for-cosmwasm-on-celestia"},"\ud83c\udf0c Setting up your environment for CosmWasm on Celestia"),(0,o.kt)("p",null,"Now the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," binary is built, we need to setup a local network\nthat communicates between ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," and Rollkit."),(0,o.kt)("h3",{id:"\ufe0f-initializing-cosmwasm-rollup-with-a-bash-script"},"\ud83d\uddde\ufe0f Initializing CosmWasm rollup with a bash script"),(0,o.kt)("p",null,"We have a handy ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/tree/main/docs/scripts/cosmwasm"},"here"),"."),(0,o.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# From inside the `wasmd` directory\nwget https://raw.githubusercontent.com/rollkit/docs/main/docs/scripts/cosmwasm/init.sh\n")),(0,o.kt)("p",null,"This copies over our ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nCosmWasm rollup."),(0,o.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the CosmWasm Rollup."),(0,o.kt)("p",null,"You can initialize the script with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,o.kt)("p",null,"With that, we have kickstarted our ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," network!"),(0,o.kt)("h3",{id:"-optional-see-whats-inside-the-script"},"\ud83d\udca0 Optional: see what's inside the script"),(0,o.kt)("p",null,"You can skip this section, but it is important to know\nhow Rollkit is initializing the cosmwasm rollup."),(0,o.kt)("p",null,"View the script\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/tree/main/docs/scripts/cosmwasm/init.sh"},"here"),"."),(0,o.kt)("h2",{id:"-contract-deployment-on-cosmwasm-with-rollkit"},"\ud83d\udcd2 Contract deployment on CosmWasm with Rollkit"),(0,o.kt)("h3",{id:"-compile-the-smart-contract"},"\ud83e\udd16 Compile the smart contract"),(0,o.kt)("p",null,"In a new terminal instance, we will run the following commands to pull down the\nNameservice smart contract and compile it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/InterWasm/cw-contracts\ncd cw-contracts\ncd contracts/nameservice\ncargo wasm\n")),(0,o.kt)("p",null,"The compiled contract is outputted to:\n",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),"."),(0,o.kt)("h3",{id:"-unit-tests"},"\ud83e\uddea Unit tests"),(0,o.kt)("p",null,"If we want to run tests, we can do so with the following command in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo unit-test\n")),(0,o.kt)("h3",{id:"\ufe0f-optimized-smart-contract"},"\ud83c\udfce\ufe0f Optimized smart contract"),(0,o.kt)("p",null,"Because we are deploying the compiled smart contract to ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd"),",\nwe want it to be as small as possible."),(0,o.kt)("p",null,"The CosmWasm team provides a tool called ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-optimizer")," which we need\n",(0,o.kt)("a",{parentName:"p",href:"#docker-installation"},"Docker")," for in order to compile."),(0,o.kt)(r.Z,{groupId:"operating-system",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"amd",label:"AMD Machines",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,o.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),".")),(0,o.kt)(s.Z,{value:"arm",label:"ARM Machines",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run --platform linux/arm64 --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer-arm64:0.12.8\n')),(0,o.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice-aarch64.wasm"),"."))),(0,o.kt)("h3",{id:"-contract-deployment"},"\ud83d\ude80 Contract deployment"),(0,o.kt)("p",null,"Let's now deploy our smart contract!"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"amd",label:"AMD Machines",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from celeswasm-key --keyring-backend test --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 --node http://127.0.0.1:26657 --output json -y | jq -r '.txhash') && echo $TX_HASH\n"))),(0,o.kt)(s.Z,{value:"arm",label:"ARM Machines",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice-aarch64.wasm --from celeswasm-key --keyring-backend test --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 --node http://127.0.0.1:26657 --output json -y | jq -r '.txhash') && echo $TX_HASH\n")))),(0,o.kt)("p",null,"This will get you the transaction hash for the smart contract deployment. Given\nwe are using Rollkit, there will be a delay on the transaction being included\ndue to Rollkit waiting on Celestia's data availability layer to confirm the block\nhas been included before submitting a new block."),(0,o.kt)("admonition",{title:"important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If you run into errors with variables on the previous command,\nor commands in the remainder of the tutorial, cross-reference\nthe variables in the command with the variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," script.")),(0,o.kt)("h2",{id:"-contract-interaction-on-cosmwasm-with-celestia"},"\ud83c\udf1f Contract interaction on CosmWasm with Celestia"),(0,o.kt)("p",null,"In the previous steps, we have stored out contract's tx hash in an\nenvironment variable for later use."),(0,o.kt)("p",null,"Because of the longer time periods of submitting transactions via Rollkit\ndue to waiting on Celestia's data availability layer to confirm block inclusion,\nwe will need to query our  tx hash directly to get information about it."),(0,o.kt)("h3",{id:"-contract-querying"},"\ud83d\udd0e Contract querying"),(0,o.kt)("p",null,"Let's start by querying our transaction hash for its code ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH --chain-id celeswasm --node http://127.0.0.1:26657 --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,o.kt)("p",null,"This will give us back the Code ID of the deployed contract."),(0,o.kt)("p",null,"In our case, since it's the first contract deployed on our local network,\nthe value is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("p",null,"Now, we can take a look at the contracts instantiated by this Code ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query wasm list-contract-by-code $CODE_ID --chain-id celeswasm --node http://127.0.0.1:26657 --output json\n")),(0,o.kt)("p",null,"We get the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,o.kt)("h3",{id:"-contract-instantiation"},"\ud83d\udcc3 Contract instantiation"),(0,o.kt)("p",null,"We start instantiating the contract by writing up the following ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT")," message\nfor nameservice contract. Here, we are specifying that ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase_price")," of a name\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"100uwasm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_price")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"999uwasm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from celeswasm-key --keyring-backend test --label "name service" --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 -y --no-admin --node http://127.0.0.1:26657\n')),(0,o.kt)("h3",{id:"-contract-interaction"},"\ud83d\udcc4 Contract interaction"),(0,o.kt)("p",null,"Now that we instantiated it, we can interact further with the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query wasm list-contract-by-code $CODE_ID --chain-id celeswasm --output json --node http://127.0.0.1:26657\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID --chain-id celeswasm --output json --node http://127.0.0.1:26657 | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract --node http://127.0.0.1:26657 $CONTRACT --chain-id celeswasm\nwasmd query bank balances --node http://127.0.0.1:26657 $CONTRACT --chain-id celeswasm\n")),(0,o.kt)("p",null,"This allows us to see the contract address, contract details, and\nbank balances."),(0,o.kt)("p",null,"Your output will look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"contracts":["wasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d"],"pagination":{"next_key":null,"total":"0"}}\nwasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d\naddress: wasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d\ncontract_info:\n  admin: ""\n  code_id: "1"\n  created: null\n  creator: wasm1y9ceqvnsnm9xtcdmhrjvv4rslgwfzmrzky2c5z\n  extension: null\n  ibc_port_id: ""\n  label: name service\nbalances: []\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("p",null,"Now, let's register a name to the contract for our wallet address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from celeswasm-key --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 --node http://127.0.0.1:26657 --keyring-backend test -y\n')),(0,o.kt)("p",null,"Your output will look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DEIP --keyring-backend test -y\ngas estimate: 167533\ncode: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: C147257485B72E7FFA5FDB943C94CE951A37817554339586FFD645AD2AA397C3\n')),(0,o.kt)("p",null,"If you try to register the same name again, you'll see an expected error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Error: rpc error: code = Unknown desc = rpc error: code = Unknown desc = failed to execute message; message index: 0: Name has been taken (name fred): execute wasm contract failed [CosmWasm/wasmd/x/wasm/keeper/keeper.go:364] With gas wanted: '0' and gas used: '123809' : unknown request\n")),(0,o.kt)("p",null,"Next, query the owner of the name record:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'NAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" --chain-id celeswasm --node http://127.0.0.1:26657 --output json\n')),(0,o.kt)("p",null,"You'll see the owner's address in a JSON response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"data":{"address":"wasm1y9ceqvnsnm9xtcdmhrjvv4rslgwfzmrzky2c5z"}}\n')),(0,o.kt)("p",null,"With that, we have instantiated and interacted with the CosmWasm nameservice\nsmart contract using Celestia!"))}d.isMDXComponent=!0}}]);