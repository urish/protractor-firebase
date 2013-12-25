/* protractor-firebase by Uri Shaked. License: MIT */

'use strict';

var Firebase = require('firebase');
var protractor = require('protractor');

function await(promise) {
	protractor.getInstance().call(function() {
		return promise;
	});
}

Firebase.prototype.$remove = function() {
	var deferred = new protractor.promise.Deferred();
	this.remove(function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(true);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$set = function(value) {
	var deferred = new protractor.promise.Deferred();
	this.set(value, function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(true);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$setWithPriority = function(value, priority) {
	var deferred = new protractor.promise.Deferred();
	this.setWithPriority(value, priority, function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(true);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$setPriority = function(priority) {
	var deferred = new protractor.promise.Deferred();
	this.setPriority(priority, function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(true);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$update = function(value) {
	var deferred = new protractor.promise.Deferred();
	this.update(value, function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(true);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$push = function(value) {
	var deferred = new protractor.promise.Deferred();
	var newLocation = this.push(value, function(error) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.fulfill(newLocation);
		}
	});
	await(deferred.promise);
	return deferred.promise;
};

Firebase.prototype.$value = function(waits) {
	var deferred = new protractor.promise.Deferred();
	if (waits) {
		var listener = function(snapshot) {
			if (snapshot.val() !== null) {
				this.off('value', listener);
				deferred.fulfill(snapshot.val());
			}
		}.bind(this);
		this.on('value', listener);
	} else {
		this.once('value', function(snapshot) {
			deferred.fulfill(snapshot.val());
		});
	}
	return deferred.promise;
};

Firebase.prototype.$valueChange = function() {
	var deferred = new protractor.promise.Deferred();
	var initialValue;
	var listener = function(snapshot) {
		if (initialValue === undefined) {
			initialValue = snapshot.val();
			return;
		}
		if (snapshot.val() !== initialValue) {
			this.off('value', listener);
			deferred.fulfill(snapshot.val());
		}
	}.bind(this);
	this.on('value', listener);
	return deferred.promise;
};

module.exports = Firebase;
