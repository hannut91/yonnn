var argscheck=require('cordova/argscheck'),utils=require('cordova/utils'),exec=require('cordova/exec');var Keyboard=function(){};Keyboard.shrinkView=function(shrink){exec(null,null,"Keyboard","shrinkView",[shrink]);};Keyboard.hideFormAccessoryBar=function(hide){exec(null,null,"Keyboard","hideFormAccessoryBar",[hide]);};Keyboard.disableScrollingInShrinkView=function(disable){exec(null,null,"Keyboard","disableScrollingInShrinkView",[disable]);};Keyboard.fireOnShow=function(){Keyboard.isVisible=true;cordova.fireWindowEvent('keyboardDidShow');if(Keyboard.onshow){Keyboard.onshow();}};Keyboard.fireOnHide=function(){Keyboard.isVisible=false;cordova.fireWindowEvent('keyboardDidHide');if(Keyboard.onhide){Keyboard.onhide();}};Keyboard.fireOnHiding=function(){if(Keyboard.automaticScrollToTopOnHiding){document.body.scrollLeft=0;}cordova.fireWindowEvent('keyboardWillHide');if(Keyboard.onhiding){Keyboard.onhiding();}};Keyboard.fireOnShowing=function(){cordova.fireWindowEvent('keyboardWillShow');if(Keyboard.onshowing){Keyboard.onshowing();}};Keyboard.show=function(){exec(null,null,"Keyboard","show",[]);};Keyboard.hide=function(){exec(null,null,"Keyboard","hide",[]);};Keyboard.isVisible=false;Keyboard.automaticScrollToTopOnHiding=false;module.exports=Keyboard;