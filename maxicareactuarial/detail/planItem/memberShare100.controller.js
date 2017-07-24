sap.ui.controller("maxicareactuarial.detail.planItem.memberShare100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.detail.planItem.memberShare100
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
				oView.getController().initialize();
			}	
		});
	},
	
	initialize: function(){
		var oView = this.getView();
		this.onChangeSharedIPOP();
		this.onChangeRiders();
		this.onChangeOtherIllness();
	},
	
	onChangeSharedIPOP: function(){
		var oView = this.getView();
		var bSharedIPOP = oView.byId("idSharedIPOPSwitch").getState();
		
		if(bSharedIPOP){
			oView.byId("idSharedIPOPPanel").setVisible(true);
			oView.byId("idInpatientPanel").setVisible(false);
			oView.byId("idOutpatientPanel").setVisible(false);
		}else{
			oView.byId("idSharedIPOPPanel").setVisible(false);
			oView.byId("idInpatientPanel").setVisible(true);
			oView.byId("idOutpatientPanel").setVisible(true);
		}
	},
	
	onChangeRiders: function(){
		var oView = this.getView();
		var bRiders = oView.byId("idRidersSwitch").getState();
		
		if(bRiders){
			oView.byId("idRidersPanel").setVisible(true);
		}else{
			oView.byId("idRidersPanel").setVisible(false);
		}
	},
	
	onChangeOtherIllness: function(){
		var oView = this.getView();
		var bOtherIllness = oView.byId("idOtherIllnessSwitch").getState();
		
		if(bOtherIllness){
			oView.byId("idOtherIllnessPanel").setVisible(true);
		}else{
			oView.byId("idOtherIllnessPanel").setVisible(false);
		}
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.detail.planItem.memberShare100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.detail.planItem.memberShare100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.detail.planItem.memberShare100
*/
//	onExit: function() {
//
//	}

});