'use strict';

var module = angular.module('angularWsocketIOService', []);

module.service('WsocketIOService', function () {
	var handleFunctions = {};
	
	this.connect =  function (url) {
		url = url || window.location.hostname + ':8080';
		url = (url.startsWith('ws://')) ? url : 'ws://' + url;
		this.socket = new WebSocket(url);
		this.socket.onmessage = function (data) {
		var d = JSON.parse(data.data);
		var messageName = d.name;
		if (handleFunctions[messageName]) {
			handleFunctions[messageName](d.data);
		}
	}
	}
	this.send = function (name, data) {
		if (this.socket) {
			this.socket.send(JSON.stringify({name: name, data: data}));
		}
		else {
			throw new Error('No open WebSocket connections.')
		}
	}
	this.on = function (name, fn) {
		handleFunctions[name] = fn;
	}
	this.off = function (fn) {
		if (this.socket) {
			this.socket.close();
			handleFunctions = {};
			if(fn){
				fn();
			}
		}
		else {
			throw new Error('No open WebSocket connections. Wait, that\'s kinda good, right?')
		}
	}
})


/*String.startsWith() polyfill á lá MDN*/
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}