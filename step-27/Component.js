"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(t,n){"use strict";const e=t.extend("ui5.walkthrough.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init:function e(){t.prototype.init.call(this);const o={recipient:{name:"World"}};const i=new n(o);this.setModel(i)}});return e});
//# sourceMappingURL=Component.js.map