sap.ui.controller("maxicareactuarial.detail.newQuotation.tab.otherArrangement.lockInCoverage100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.detail.newQuotation.tab.otherArrangement.lockInCoverage100
*/
	onInit: function() {
 		var oView = this.getView();
 		this.initialize();
 		
		this.getView().addEventDelegate({
			onAfterHide: function(evt) {
				//This event is fired every time when the NavContainer has made this child control invisible.
			},
			onAfterShow: function(evt) {
				//This event is fired every time when the NavContainer has made this child control visible.
			},
			onBeforeFirstShow: function(evt) {
				//This event is fired before the NavContainer shows this child control for the first time.
			},
			onBeforeHide: function(evt) {
				//This event is fired every time before the NavContainer hides this child control.
			},
			onBeforeShow: function(evt) {
				
			}	
		});
	},
	
	initialize: function(){
		var oView = this.getView();
		this.createProvFRText();
	},
	
	createProvFRText: function(oEvent){
		var oView = this.getView();
		var oData = {
			"ProvFRText": "<ol><li>If the account did not renew for its second year coverage, all active enrollees of the account at the time of the transaction shall be charged with a pre-termination fee of Php 250 per member.</li>" +
					"<li>Any request to modify the account’s benefits during its 1st year of coverage shall be evaluated by Actuarial and shall be subject to policy on approval for revision of benefits.</li>" +
					"<li>The benefit limits refresh every year.</li>" +
					"<li>Account will be subject to an evaluation if the number of enrollees per member type for its 2nd year coverage is less than 75% of its 1st year’s initial number of enrollees.</li>" +
					"<li>Should the account pre-terminate, the following conditions shall apply:" +
					"<ol><li>If the account pre-terminates on its first year, the refund for membership fees shall be based on the pre-termination provision in the Service Agreement. All active enrollees of the account prior to the date of the pre-termination shall be sharge with a pre-termination fee of Php 250 per member</li>" +
					"<li>If the account pre-terminates on its second year and the membership fee is based on fixed peso amount, account will have no refund. All active enrollees of the account prior to the date of the pre-termination shall be charged with a pre-termination fee of Php 250 per member</li>" +
					"<li>If the account pre-terminates on its second year and the membership fee is based on the increase derived from the loss ratio of its 1st year, the refund for membership fees shall be based on the pre-termination provision in the Service Agreement. All active enrollees of the account prior to the date of the pre-termination shall be charged with pre-termination fee of php 250 per member</li></ol>" +
					"</li></ol>"
		}
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
		oView.setModel(oModel, "TextArea");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.detail.newQuotation.tab.otherArrangement.lockInCoverage100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.detail.newQuotation.tab.otherArrangement.lockInCoverage100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.detail.newQuotation.tab.otherArrangement.lockInCoverage100
*/
//	onExit: function() {
//
//	}

});