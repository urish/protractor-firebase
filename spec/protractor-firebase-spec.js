/* global describe, it, beforeEach, expect, spyOn, createSpyObj */

'use strict';

var Firebase = require('../lib/protractor-firebase');
var protractor = require('protractor');

describe('protractor-firebase', function () {
	var firebase;
	var protractorMock;

	beforeEach(function () {
		firebase = new Firebase('https://firechat-demo.firebaseio.com');
		protractorMock = createSpyObj('protractor', ['call']);
		spyOn(protractor, 'getInstance').andReturn(protractorMock);
	});

	describe('#$update', function () {
		it('should return a promise', function () {
			expect(firebase.$update({}).then).toBeDefined();
		});
	});
});