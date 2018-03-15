sap.ui.define([
		"finalapp/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("NetAmount").length, 1, "The sorting by NetAmount returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("SalesOrderID").length, 1, "The sorting by SalesOrderID returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("NetAmount").length, 1, "The group by NetAmount returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to NetAmount if the user groupes by NetAmount", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("NetAmount");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "NetAmount", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by SalesOrderID and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "NetAmount");

		this.oGroupSortState.sort("SalesOrderID");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});