(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{36:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(30),o=c.n(r),s=(c(36),c(10)),i=c(11),h=c(13),l=c(12),j=c(14),d=c.n(j),u="24229658e3a09abf2cc3c88350cd00c1",p=c(8),b=c(2),f=c(0),g=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={searchText:""},t.onSearchChange=function(e){t.setState({searchText:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var c=t.state.searchText,n="/search/".concat(c);t.props.onSearch(c),e.currentTarget.reset(),t.props.history.push(n)},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{type:"search",onChange:this.onSearchChange,name:"search",placeholder:"Search",required:!0}),Object(f.jsx)("button",{type:"submit",className:"search-button",children:Object(f.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(f.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}}]),c}(n.Component),O=Object(b.f)(g),x=function(){return Object(f.jsx)("nav",{className:"main-nav",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/cat",children:"cat"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/bird",children:"bird"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/dog",children:"dog"})})]})})},m=function(){return Object(f.jsxs)("li",{className:"not-found",children:[Object(f.jsx)("h3",{children:"No Results Found"}),Object(f.jsx)("p",{children:"You search did not return any results. Please try again."})]})},v=function(t){var e=t.url,c=t.alt;return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:e,alt:c})})},y=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){return Object(s.a)(this,c),e.apply(this,arguments)}return Object(i.a)(c,[{key:"componentDidUpdate",value:function(){this.props.onUpdate(this.props.title)}},{key:"render",value:function(){var t,e=this.props,c=e.data,n=e.title;return t=c.length>0?c.map((function(t){return t.url="https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),Object(f.jsx)(v,{url:t.url,alt:t.title},t.id)})):Object(f.jsx)(m,{}),Object(f.jsxs)("div",{className:"photo-container",children:[Object(f.jsxs)("h2",{children:[n," Photos"]}),Object(f.jsx)("ul",{children:t})]})}}]),c}(n.Component),k=Object(b.f)(y),S={},w={},_={};d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=cat&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){S=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=bird&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){w=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=dog&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){_=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)}));var C=function(){return Object(f.jsxs)("div",{className:"error-container",children:[Object(f.jsx)("h2",{children:"Uh oh! Page doesn't exist!"}),Object(f.jsx)("p",{children:"Use the buttons above or the search bar to load a photo gallery."})]})},T=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={data:{},loading:!0,currentTitle:"sunset"},t.performSearch=function(e){t.setState({loading:!0}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=").concat(e,"&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(c){t.setState({data:c.data.photos.photo,loading:!1,currentTitle:e})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.performSearch(this.state.currentTitle)}},{key:"render",value:function(){var t=this;return Object(f.jsx)(p.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{onSearch:this.performSearch}),Object(f.jsx)(x,{}),this.state.loading?Object(f.jsx)("h2",{style:{color:"silver"},children:"Loading..."}):Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(k,{title:t.state.currentTitle,data:t.state.data,onUpdate:t.performSearch})}}),Object(f.jsx)(b.a,{path:"/cat",render:function(){return Object(f.jsx)(k,{title:"cat",data:S,onUpdate:t.performSearch})}}),Object(f.jsx)(b.a,{path:"/bird",render:function(){return Object(f.jsx)(k,{title:"bird",data:w,onUpdate:t.performSearch})}}),Object(f.jsx)(b.a,{path:"/dog",render:function(){return Object(f.jsx)(k,{title:"dog",data:_,onUpdate:t.performSearch})}}),Object(f.jsx)(b.a,{path:"/search/:query",render:function(e){var c=e.match;return Object(f.jsx)(k,{title:c.params.query,data:t.state.data,onUpdate:t.performSearch})}}),Object(f.jsx)(b.a,{component:C})]})]})})}}]),c}(n.Component),U=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),a(t),r(t),o(t)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),U()}},[[62,1,2]]]);
//# sourceMappingURL=main.556b624e.chunk.js.map