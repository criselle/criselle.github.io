sap.ui.controller("maxicareactuarial.detail.quotationItem.tab.otherArrangement.hybridArrangement100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.hybridArrangement100
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
		
		var bApplicableHA = oView.byId("idApplicableHASwitch").getState();
		this.onSetHAFields(bApplicableHA);
	},
	
	onChangeApplicableHA: function(oEvent){
		var oView = this.getView();
		var bApplicable = oView.byId("idApplicableHASwitch").getState();
		this.onSetHAFields(bApplicable);
	},
	
	onSetHAFields: function(bApplicable){
		var oView = this.getView();
		if(!bApplicable){
			//Max Amount
			oView.byId("idMaxAmountInpt").setEnabled(bApplicable);
		}
		//Max Loss Ratio
		oView.byId("idMaxLossRatioRadio").setEnabled(bApplicable);
		oView.byId("idMaxLossRatioInpt").setEnabled(bApplicable);
		//Max Amount
		oView.byId("idMaxAmountRadio").setEnabled(bApplicable);
	},
	
	onPressMaxLossRatio: function(oEvent){
		var oView = this.getView();
		//Max Amount
		oView.byId("idMaxAmountRadio").setEnabled(true);
		oView.byId("idMaxAmountInpt").setEnabled(false);
		//Max Loss Ratio
		oView.byId("idMaxLossRatioRadio").setEnabled(true);
		oView.byId("idMaxLossRatioInpt").setEnabled(true);
	},
	
	onPressMaxAmount: function(oEvent){
		var oView = this.getView();
		//Max Amount
		oView.byId("idMaxAmountRadio").setEnabled(true);
		oView.byId("idMaxAmountInpt").setEnabled(true);
		//Max Loss Ratio
		oView.byId("idMaxLossRatioRadio").setEnabled(true);
		oView.byId("idMaxLossRatioInpt").setEnabled(false);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.hybridArrangement100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.hybridArrangement100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.hybridArrangement100
*/
//	onExit: function() {
//
//	}

});