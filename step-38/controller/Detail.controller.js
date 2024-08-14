"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageToast","sap/ui/model/json/JSONModel"],function(e,t,n,o){"use strict";const i=e.extend("ui5.walkthrough.controller.Detail",{onInit:function e(){const t=new o({currency:"EUR"});this.getView().setModel(t,"view");const n=this.getOwnerComponent().getRouter();n.getRoute("detail").attachPatternMatched(this.onObjectMatched,this)},onObjectMatched:function e(t){this.byId("rating").reset();this.getView().bindElement({path:"/"+window.decodeURIComponent(t.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack:function e(){const n=t.getInstance();const o=n.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{const e=this.getOwnerComponent().getRouter();e.navTo("overview",{},true)}},onRatingChange:function e(t){const o=t.getParameter("value");const i=this?.getView().getModel("i18n")?.getResourceBundle();n.show(i.getText("ratingConfirmation",[o]))}});return i});
//# sourceMappingURL=Detail.controller.js.map