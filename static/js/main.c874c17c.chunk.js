(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{36:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var a=c(1),r=c.n(a),n=c(30),o=c.n(n),s=(c(36),c(10)),i=c(11),h=c(13),l=c(12),j=c(14),d=c.n(j),u=c(8),p=c(2),b=c(0),f=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={searchText:""},t.onSearchChange=function(e){t.setState({searchText:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var c=t.state.searchText,a="/search/".concat(c);t.props.onSearch(c),e.currentTarget.reset(),t.props.history.push(a)},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"search",onChange:this.onSearchChange,name:"search",placeholder:"Search",required:!0}),Object(b.jsx)("button",{type:"submit",className:"search-button",children:Object(b.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}}]),c}(a.Component),g=Object(p.f)(f),O=function(){return Object(b.jsx)("nav",{className:"main-nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/cat",children:"cat"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/bird",children:"bird"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/dog",children:"dog"})})]})})},x=function(){return Object(b.jsxs)("li",{className:"not-found",children:[Object(b.jsx)("h3",{children:"No Results Found"}),Object(b.jsx)("p",{children:"You search did not return any results. Please try again."})]})},m=function(t){var e=t.url,c=t.alt;return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:e,alt:c})})},v=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){return Object(s.a)(this,c),e.apply(this,arguments)}return Object(i.a)(c,[{key:"componentDidUpdate",value:function(){this.props.onUpdate(this.props.title)}},{key:"render",value:function(){var t,e=this.props,c=e.data,a=e.title;return t=c.length>0?c.map((function(t){return t.url="https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),Object(b.jsx)(m,{url:t.url,alt:t.title},t.id)})):Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsxs)("h2",{children:[a," Photos"]}),Object(b.jsx)("ul",{children:t})]})}}]),c}(a.Component),y=Object(p.f)(v),k="24229658e3a09abf2cc3c88350cd00c1",S="g.ramoshe.com/thp-reactGallery/",w={},_={},C={};d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=cat&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){w=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=bird&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){_=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)})),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=dog&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(t){C=t.data.photos.photo})).catch((function(t){console.log("Error fetching and parsing data",t)}));var T=function(){return Object(b.jsxs)("div",{className:"error-container",children:[Object(b.jsx)("h2",{children:"Uh oh! Page doesn't exist!"}),Object(b.jsx)("p",{children:"Use the buttons above or the search bar to load a photo gallery."})]})},U=function(t){Object(h.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={data:{},loading:!0,currentTitle:"sunset"},t.performSearch=function(e){t.setState({loading:!0}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(e,"&is_getty=true&per_page=24&format=json&nojsoncallback=1")).then((function(c){t.setState({data:c.data.photos.photo,loading:!1,currentTitle:e})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.performSearch(this.state.currentTitle)}},{key:"render",value:function(){var t=this;return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(g,{onSearch:this.performSearch}),Object(b.jsx)(O,{}),this.state.loading?Object(b.jsx)("h2",{style:{color:"silver"},children:"Loading..."}):Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:S,render:function(){return Object(b.jsx)(y,{title:t.state.currentTitle,data:t.state.data,onUpdate:t.performSearch})}}),Object(b.jsx)(p.a,{path:S+"cat",render:function(){return Object(b.jsx)(y,{title:"cat",data:w,onUpdate:t.performSearch})}}),Object(b.jsx)(p.a,{path:S+"bird",render:function(){return Object(b.jsx)(y,{title:"bird",data:_,onUpdate:t.performSearch})}}),Object(b.jsx)(p.a,{path:S+"dog",render:function(){return Object(b.jsx)(y,{title:"dog",data:C,onUpdate:t.performSearch})}}),Object(b.jsx)(p.a,{path:S+"search/:query",render:function(e){var c=e.match;return Object(b.jsx)(y,{title:c.params.query,data:t.state.data,onUpdate:t.performSearch})}}),Object(b.jsx)(p.a,{component:T})]})]})})}}]),c}(a.Component),N=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(e){var c=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,o=e.getTTFB;c(t),a(t),r(t),n(t),o(t)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.c874c17c.chunk.js.map