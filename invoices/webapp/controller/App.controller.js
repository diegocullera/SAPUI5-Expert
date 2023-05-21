sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller}   Controller
 * @param {typeof sap.m.MessageToast}           MessageToast
 * @param {typeof sap.ui.model.json.JSONModel}  JSONModel
 */
function(Controller, MessageToast, JSONModel, Models, ResourceModel) {
    'use strict';

    return Controller.extend("invoices.controller.App",{


        onShowHello: function () {
            let oBundle = this.getView().getModel("i18n").getResourceBundle(),
                msg = this.getView().getModel().getProperty("/recipient/name");
            MessageToast.show(oBundle.getText("helloMsg", [msg]));
        }

    });
    
});