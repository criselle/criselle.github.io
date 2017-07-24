sap.ui.controller("maxicareactuarial.master.quotationItem100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.master.quotationItem100
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
			case "AccountInformation":
				this.getOwnerComponent().getRouter().navTo("accountInformation100");
				break;
			case "ClinicManagement":
				this.getOwnerComponent().getRouter().navTo("clinicManagement100");
				break;
			case "OtherArrangement":
				this.getOwnerComponent().getRouter().navTo("otherArrangement100");
				break;
			case "WellnessProgram":
				this.getOwnerComponent().getRouter().navTo("wellnessProgram100");
				break;
			case "LoadingAndFees":
				this.getOwnerComponent().getRouter().navTo("loadingAndFees100");
				break;
			case "PricingInstructions":
				this.getOwnerComponent().getRouter().navTo("pricingInstructions100");
				break;
		}
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.master.quotationItem100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.master.quotationItem100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.master.quotationItem100
*/
//	onExit: function() {
//
//	}

});