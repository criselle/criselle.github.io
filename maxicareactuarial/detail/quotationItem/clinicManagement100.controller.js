sap.ui.controller("maxicareactuarial.detail.quotationItem.clinicManagement100", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maxicareactuarial.detail.quotationItem.clinicManagement100
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
		this.onPressCloseClinicMgmtItem();
		
		var oData = {
			arr: [{
				"Personnel": "P1",
				"Specialization": "S1"
			},{
				"Personnel": "P2",
				"Specialization": "S2"
			},{
				"Personnel": "P3",
				"Specialization": "S3"
			},]
		}
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
		oView.setModel(oModel, "oPersonnel");
	},
	
	onPressAddClinicMgmt: function(){
		var oView = this.getView();
		oView.byId("ClinicManagementVBox").setVisible(false);
		oView.byId("ClinicManagementItemVBox").setVisible(true);
	},
	
	onPressCloseClinicMgmtItem: function(){
		var oView = this.getView();
		oView.byId("ClinicManagementVBox").setVisible(true);
		oView.byId("ClinicManagementItemVBox").setVisible(false);
	},
	
	handleValueHelp : function (oEvent) {
		var sInputValue = oEvent.getSource().getValue();

		// create value help dialog
		if (!this._valueHelpDialog) {
			this._valueHelpDialog = sap.ui.xmlfragment("maxicareactuarial.fragment.personnelInput", this);
			this.getView().addDependent(this._valueHelpDialog);
		}

		// create a filter for the binding
		this._valueHelpDialog.getBinding("items").filter([new sap.ui.model.Filter(
			"Personnel",
			sap.ui.model.FilterOperator.Contains, sInputValue
		)]);

		// open value help dialog filtered by the input value
		this._valueHelpDialog.open(sInputValue);
	},
	
	_handleValueHelpSearch : function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter(
			"Personnel",
			sap.ui.model.FilterOperator.Contains, sValue
		);
		evt.getSource().getBinding("items").filter([oFilter]);
	},
	
	_handleValueHelpClose : function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = this.getView().byId("idPersonnelInput"),
				sDescription = oSelectedItem.getDescription();

			productInput.setSelectedKey(sDescription);
		}
		evt.getSource().getBinding("items").filter([]);
	},

	suggestionItemSelected: function (evt) {

		var oItem = evt.getParameter('selectedItem'),
			sKey = oItem ? oItem.getKey() : '';
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maxicareactuarial.detail.quotationItem.clinicManagement100
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maxicareactuarial.detail.quotationItem.clinicManagement100
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maxicareactuarial.detail.quotationItem.clinicManagement100
*/
//	onExit: function() {
//
//	}

});