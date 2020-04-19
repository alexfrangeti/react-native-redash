(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{fZ19:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("4cIV"),n("NZyX"),n("c0Gx"),n("QNbk"),n("+ytS"),n("WY76");var a=n("V0Ug"),r=n("sN0p");n("xH0s");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/svg.mdx"}});var l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"svg"},"SVG"),Object(a.b)("p",null,"Redash provides some utilities functions to deal with SVG paths.\n",Object(a.b)("inlineCode",{parentName:"p"},"parsePath()")," will normalize the SVG path in a sequence of Bézier curves that can be processed on the UI thread using Reanimated. "),Object(a.b)("hr",null),Object(a.b)("h2",{id:"parsepath"},Object(a.b)("inlineCode",{parentName:"h2"},"parsePath()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const parsePath: (d: string) => ReanimatedPath;\n")),Object(a.b)("p",null,"Given an SVG Path, returns a denormalized object of values that can be used for animations on that path.\nFrom the perspective of the user, the returned value should be considered a black box.\nHere is an example below:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ts"}),"// We get the data from the SVG Path denormalized a way that can be handled with Reanimated\nconst path = parsePath(d);\nconst { y, x } = getPointAtLength(path, length);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"getpointatlength"},Object(a.b)("inlineCode",{parentName:"h2"},"getPointAtLength()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const getPointAtLength: (path: ReanimatedPath, length: Animated.Adaptable<number>) => {\n    x: Animated.Node<number>;\n    y: Animated.Node<number>;\n};\n")),Object(a.b)("p",null,"Implementation of ",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/getPointAtLength"}),"getPointAtLength")," for Reanimated."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ts"}),"// We get the data from the SVG Path denormalized a way that can be handled with Reanimated\nconst path = parsePath(d);\nconst { y, x } = getPointAtLength(path, length);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"interpolatepath"},Object(a.b)("inlineCode",{parentName:"h2"},"interpolatePath()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const interpolatePath: (value: Animated.Adaptable<number>, { inputRange, outputRange, ...config }: PathInterpolationConfig) => Animated.Node<string>;\n")),Object(a.b)("p",null,"Interpolate from one SVG point to the other, this function assumes that each path has the same number of points."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),'const phone1 = "M 18 149C 18 149 25 149 25 149 25 14...";\nconst d = interpolatePath(slider, {\n  inputRange: [0, width, width * 2],\n  outputRange: [phone1, phone2, phone3]\n});\nreturn (\n  <Svg style={styles.svg} viewBox="0 0 100 300">\n    <AnimatedPath fill="black" {...{ d }} />\n  </Svg>\n);\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"binterpolatepath"},Object(a.b)("inlineCode",{parentName:"h2"},"bInterpolatePath()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const bInterpolatePath: (value: Animated.Value<number>, path1: string | ReanimatedPath, path2: string | ReanimatedPath) => Animated.Node<string>;\n")),Object(a.b)("p",null,"Interpolate from one SVG point to the other, this function assumes that each path has the same number of points."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),'const rhino = "M 217.765 29.683 C 225.855 29.683 ";\nconst elephant = "M 223.174 43.413 ...";\nreturn (\n  <>\n    <Animated.Code>\n      {() =>\n        set(\n          progress,\n          timing(clock, progress, {\n            to: 1,\n            duration: 2000,\n            easing: Easing.linear\n          })\n        )\n      }\n    </Animated.Code>\n    <Svg style={styles.container} viewBox="0 0 409 280">\n      <AnimatedPath\n        d={bInterpolatePath(progress, rhino, elephant)}\n        fill="#7d8f9b"\n      />\n    </Svg>\n  </>\n);\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"getlengthatx"},Object(a.b)("inlineCode",{parentName:"h2"},"getLengthAtX()")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const getLengthAtX: (path: ReanimatedPath, x: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,'Convenience function for bezier curves where there is really only ever one "y" value associated with one "x" value.\nThis function works by finding the roots of the cubic bezier curve so it might be too compute-intensive to calculate for each frame.'))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/svg.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-svg-mdx-b29c6f09569668828795.js.map