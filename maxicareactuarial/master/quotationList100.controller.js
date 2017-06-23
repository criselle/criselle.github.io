sap.ui.controller("maxicareactuarial.master.quotationList100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.master.quotationList100
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
	
	onPressNewQuotation: function(){
		this.getOwnerComponent().getRouter().navTo("addNewQuotation100");
	},
	
	onListItemPress: function(){
		this.getOwnerComponent().getRouter().navTo("planList100");
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.master.quotationList100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.master.quotationList100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.master.quotationList100
*/
//	onExit: function() {
//
//	}

});