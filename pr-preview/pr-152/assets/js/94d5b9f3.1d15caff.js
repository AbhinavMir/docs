"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=l,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_label:"Bitcoin rollup tutorial",description:"Build a sovereign rollup with Ethermint (EVM + Cosmos SDK), Bitcoin and Rollkit"},o="\u20bf Bitcoin rollup tutorial",i={unversionedId:"tutorials/bitcoin",id:"tutorials/bitcoin",title:"\u20bf Bitcoin rollup tutorial",description:"Build a sovereign rollup with Ethermint (EVM + Cosmos SDK), Bitcoin and Rollkit",source:"@site/docs/tutorials/bitcoin.md",sourceDirName:"tutorials",slug:"/tutorials/bitcoin",permalink:"/pr-preview/pr-152/docs/tutorials/bitcoin",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/bitcoin.md",tags:[],version:"current",frontMatter:{sidebar_label:"Bitcoin rollup tutorial",description:"Build a sovereign rollup with Ethermint (EVM + Cosmos SDK), Bitcoin and Rollkit"}},s={},c=[{value:"\u2600\ufe0fIntroduction",id:"\ufe0fintroduction",level:2},{value:"\ud83d\udcd6 The stack",id:"-the-stack",level:3},{value:"\ud83d\udcbb Prerequisites",id:"-prerequisites",level:2},{value:"\ud83d\udee0\ufe0f Dependency setup",id:"\ufe0f-dependency-setup",level:2},{value:"\ud83c\udfc3 Golang",id:"-golang",level:3},{value:"\u2692\ufe0f Foundry",id:"\ufe0f-foundry",level:3},{value:"\ud83e\ude99 Install Bitcoin",id:"-install-bitcoin",level:3},{value:"\ud83d\udfe2 Running a local Bitcoin network",id:"-running-a-local-bitcoin-network",level:2},{value:"\ud83d\udc5b Create a wallet for the chain",id:"-create-a-wallet-for-the-chain",level:3},{value:"\ud83c\udfac Start generating blocks",id:"-start-generating-blocks",level:3},{value:"\ud83e\uddca Block height",id:"-block-height",level:4},{value:"\ud83e\uddca Block hash",id:"-block-hash",level:4},{value:"\ud83e\uddca Block header",id:"-block-header",level:4},{value:"\ud83c\udfac Restarting the local network",id:"-restarting-the-local-network",level:4},{value:"\ud83c\udfc3\u200d\u2640\ufe0f Running the Ethermint rollup",id:"\ufe0f-running-the-ethermint-rollup",level:2},{value:"\u26a1\ufe0f Initialize development environment",id:"\ufe0f-initialize-development-environment",level:3},{value:"\ud83d\udcd2 Updating the contract and tests",id:"-updating-the-contract-and-tests",level:3},{value:"\ud83d\udcdc Updating the deployment script",id:"-updating-the-deployment-script",level:3},{value:"\ud83c\udfe0 Deploying locally",id:"-deploying-locally",level:3},{value:"\ud83e\uddea Deploying to the Ethermint sovereign rollup",id:"-deploying-to-the-ethermint-sovereign-rollup",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-bitcoin-rollup-tutorial"},"\u20bf Bitcoin rollup tutorial"),(0,l.kt)("h2",{id:"\ufe0fintroduction"},"\u2600\ufe0fIntroduction"),(0,l.kt)("p",null,"In this tutorial, we will explore how to use Rollkit to create sovereign rollups on Bitcoin. First, we will install Bitcoin Core to run a local testnet. Then, we will install and set up a Rollkit node to work with Bitcoin as a data availability layer. Lastly, we'll look at how to create a custom EVM execution environment and how to deploy a sovereign rollup on Bitcoin using Rollkit."),(0,l.kt)("p",null,"By the end of this tutorial, you will have a good understanding of how Rollkit works and how to create sovereign rollups on Bitcoin using Rollkit. You will also have the knowledge and skills needed to customize Rollkit with different execution environments and data availability layers, opening up new possibilities for creating scalable and efficient blockchain applications."),(0,l.kt)("p",null,"Read more in our ",(0,l.kt)("a",{parentName:"p",href:"../../../blog/sovereign-rollups-on-bitcoin"},"blog post"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rollkit-bitcoin",src:n(2626).Z,width:"3000",height:"2708"})),(0,l.kt)("h3",{id:"-the-stack"},"\ud83d\udcd6 The stack"),(0,l.kt)("p",null,"Sovereign rollups on Bitcoin are made possible through a module that allows Rollkit rollups to use Bitcoin for data availability. This integration opens up possibilities for developers to create rollups with arbitrary execution environments that inherit Bitcoin\u2019s data availability guarantees and security guarantees."),(0,l.kt)("p",null,"The Taproot upgrade and ",(0,l.kt)("a",{parentName:"p",href:"https://ordinals.com/"},"Ordinals")," usage of Bitcoin for publishing arbitrary data made it possible to integrate Bitcoin as a data availability layer into Rollkit. The modular design of Rollkit allows for easy integration of new data availability layers, making it possible to deploy sovereign rollups on Bitcoin."),(0,l.kt)("p",null,"The goal of Rollkit is to make it easy to build and customize rollups, enabling developers to build sovereign rollups on Bitcoin or customize Rollkit with different execution environments and data availability layers."),(0,l.kt)("h2",{id:"-prerequisites"},"\ud83d\udcbb Prerequisites"),(0,l.kt)("p",null,"An Ubuntu machine with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"8GB RAM"),(0,l.kt)("li",{parentName:"ul"},"160 GB SSD"),(0,l.kt)("li",{parentName:"ul"},"Ubuntu 22.10"),(0,l.kt)("li",{parentName:"ul"},"4 core AMD CPU")),(0,l.kt)("h2",{id:"\ufe0f-dependency-setup"},"\ud83d\udee0\ufe0f Dependency setup"),(0,l.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade -y\n")),(0,l.kt)("p",null,"These are essential packages that are necessary to execute many tasks like downloading files, compiling, and monitoring the nodes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu snapd npm -y\n")),(0,l.kt)("p",null,"Now, we will install the remaining dependencies."),(0,l.kt)("h3",{id:"-golang"},"\ud83c\udfc3 Golang"),(0,l.kt)("p",null,"We will use golang to build and run our test networks. Install it for AMD with these commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\necho "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n')),(0,l.kt)("h3",{id:"\ufe0f-foundry"},"\u2692\ufe0f Foundry"),(0,l.kt)("p",null,"Install Foundry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://foundry.paradigm.xyz/ | bash\n")),(0,l.kt)("p",null,"Set the path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /root/.bashrc\n")),(0,l.kt)("p",null,"Run this to finish the installation of Foundry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"foundryup\n")),(0,l.kt)("h3",{id:"-install-bitcoin"},"\ud83e\ude99 Install Bitcoin"),(0,l.kt)("p",null,"Running the rollup requires a local regtest Bitcoin node. You can set this up by running the following commands."),(0,l.kt)("p",null,"Install Bitcoin Core:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install bitcoin-core\n")),(0,l.kt)("p",null,"Check version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli --version\n")),(0,l.kt)("h2",{id:"-running-a-local-bitcoin-network"},"\ud83d\udfe2 Running a local Bitcoin network"),(0,l.kt)("p",null,"Set up the config for regtest (local network):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'bitcoin-core.daemon "-chain=regtest" "-rpcport=18332" "-rpcuser=rpcuser" "-rpcpassword=rpcpass" "-fallbackfee=0.000001" "-txindex=1"\n')),(0,l.kt)("h3",{id:"-create-a-wallet-for-the-chain"},"\ud83d\udc5b Create a wallet for the chain"),(0,l.kt)("p",null,"Open up a new terminal and run the following to create a wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass createwallet w1\n")),(0,l.kt)("p",null,"Your output will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "name": "w1",\n  "warning": ""\n}\n')),(0,l.kt)("h3",{id:"-start-generating-blocks"},"\ud83c\udfac Start generating blocks"),(0,l.kt)("p",null,"Now, generate a new address and mine 101 blocks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export COINBASE=$(bitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass getnewaddress)\nbitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass generatetoaddress 101 $COINBASE\n")),(0,l.kt)("p",null,"Next, we'll mine a block every second."),(0,l.kt)("p",null,"Add this script and remember where you placed it, I am putting it in my root directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Script to generate a new block every second\n# Put this script at the root of your unpacked folder\n#!/bin/bash\n\necho "Generating a block every second. Press [CTRL+C] to stop.."\n\naddress=`bitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass getnewaddress`\n\nwhile :\ndo\n        echo "Generate a new block `date \'+%d/%m/%Y %H:%M:%S\'`"\n        bitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass generatetoaddress 1 $address\n        sleep 1\ndone\n')),(0,l.kt)("p",null,"Run the following from where you placed your ",(0,l.kt)("inlineCode",{parentName:"p"},"start.sh")," script.\nStart generating blocks by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash start.sh\n")),(0,l.kt)("h4",{id:"-block-height"},"\ud83e\uddca Block height"),(0,l.kt)("p",null,"Check the current block height:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli -regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass getblockcount\n")),(0,l.kt)("p",null,"Your output will look similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"4980\n")),(0,l.kt)("p",null,"Set a variable for the common flags being used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export FLAGS="-regtest -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpass"\n')),(0,l.kt)("h4",{id:"-block-hash"},"\ud83e\uddca Block hash"),(0,l.kt)("p",null,"Check the latest block hash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli $FLAGS getblockhash 4980\n")),(0,l.kt)("p",null,"Your output will be the block hash of the height you first queried:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"1d7e98aec3085b615c7c71659768fa42e774a87ab5981597e99794d240fb3db5\n")),(0,l.kt)("p",null,"Set the block hash as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export HASH=1d7e98aec3085b615c7c71659768fa42e774a87ab5981597e99794d240fb3db5\n")),(0,l.kt)("h4",{id:"-block-header"},"\ud83e\uddca Block header"),(0,l.kt)("p",null,"Now to get the block header, run the following command (be sure to replace the hash with yours):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli $FLAGS getblockheader $HASH\n")),(0,l.kt)("p",null,"Now to finish the exercise, query the height from the block header and the hash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bitcoin-core.cli $FLAGS getblockheader $HASH | jq '.height'\n")),(0,l.kt)("h4",{id:"-restarting-the-local-network"},"\ud83c\udfac Restarting the local network"),(0,l.kt)("p",null,"In the case that you are starting your regtest network again, you can use the following command to clear the old chain history:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ${LOCATION OF .bitcoin folder}\n")),(0,l.kt)("h2",{id:"\ufe0f-running-the-ethermint-rollup"},"\ud83c\udfc3\u200d\u2640\ufe0f Running the Ethermint rollup"),(0,l.kt)("p",null,"Clone Ethermint:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/celestiaorg/ethermint.git\ncd ethermint\ngit checkout bitcoin-da\nmake install\n")),(0,l.kt)("p",null,"Initialize the chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,l.kt)("p",null,"Set variables for starting the chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export NAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\n")),(0,l.kt)("p",null,"Start the chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ethermintd start --rollkit.aggregator true --rollkit.da_layer bitcoin --rollkit.da_config=\'{"host":"127.0.0.1:18332","user":"rpcuser","pass":"rpcpass","http_post_mode":true,"disable_tls":true}\' --rollkit.namespace_id $NAMESPACE_ID --rollkit.da_start_height 1\n')),(0,l.kt)("p",null,"Congratulations! Now that you have your Ethermint and Bitcoin rollup running, you're ready to deploy some smart contracts to the EVM!"),(0,l.kt)("h3",{id:"\ufe0f-initialize-development-environment"},"\u26a1\ufe0f Initialize development environment"),(0,l.kt)("p",null,"First, be sure you have\n",(0,l.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/getting-started/installation.html"},"installed Foundry"),"\non your local development environment."),(0,l.kt)("p",null,"Next, create a new project and change into the directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"forge init bitcoin-ethermint-app\ncd bitcoin-ethermint-app\n")),(0,l.kt)("p",null,"Foundry has created an example smart contract located at ",(0,l.kt)("inlineCode",{parentName:"p"},"src/Counter.sol"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We will run the commands for the Foundry portion of this\ntutorial in the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/bitcoin-ethermint-app/")," directory.")),(0,l.kt)("h3",{id:"-updating-the-contract-and-tests"},"\ud83d\udcd2 Updating the contract and tests"),(0,l.kt)("p",null,"Let's update the contracts to include a basic counter example. Open the\n",(0,l.kt)("inlineCode",{parentName:"p"},"Counter.sol")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," directory and add the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Counter {\n    int private count;\n    \n    constructor(int _count) {\n        count = _count;\n    }\n\n    function incrementCounter() public {\n        count += 1;\n    }\n    function decrementCounter() public {\n        count -= 1;\n    }\n\n    function getCount() public view returns (int) {\n        return count;\n    }\n}\n")),(0,l.kt)("p",null,"Next, let's create a test for this contract."),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"test/Counter.T.Sol")," and update the code with the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport \"forge-std/Test.sol\";\nimport 'src/Counter.sol';\n\ncontract CounterTest is Test {\n    Counter counter;\n    function setUp() public {\n        counter = new Counter(10);\n    }\n\n    function testGetCount() public {\n        int value = counter.getCount();\n        assertEq(value, 10);\n        emit log_int(value);\n    }\n\n    function testIncrement() public {\n        counter.incrementCounter();\n        counter.incrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 12);\n        emit log_int(value);\n    }\n\n    function testDecrement() public {\n        counter.decrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 9);\n        emit log_int(value);\n    }\n}\n")),(0,l.kt)("p",null,"Foundry uses ",(0,l.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html"},"Dappsys Test")," to\nprovide basic logging and assertion functionality. It's included in the Forge\nStandard Library."),(0,l.kt)("p",null,"Here, we are using ",(0,l.kt)("inlineCode",{parentName:"p"},"assertEq")," to assert equality. You can view all of the assertion\nfunctions available\n",(0,l.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html?highlight=log_int#asserting"},"here"),"."),(0,l.kt)("p",null,"Next, we can test the contract using ",(0,l.kt)("strong",{parentName:"p"},"Forge")," with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"forge test -vv\n")),(0,l.kt)("p",null,"A successful test will have output similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[\u280a] Compiling...\n[\u2830] Installing solc version 0.8.17\n[\u2812] Successfully installed solc 0.8.17\n[\u2806] Compiling 18 files with 0.8.17\n[\u2811] Solc 0.8.17 finished in 3.59s\nCompiler run successful\n\nRunning 3 tests for test/Counter.t.sol:ContractTest\n[PASS] testDecrement() (gas: 12350)\nLogs:\n  9\n\n[PASS] testGetCount() (gas: 8510)\nLogs:\n  10\n\n[PASS] testIncrement() (gas: 13285)\nLogs:\n  12\n\nTest result: ok. 3 passed; 0 failed; finished in 2.24ms\n")),(0,l.kt)("h3",{id:"-updating-the-deployment-script"},"\ud83d\udcdc Updating the deployment script"),(0,l.kt)("p",null,"Now that we've tested the contract, let's try deploying it locally using\n",(0,l.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/tutorials/solidity-scripting.html"},"Solidity Scripting"),"."),(0,l.kt)("p",null,"To do so, update the deloyment script at ",(0,l.kt)("inlineCode",{parentName:"p"},"script/Counter.s.sol")," with the\nfollowing code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport "forge-std/Script.sol";\n\nimport {Counter} from "src/Counter.sol";\n\ncontract CounterScript is Script {\n    function setUp() public {}\n\n    function run() public {\n        vm.startBroadcast();\n        new Counter(10);\n        vm.stopBroadcast();\n    }\n}\n')),(0,l.kt)("p",null,"Now we can use this script to deploy our smart contract to either a live or\ntest network."),(0,l.kt)("h3",{id:"-deploying-locally"},"\ud83c\udfe0 Deploying locally"),(0,l.kt)("p",null,"Next start Anvil, the local testnet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"anvil --port 9545\n")),(0,l.kt)("p",null,"Once started, Anvil will give you a local RPC endpoint as well as a handful\nof Private Keys and Accounts that you can use."),(0,l.kt)("p",null,"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"ANVIL_KEY")," with one of the private keys generated by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ANVIL_KEY=<anvil-private-key>\n")),(0,l.kt)("p",null,"And set the RPC URL as an environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export RPC_URL=http://127.0.0.1:9545\n")),(0,l.kt)("p",null,"We can now use the local RPC along with one of the private keys to deploy locally:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Counter.s.sol:CounterScript --fork-url \\\n$RPC_URL  --private-key $ANVIL_KEY --broadcast\n")),(0,l.kt)("p",null,"Once the contract has been deployed locally, Anvil will log out the contract address."),(0,l.kt)("p",null,"Next, set the contract address as an environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<contract-address>\n")),(0,l.kt)("p",null,"We can then test sending transactions to it with ",(0,l.kt)("inlineCode",{parentName:"p"},"cast send"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--private-key $ANVIL_KEY --rpc-url $RPC_URL\n')),(0,l.kt)("p",null,"We can then perform read operations with ",(0,l.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getCount()(int)" --rpc-url $RPC_URL\n')),(0,l.kt)("h3",{id:"-deploying-to-the-ethermint-sovereign-rollup"},"\ud83e\uddea Deploying to the Ethermint sovereign rollup"),(0,l.kt)("p",null,"Now that we've deployed and tested locally, we can deploy to our\nEthermint chain."),(0,l.kt)("p",null,"First, we will need to export the private key generated by\nthe ethermint ",(0,l.kt)("inlineCode",{parentName:"p"},"init.sh")," script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=$(ethermintd keys unsafe-export-eth-key mykey --keyring-backend test)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: Here, the key name from ",(0,l.kt)("inlineCode",{parentName:"p"},"init.sh")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"mykey")," but you can modify\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"init.sh")," to change the name of your key.")),(0,l.kt)("p",null,"Now, we can start deploying the smart contract to our Ethermint chain."),(0,l.kt)("p",null,"To do so, run the following script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Counter.s.sol:CounterScript \\\n--rpc-url http://127.0.0.1:8545 --private-key $PRIVATE_KEY --broadcast\n")),(0,l.kt)("p",null,"Set the contract address in the output as the ",(0,l.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDRESS")," variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<new-contract-address>\n")),(0,l.kt)("p",null,"Once the contract has been deployed to the Ethermint rollup, we can\nuse ",(0,l.kt)("inlineCode",{parentName:"p"},"cast send")," to test sending transactions to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--rpc-url http://127.0.0.1:8545 --private-key $PRIVATE_KEY \n')),(0,l.kt)("p",null,"We can then perform read operations with ",(0,l.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getCount()(int)" --rpc-url http://127.0.0.1:8545\n')))}u.isMDXComponent=!0},2626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rollkit-bitcoin-1-4fdcb47746b24626aed8f6689035a4b7.png"}}]);