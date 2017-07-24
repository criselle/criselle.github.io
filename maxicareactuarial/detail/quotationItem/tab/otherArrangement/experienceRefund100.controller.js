sap.ui.controller("maxicareactuarial.detail.quotationItem.tab.otherArrangement.experienceRefund100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.experienceRefund100
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
		var bApplicableER = oView.byId("idApplicableERSwitch").getState();
		this.onSetExpRefundFields(bApplicableER);
	},
	
	onChangeApplicableER: function(oEvent){
		var oView = this.getView();
		var bApplicable = oView.byId("idApplicableERSwitch").getState();
		oView.getController().onSetExpRefundFields(bApplicable);
	},
	
	onSetExpRefundFields: function(bApplicable){
		var oView = this.getView();
		if(!bApplicable){
			//Rebate
			oView.byId("idRebateInpt1").setEnabled(bApplicable);
			oView.byId("idRebateInpt2").setEnabled(bApplicable);
			oView.byId("idAddRebateBtn").setEnabled(bApplicable);
			oView.byId("idDeleteRebateBtn").setEnabled(bApplicable);
		}
		//Formula
		oView.byId("idFormulaBtn").setEnabled(bApplicable);
		oView.byId("idFormulaInpt1").setEnabled(bApplicable);
		oView.byId("idFormulaInpt2").setEnabled(bApplicable);
		oView.byId("idFormulaSelect").setEnabled(bApplicable);
		//Rebate
		oView.byId("idRebateBtn").setEnabled(bApplicable);
	},
	
	onPressFormula: function(oEvent){
		var oView = this.getView();
		//Rebate
		oView.byId("idRebateBtn").setEnabled(true);
		oView.byId("idRebateInpt1").setEnabled(false);
		oView.byId("idRebateInpt2").setEnabled(false);
		oView.byId("idAddRebateBtn").setEnabled(false);
		oView.byId("idDeleteRebateBtn").setEnabled(false);
		//Formula
		oView.byId("idFormulaBtn").setEnabled(true);
		oView.byId("idFormulaInpt1").setEnabled(true);
		oView.byId("idFormulaInpt2").setEnabled(true);
		oView.byId("idFormulaSelect").setEnabled(true);
	},
	
	onPressRebate: function(oEvent){
		var oView = this.getView();
		//Rebate
		oView.byId("idRebateBtn").setEnabled(true);
		oView.byId("idRebateInpt1").setEnabled(true);
		oView.byId("idRebateInpt2").setEnabled(true);
		oView.byId("idAddRebateBtn").setEnabled(true);
		oView.byId("idDeleteRebateBtn").setEnabled(true);
		//Formula
		oView.byId("idFormulaBtn").setEnabled(true);
		oView.byId("idFormulaInpt1").setEnabled(false);
		oView.byId("idFormulaInpt2").setEnabled(false);
		oView.byId("idFormulaSelect").setEnabled(false);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.experienceRefund100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.experienceRefund100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.detail.quotationItem.tab.otherArrangement.experienceRefund100
*/
//	onExit: function() {
//
//	}

});