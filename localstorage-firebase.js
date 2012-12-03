/*
	localstorage-firebase.js 
	a localstorage (http://www.w3.org/TR/webstorage/) to Firebase (http://firebase.com) adapter/sync tool
	
	Copyright 2012 Shazron Abdullah

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

(function(){
	
	function localStorageFirebase() {
		this.originalStorage = window.localStorage;
	}
	
	localStorageFirebase.prototype.length = function() {
		//TODO: use firebase, pass thru for now
		return this.originalStorage.length();
	}

	localStorageFirebase.prototype.key = function(index) {
		//TODO: use firebase, pass thru for now
		return this.originalStorage.key(index);
	}

	localStorageFirebase.prototype.setItem = function(key, value) {
		//TODO: use firebase, pass thru for now
		this.originalStorage.setItem(key, value);
	}

	localStorageFirebase.prototype.removeItem = function(key) {
		//TODO: use firebase, pass thru for now
		this.originalStorage.removeItem(key);
	}

	localStorageFirebase.prototype.clear = function() {
		//TODO: use firebase, pass thru for now
		this.originalStorage.clear();
	}
	
	// Non-standard
	localStorageFirebase.prototype.setFirebaseUrl = function(firebaseUrl) {
		this.originalStorage.setItem("firebaseUrl", firebaseUrl);
		var oldFirebaseGuid = this.originalStorage.getItem("firebaseGuid");
		var newFirebaseGuid = createUUID();
		this.originalStorage.setItem("firebaseGuid", newFirebaseGuid);
		this.originalStorage.setItem("firebaseCreationDate", Date.now())
		
		// TODO: modify the url with the guid appended (perhaps also remove the old guid contents from Firebase)
	}
	
	// Non-standard
	localStorageFirebase.sync = function() {
		//TODO: this will be non-trivial, haven't designed this yet
	}
	
	////////////////////////////////////
	
	function createUUID = function() {
	    return UUIDcreatePart(4) + '-' +
	        UUIDcreatePart(2) + '-' +
	        UUIDcreatePart(2) + '-' +
	        UUIDcreatePart(2) + '-' +
	        UUIDcreatePart(6);
	};
	
	function UUIDcreatePart(length) {
	    var uuidpart = "";
	    for (var i=0; i<length; i++) {
	        var uuidchar = parseInt((Math.random() * 256), 10).toString(16);
	        if (uuidchar.length == 1) {
	            uuidchar = "0" + uuidchar;
	        }
	        uuidpart += uuidchar;
	    }
	    return uuidpart;
	}
	
	////////////////////////////////////
	// Export
	
	window.localStorage = new localStorageFirebase();
	
})();

