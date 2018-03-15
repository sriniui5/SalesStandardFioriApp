jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"finalapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"finalapp/test/integration/pages/App",
	"finalapp/test/integration/pages/Browser",
	"finalapp/test/integration/pages/Master",
	"finalapp/test/integration/pages/Detail",
	"finalapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "finalapp.view."
	});

	sap.ui.require([
		"finalapp/test/integration/MasterJourney",
		"finalapp/test/integration/NavigationJourney",
		"finalapp/test/integration/NotFoundJourney",
		"finalapp/test/integration/BusyJourney",
		"finalapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});