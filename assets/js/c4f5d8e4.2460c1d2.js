"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195],{8215:function(e,t,a){var l=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(3117),n=a(7294),r=a(2389),i=a(9443);var c=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(6681),o=a(6010),u="tabItem_1uMI";function m(e){var t,a,r,i=e.lazy,m=e.block,d=e.defaultValue,p=e.values,f=e.groupId,g=e.className,E=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:E.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=E.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=E[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=c(),N=w.tabGroupChoices,y=w.setTabGroupChoices,S=(0,n.useState)(b),Z=S[0],I=S[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var k=N[f];null!=k&&k!==Z&&v.some((function(e){return e.value===k}))&&I(k)}var L=function(e){var t=e.currentTarget,a=x.indexOf(t),l=v[a].value;l!==Z&&(C(t),I(l),null!=f&&y(f,l))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var l=x.indexOf(e.currentTarget)+1;a=x[l]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;a=x[n]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:L,onClick:L},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(E.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},E.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function d(e){var t=(0,r.Z)();return n.createElement(m,(0,l.Z)({key:String(t)},e))}},3518:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),n=a(6396),r=a(8215),i=a(2389);var c=function(e){var t=e.children,a=e.fallback;return(0,i.Z)()&&null!=t?l.createElement(l.Fragment,null,t()):a||null},s=a(1417);function o(e){return l.createElement(c,null,(function(){return l.createElement("div",null,l.createElement(n.Z,{groupId:"operating-systems",defaultValue:(0,s.l)(),values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"},{label:"GitHub Actions",value:"gha"}]},l.createElement(r.Z,{value:"windows"},l.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),l.createElement(r.Z,{value:"linux"},l.createElement("p",null,"Run the following one-line command in your terminal:"),l.createElement("code",null,"curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh")),l.createElement(r.Z,{value:"mac"},l.createElement("p",null,"Run the following one-line command in your terminal:"),l.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli")),l.createElement(r.Z,{value:"gha"},l.createElement("p",null,"Add the ",l.createElement("a",{href:"https://github.com/VirtusLab/scala-cli-setup"},"scala-cli-setup")," action to your workflow:"),l.createElement("code",null,"steps:",l.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: coursier/cache-action@v6",l.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: VirtusLab/scala-cli-setup@main",l.createElement("br",null)))))}))}},1434:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294);function n(e){return l.createElement("div",{className:"col col--"+e.colsize},l.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},1260:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(9750);function r(e){return l.createElement("div",{className:"section-image-box__row row "},l.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),l.createElement("div",{className:"section-image-box__row-text col col--5 "},l.createElement("div",{className:"section-image-box__row-text-wrapper"},l.createElement("h3",null,e.title),l.createElement("div",{className:"content"},e.children))),l.createElement("div",{className:"section-image-box__row-image col col--6 "},l.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?l.createElement("div",{className:"green_border"},l.createElement(n.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),l.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294);function n(e){return l.createElement("section",{className:"section "+e.className},e.children)}},115:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294);function n(e){var t=e.title.toLowerCase().split(" ").join("-"),a=l.createElement("a",{href:"#"+t},">_");return l.createElement("div",{className:"section-about__wrapper row",id:t},l.createElement("div",{className:"col col--1 big-title pre-title"},a),l.createElement("div",{className:"col col--3 big-title"},l.createElement("span",{className:"pre-title-mobile"},a)," ",e.title),l.createElement("div",{className:"col col--8 description"},e.children))}},3352:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(9882),r=a(9750);function i(e){return l.createElement(n.Z,{className:"section-yellow-banner"},l.createElement("div",{className:"row row--align-center"},l.createElement("div",{className:"col col--6"},l.createElement("h1",null,e.title),l.createElement("div",{className:"description"},e.children)),l.createElement("div",{className:"col col--6"},l.createElement("div",{className:"image-wrapper"},l.createElement(r.Z,{className:"image",alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})))))}},604:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1260),r=[l.createElement(n.Z,{image:"gifs/versions.gif",title:"Scala versions, dependencies and JVMs",key:"versions",projects:"true"},l.createElement("p",null,"Scala CLI is built on top of coursier",l.createElement("br",null),"This allow us to manage Scala versions, dependencies and JVMs so you can test your code in different environments by changing single option."),l.createElement("p",null,"Scala CLI ships with all its dependencies",l.createElement("br",null),"No need to fluff with installing JVM or setting up PATH."),l.createElement("p",null,l.createElement("i",null,"Some additional setup may be required for ",l.createElement("a",{href:"/install#scala-js"},"JS")," and ",l.createElement("a",{href:"/install#scala-native"},"Native")))),l.createElement(n.Z,{image:"gifs/universal_tool.gif",title:"Universal tool",key:"universal",projects:"true"},l.createElement("p",null,"If you want to use older ",l.createElement("b",null,"version of Scala")," or run your code in ",l.createElement("b",null,"JS")," or ",l.createElement("b",null,"Native")," environments we've got you covered.",l.createElement("br",null)),l.createElement("p",null,"Switching between platforms or Scala versions is as easy as changing a parameter."),l.createElement("p",null," ",l.createElement("i",null,"Some additional setup may be required for ",l.createElement("a",{href:"/install#scala-js"},"JS")," and ",l.createElement("a",{href:"/install#scala-native"},"Native")))),l.createElement(n.Z,{image:"buildtools.png",title:"We do not call Scala CLI a build tool",key:"buildtool",projects:"true"},l.createElement("p",null,"Scala CLI shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system known from sbt, mill or bazel."),l.createElement("p",null,"Scala ecosystem has multiple amazing build tools, there is no need to create another multipurpose build tool.")),l.createElement(n.Z,{image:"gifs/complete-install.gif",title:"Complete installation",key:"complete-install",education:"true"},l.createElement("p",null,"Scala CLI comes with batteries included. No additional installation is required, no more fluffing with setting up the correct Java version or ",l.createElement("code",null,"PATH")),l.createElement("p",null,"Scala CLI manages JVMs, Scala and other used tools under the hood.")),l.createElement(n.Z,{image:"gifs/defaults.gif",title:"Solid defaults",key:"defaults",education:"true"},l.createElement("p",null,"No additional configuration is needed to most Scala CLI commands."),l.createElement("p",null,"Scala CLI is configured out of the box to use the latest stable versions and other commands such as formatter or compiler contain reasonable defaults.")),l.createElement(n.Z,{image:"gifs/learning_curve.gif",title:"No learning curve",key:"curve",education:"true"},l.createElement("p",null,"Scala CLI does not use complex configuration language, its options are simple and self-explanatory"),l.createElement("p",null,"There are no big differences in running repl or .scala files so expanding the results of repl session into a small project does not require learning new concepts from Scala CLI perspective")),l.createElement(n.Z,{image:"gifs/powerful_scripts.gif",title:"Scripts are as powerful as other programs",key:"scripts-as-apps",scripting:"true"},l.createElement("p",null,"Scripts in Scala CLI can use dependencies and other features as standard Scala programs. Scala CLI is command-line first giving access to all its features without need for any configuration file or specific project structure.")),l.createElement(n.Z,{image:"gifs/embeddable_scripts.gif",title:"Embeddable Scripts",key:"embed-scripts",scripting:"true"},l.createElement("p",null,"Scala CLI can be set up in shebang lines, making your *.scala or *.sc files runnable"),l.createElement("p",null,"Scala CLI supports piping inputs and is designed to be embeddable in other scripts, turning Scala into proper scripting language")),l.createElement(n.Z,{image:"gifs/self-contained-examples.gif",title:"Self-contained examples",key:"self-contained-examples",prototyping:"true"},l.createElement("p",null,"With Scala CLI, configuration can be included in source code so complex examples can be self-contained and shipped as e.g. gist. Moreover, Scala CLI can compile, run and test gists without any manual work!"),l.createElement("p",null,"Scala CLI is a perfect tool to submit and reproduce bugs"))];function i(){return r}},1417:function(e,t,a){a.d(t,{l:function(){return l}});var l=function(){var e=function(e){return"undefined"!=typeof window&&-1!==window.navigator.userAgent.indexOf(e)};return e("Win")?"windows":e("Mac")?"mac":"linux"}},7302:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),n=a(2263),r=a(2582),i=a(9882);a(1260);function c(e){return l.createElement("div",{className:"section__header"},l.createElement("h2",null,e.title),l.createElement("div",{className:"section__header-description"},e.children))}function s(e){return l.createElement("div",{className:"section-features__item col col--4"},l.createElement("div",{className:"section-features__item-wrapper"},l.createElement("div",{className:"icon"},e.icon?l.createElement("img",{src:e.icon,alt:e.title}):""),l.createElement("div",{className:"title"},e.title),l.createElement("div",{className:"desc"},e.children)))}var o=a(115);function u(e){return!!e.slug?l.createElement("a",{href:"/"+e.slug,className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{src:"img/ico-"+e.slug+".png",alt:e.slug+" icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("div",{className:"read-more-wrap"},l.createElement("div",{className:"read-more with-before"},"Read more")))):l.createElement("div",{className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box your-case"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{className:"light-theme",src:"img/ico-yours.png",alt:"your use case icon"}),l.createElement("img",{className:"dark-theme",src:"img/ico-yours-dark.png",alt:"your use case icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description)))}var m=a(1434),d=a(3518),p=a(3352),f=a(604),g=function(e){var t=(0,n.Z)().siteConfig;return l.createElement(r.Z,{title:t.title,description:t.tagline},l.createElement("div",{className:"container content"},l.createElement(p.Z,{title:"Scala CLI is a command-line tool to interact with the Scala language.",image:"gifs/demo.gif"},l.createElement("p",null,"It lets you compile, run, test, and package your Scala code (and more!)")),l.createElement(i.Z,{className:"section-about"},l.createElement(o.Z,{title:"Why Scala CLI?"},l.createElement("p",null,"Scala CLI combines ",l.createElement("em",null,"all")," the features you need to learn and use Scala in your scripts, playgrounds and (single-module) projects."),l.createElement("p",null,"To get started you can read ",l.createElement("a",{href:"/docs/overview"},"the documentation"),", or just ",l.createElement("a",{href:"/install"},"install")," and enjoy ",l.createElement("code",null,"scala-cli"),"."))),l.createElement(i.Z,{className:"section-features"},l.createElement("div",{className:"section-features__row row"},l.createElement(s,{title:"Intuitive, simple",icon:"img/hand.png"},l.createElement("strong",null,"No complicated mechanisms, tasks, plugins or extensions:")," just a single-module. All our commands have multiple aliases and follow well-known conventions."),l.createElement(s,{title:"Fast",icon:"img/rocket.png"},l.createElement("strong",null,"Scala CLI is optimized to be as fast as possible.")," CLI is compiled to native code and compilations are ",l.createElement("a",{href:"/docs/reference/bloop"},"offloaded to bloop"),"."),l.createElement(s,{title:"Command-line first",icon:"img/monitor.png"},l.createElement("strong",null,"Scala CLI does not require a configuration file, and all in-file configurations can be overridden by command-line.")," No additional installation or setup of an environment (such as a specific working directory) are required."))),l.createElement("div",{id:"use_cases"}),l.createElement(i.Z,{className:"section-use-tiles"},l.createElement("div",{className:"row"},l.createElement(m.Z,{title:"Who is Scala CLI designed for?",colsize:"12",promptsign:!0}),l.createElement("div",{className:"col col--12"},l.createElement("div",{className:"use-boxes row"},l.createElement(u,{title:"Education",slug:"education",description:"Scala CLI is a help \u2014 not a distraction \u2014 while learning Scala, a library or programming in general."}),l.createElement(u,{title:"Scripting",slug:"scripting",description:"Scala CLI has all the tools to create (or be integrated into) scripts with the whole power of the Scala ecosystem."}),l.createElement(u,{title:"Prototyping, Experimenting, Reproducing",slug:"prototyping",description:"With Scala CLI, experimenting with different libraries, Scala or JVM versions, or compiler options is easy and fun."}),l.createElement(u,{title:"Single-module projects",slug:"projects",description:"Scala CLI provides all the tools you need to manage single-module projects like CLI or basic web applications, or server-less lambdas."}),l.createElement(u,{title:"Your use case",slug:!1,description:l.createElement("span",null,"If you see other use cases for Scala CLI, let us know using ",l.createElement("a",{href:"https://github.com/VirtusLab/scala-cli/discussions/categories/ideas"},"GitHub Discussions!"))}))))),l.createElement(i.Z,{className:"section-install-cli"},l.createElement("div",{className:"row"},l.createElement(m.Z,{title:"Install Scala CLI",colsize:"4",promptsign:!0}),l.createElement("div",{className:"col col--8"},l.createElement(d.Z,null)))),l.createElement(i.Z,{className:"section-image-box"},l.createElement(c,{title:"Still undecided?"},"Here come our ",l.createElement("span",null,"main features")),(0,f.Z)())))}}}]);