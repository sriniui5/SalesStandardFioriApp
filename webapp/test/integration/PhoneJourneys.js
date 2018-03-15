jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"finalapp/test/integration/NavigationJourneyPhone",
		"finalapp/test/integration/NotFoundJourneyPhone",
		"finalapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});