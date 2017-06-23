sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(UIComponent, JSONModel, Device) {
	"use strict";

	return UIComponent.extend("actuarial.Component", {

		metadata: {
			manifest: "json",
			includes : [ "css/style.css" ],
			"routing": {
				"config": {
                    "routerClass": "sap.m.routing.Router",	        // router class
                    "viewType": "XML",						        // types of views using in app
                    "viewPath": "actuarial.maxicareactuarial",	    // folder of views
                    "controlId": "rootControl",						        // container where pages are placed while navigating
                    "transition": "slide"					        // navigation transition effect
                },
                
                routes: [{
                	name: "quotationList100",
                	pattern: "",
        			target: ["quotationList100"]
                },{
                	name: "addNewQuotation100",
                	pattern: "addNewQuotation",
                	target: ["addNewQuotation100", "accountInformation100"]
                },{
					name: "accountInformation100",
					pattern: "addNewQuotation/accountInformation",
					target: ["addNewQuotation100", "accountInformation100"]
				},{
					name: "clinicManagement100",
					pattern: "addNewQuotation/clinicManagement",
					target: ["addNewQuotation100", "clinicManagement100"]
				},{
					name: "otherArrangement100",
					pattern: "addNewQuotation/otherArrangement",
					target: ["addNewQuotation100", "otherArrangement100"]
				},{
					name: "wellnessProgram100",
					pattern: "addNewQuotation/wellnessProgram",
					target: ["addNewQuotation100", "wellnessProgram100"]
				},{
					name: "planList100",
					pattern: "planList",
					target: ["quotationList100", "planList100"]
				},{
                	name: "createNewPlan100",
                	pattern: "planList/createNewPlan",
                	target: ["createNewPlan100", "planDetails100"]
                },{
                	name: "planDetails100",
                	pattern: "planList/createNewPlan/planDetails",
                	target: ["createNewPlan100", "planDetails100"]
                },{
                	name: "membershipEligibility100",
                	pattern: "planList/createNewPlan/membershipEligibility",
                	target: ["createNewPlan100", "membershipEligibility100"]
                }],
                
                targets: {
                	quotationList100: {
                		viewName: "master.quotationList100",
                		controlAggregation: "masterPages",
                		viewLevel: 0
                	},
                	addNewQuotation100: {
                		viewName: "master.addNewQuotation100",
                		controlAggregation: "masterPages",
                		viewLevel: 1
                	},
                	accountInformation100: {
                		viewName: "detail.newQuotation.accountInformation100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	clinicManagement100: {
                		viewName: "detail.newQuotation.clinicManagement100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	otherArrangement100: {
                		viewName: "detail.newQuotation.otherArrangement100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	wellnessProgram100: {
                		viewName: "detail.newQuotation.wellnessProgram100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	planList100: {
                		viewName: "detail.planList100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	createNewPlan100: {
                		viewName: "master.createNewPlan100",
                		controlAggregation: "masterPages",
                		viewLevel: 1
                	},
                	planDetails100: {
                		viewName: "detail.newPlan.planDetails100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	membershipEligibility100: {
                		viewName: "detail.newPlan.membershipEligibility100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	}
                }
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			this.setModel(this.createDeviceModel(), "device");
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
//			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();
		},
		
		createDeviceModel : function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}
	});

});