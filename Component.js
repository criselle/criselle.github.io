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
                	name: "quotationItem100",
                	pattern: "quotationItem",
                	target: ["quotationItem100", "accountInformation100"]
                },{
					name: "accountInformation100",
					pattern: "quotationItem/accountInformation",
					target: ["quotationItem100", "accountInformation100"]
				},{
					name: "clinicManagement100",
					pattern: "quotationItem/clinicManagement",
					target: ["quotationItem100", "clinicManagement100"]
				},{
					name: "otherArrangement100",
					pattern: "quotationItem/otherArrangement",
					target: ["quotationItem100", "otherArrangement100"]
				},{
					name: "wellnessProgram100",
					pattern: "quotationItem/wellnessProgram",
					target: ["quotationItem100", "wellnessProgram100"]
				},{
					name: "loadingAndFees100",
					pattern: "quotationItem/loadingAndFees",
					target: ["quotationItem100", "loadingAndFees100"]
				},{
					name: "pricingInstructions100",
					pattern: "quotationItem/pricingInstructions",
					target: ["quotationItem100", "pricingInstructions100"]
				},{
					name: "planList100",
					pattern: "planList",
					target: ["quotationList100", "planList100"]
				},{
                	name: "planItem100",
                	pattern: "planList/planItem",
                	target: ["planItem100", "planDetails100"]
                },{
                	name: "planDetails100",
                	pattern: "planList/planItem/planDetails",
                	target: ["planItem100", "planDetails100"]
                },{
                	name: "membershipEligibility100",
                	pattern: "planList/planItem/membershipEligibility",
                	target: ["planItem100", "membershipEligibility100"]
                },{
                	name: "salientFeatures100",
                	pattern: "planList/planItem/salientFeatures",
                	target: ["planItem100", "salientFeatures100"]
                },{
                	name: "dailyCashAllowance100",
                	pattern: "planList/planItem/dailyCashAllowance",
                	target: ["planItem100", "dailyCashAllowance100"]
                },{
                	name: "providerAccess100",
                	pattern: "planList/planItem/providerAccess",
                	target: ["planItem100", "providerAccess100"]
                },{
                	name: "memberShare100",
                	pattern: "planList/planItem/memberShare",
                	target: ["planItem100", "memberShare100"]
                },{
                	name: "benefits100",
                	pattern: "planList/planItem/benefits",
                	target: ["planItem100", "benefits100"]
                },{
                	name: "riders100",
                	pattern: "planList/planItem/riders",
                	target: ["planItem100", "riders100"]
                },{
                	name: "exclusionsLimitations100",
                	pattern: "planList/planItem/exclusionsAndLimitations",
                	target: ["planItem100", "exclusionsLimitations100"]
                },{
                	name: "medicalInsurance100",
                	pattern: "planList/planItem/medicalInsurance",
                	target: ["planItem100", "medicalInsurance100"]
                },{
                	name: "rates100",
                	pattern: "planList/planItem/rates",
                	target: ["planItem100", "rates100"]
                },{
                	name: "adjustments100",
                	pattern: "planList/planItem/adjustments",
                	target: ["adjustments100", "factors100"]
                },{
                	name: "factors100",
                	pattern: "planList/planItem/adjustments/factors",
                	target: ["adjustments100", "factors100"]
                },{
                	name: "network100",
                	pattern: "planList/planItem/adjustments/network",
                	target: ["adjustments100", "network100"]
                },{
                	name: "benefitsAdj100",
                	pattern: "planList/planItem/adjustments/benefits",
                	target: ["adjustments100", "benefitsAdj100"]
                },{
                	name: "claimsAnalysis100",
                	pattern: "planList/planItem/adjustments/claimsAnalysis",
                	target: ["adjustments100", "claimsAnalysis100"]
                },{
                	name: "comparePolicy100",
                	pattern: "planList/comparePolicy",
                	target: ["quotationList100", "comparePolicy100"]
                }],
                
                targets: {
                	quotationList100: {
                		viewName: "master.quotationList100",
                		controlAggregation: "masterPages",
                		viewLevel: 0
                	},
                	quotationItem100: {
                		viewName: "master.quotationItem100",
                		controlAggregation: "masterPages",
                		viewLevel: 1
                	},
                	accountInformation100: {
                		viewName: "detail.quotationItem.accountInformation100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	clinicManagement100: {
                		viewName: "detail.quotationItem.clinicManagement100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	otherArrangement100: {
                		viewName: "detail.quotationItem.otherArrangement100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	wellnessProgram100: {
                		viewName: "detail.quotationItem.wellnessProgram100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	loadingAndFees100: {
                		viewName: "detail.adjustments.loadingAndFees100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	pricingInstructions100: {
                		viewName: "detail.adjustments.pricingInstructions100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	planList100: {
                		viewName: "detail.planList100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	planItem100: {
                		viewName: "master.planItem100",
                		controlAggregation: "masterPages",
                		viewLevel: 1
                	},
                	planDetails100: {
                		viewName: "detail.planItem.planDetails100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	membershipEligibility100: {
                		viewName: "detail.planItem.membershipEligibility100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	salientFeatures100: {
                		viewName: "detail.planItem.salientFeatures100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	dailyCashAllowance100: {
                		viewName: "detail.planItem.dailyCashAllowance100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	providerAccess100: {
                		viewName: "detail.planItem.providerAccess100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	memberShare100: {
                		viewName: "detail.planItem.memberShare100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	benefits100: {
                		viewName: "detail.planItem.benefits100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	riders100: {
                		viewName: "detail.planItem.riders100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	exclusionsLimitations100: {
                		viewName: "detail.planItem.exclusionsLimitations100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	medicalInsurance100: {
                		viewName: "detail.planItem.medicalInsurance100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	rates100: {
                		viewName: "detail.planItem.rates100",
                		controlAggregation: "detailPages",
                		viewLevel: 1
                	},
                	adjustments100: {
                		viewName: "master.adjustments100",
                		controlAggregation: "masterPages",
                		viewLevel: 2
                	},
                	factors100: {
                		viewName: "detail.adjustments.factors100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	network100: {
                		viewName: "detail.adjustments.network100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	benefitsAdj100: {
                		viewName: "detail.adjustments.benefits100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	claimsAnalysis100: {
                		viewName: "detail.adjustments.claimsAnalysis100",
                		controlAggregation: "detailPages",
                		viewLevel: 2
                	},
                	comparePolicy100: {
                		viewName: "detail.comparePolicy100",
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