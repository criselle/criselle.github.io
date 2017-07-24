sap.ui.controller("maxicareactuarial.master.planItem100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.master.planItem100
*/
	onInit: function() {
 		var oView = this.getView();

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
	
	onPressNavBack: function(){
		var sPreviousHash = sap.ui.core.routing.History.getInstance().getPreviousHash();
		
		//The history contains a previous entry
		if (sPreviousHash !== undefined) {
			history.go(-1);
		}
	},
	
	onListItemPress: function(oEvent){
		var sId = oEvent.getParameter("listItem").getId();
		var quotationId = sId.split('--')[1];
		
		switch(quotationId){
			case "PlanDetails":
				this.getOwnerComponent().getRouter().navTo("planDetails100");
				break;
			case "MembershipEligibility":
				this.getOwnerComponent().getRouter().navTo("membershipEligibility100");
				break;
			case "SalientFeatures":
				this.getOwnerComponent().getRouter().navTo("salientFeatures100");
				break;
			case "DailyCashAllowance":
				this.getOwnerComponent().getRouter().navTo("dailyCashAllowance100");
				break;
			case "ProviderAccess":
				this.getOwnerComponent().getRouter().navTo("providerAccess100");
				break;
			case "MemberShare":
				this.getOwnerComponent().getRouter().navTo("memberShare100");
				break;
			case "Benefits":
				this.getOwnerComponent().getRouter().navTo("benefits100");
				break;
			case "Riders":
				this.getOwnerComponent().getRouter().navTo("riders100");
				break;
			case "ExclusionsAndLimitations":
				this.getOwnerComponent().getRouter().navTo("exclusionsLimitations100");
				break;
			case "ExclusionsAndLimitations":
				this.getOwnerComponent().getRouter().navTo("exclusionsLimitations100");
				break;
			case "MedicalInsurance":
				this.getOwnerComponent().getRouter().navTo("medicalInsurance100");
				break;
			case "Rates":
				this.getOwnerComponent().getRouter().navTo("rates100");
				break;
			case "Adjustments":
				this.getOwnerComponent().getRouter().navTo("adjustments100");
				break;
		}
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.master.planItem100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.master.planItem100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.master.planItem100
*/
//	onExit: function() {
//
//	}

});