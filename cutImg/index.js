

 function $(dom) {
   function getDom(dom) {
     let sign = dom.charAt(0);
     switch (sign) {
       case '.':
         this.el = document.getElementsByClassName(dom.slice(1));
         break;
       case '#':
         this.el = document.getElementById(dom.slice(1));
         break;
       default:
         if(document.getElementsByTagName(dom).length){
           this.el = document.getElementsByTagName(dom);
         }else{
           this.el = null
         }

     }
     return this;
   }

   getDom.prototype.get = function (num) {
     return this.el[num] || this.el;
   }

   getDom.prototype.insert = function (num, val) {
     return this.el[num].innerHTML = val;
   }

   return new getDom(dom);
 }

 function getCss(el,cssName) {
    return window.getComputedStyle(el,null).getPropertyValue(cssName);
 }

 function setCss(el, attrName, val) {
   switch (attrName) {
     case 'width' :
       el.style.width = val;
       break;
     case 'height' :
       el.style.height = val;
       break;
     case 'top' :
       el.style.top = val;
       break;
     case 'left' :
       el.style.left = val;
       break;
   }
 }

