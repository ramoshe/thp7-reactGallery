(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{36:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),r=c(30),o=c.n(r),s=(c(36),c(10)),i=c(11),h=c(13),l=c(12),j=c(14),d=c.n(j),u="24229658e3a09abf2cc3c88350cd00c1",p="/thp7-reactGallery",b=c(8),f=c(2),g=c(0),O=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={searchText:""},t.onSearchChange=function(e){t.setState({searchText:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var c=t.state.searchText,a="/search/".concat(c);t.props.onSearch(c),e.currentTarget.reset(),t.props.history.push(a)},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{type:"search",onChange:this.onSearchChange,name:"search",placeholder:"Search",required:!0}),Object(g.jsx)("button",{type:"submit",className:"search-button",children:Object(g.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(g.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}}]),c}(a.Component),x=Object(f.f)(O),m=function(){return Object(g.jsx)("nav",{className:"main-nav",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"".concat(p,"/cat"),children:"cat"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"".concat(p,"/bird"),children:"bird"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"".concat(p,"/dog"),children:"dog"})})]})})},v=function(){return Object(g.jsxs)("li",{className:"not-found",children:[Object(g.jsx)("h3",{children:"No Results Found"}),Object(g.jsx)("p",{children:"You search did not return any results. Please try again."})]})},y=function(t){var e=t.url,c=t.alt;return Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:e,alt:c})})},k=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){return Object(s.a)(this,c),e.apply(this,arguments)}return Object(i.a)(c,[{key:"componentDidUpdate",value:function(){this.props.onUpdate(this.props.title)}},{key:"render",value:function(){var t,e=this.props,c=e.data,a=e.title;return t=c.length>0?c.map((function(t){return t.url="https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),Object(g.jsx)(y,{url:t.url,alt:t.title},t.id)})):Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"photo-container",children:[Object(g.jsxs)("h2",{children:[a," Photos"]}),Object(g.jsx)("ul",{children:t})]})}}]),c}(a.Component),S=Object(f.f)(k),w={},_={},C={};d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=cat&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){w=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=bird&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){_=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=dog&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){C=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)}));var T=function(){return Object(g.jsxs)("div",{className:"error-container",children:[Object(g.jsx)("h2",{children:"Uh oh! Page doesn't exist!"}),Object(g.jsx)("p",{children:"Use the buttons above or the search bar to load a photo gallery."})]})},U=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={data:{},loading:!0,currentTitle:"sunset"},t.performSearch=function(e){t.setState({loading:!0}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(u,"&tags=").concat(e,"&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(c){t.setState({data:c.data.photos.photo,loading:!1,currentTitle:e})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.performSearch(this.state.currentTitle)}},{key:"render",value:function(){var t=this;return Object(g.jsx)(b.a,{basename:"/thp7-reactGallery",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(x,{onSearch:this.performSearch}),Object(g.jsx)(m,{}),this.state.loading?Object(g.jsx)("h2",{style:{color:"silver"},children:"Loading..."}):Object(g.jsxs)(f.c,{children:[Object(g.jsx)(f.a,{exact:!0,path:"".concat(p,"/"),render:function(){return Object(g.jsx)(S,{title:t.state.currentTitle,data:t.state.data,onUpdate:t.performSearch})}}),Object(g.jsx)(f.a,{path:"".concat(p,"/cat"),render:function(){return Object(g.jsx)(S,{title:"cat",data:w,onUpdate:t.performSearch})}}),Object(g.jsx)(f.a,{path:"".concat(p,"/bird"),render:function(){return Object(g.jsx)(S,{title:"bird",data:_,onUpdate:t.performSearch})}}),Object(g.jsx)(f.a,{path:"".concat(p,"/dog"),render:function(){return Object(g.jsx)(S,{title:"dog",data:C,onUpdate:t.performSearch})}}),Object(g.jsx)(f.a,{path:"".concat(p,"/search/:query"),render:function(e){var c=e.match;return Object(g.jsx)(S,{title:c.params.query,data:t.state.data,onUpdate:t.performSearch})}}),Object(g.jsx)(f.a,{component:T})]})]})})}}]),c}(a.Component),N=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),a(t),n(t),r(t),o(t)}))};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.b31363a9.chunk.js.map