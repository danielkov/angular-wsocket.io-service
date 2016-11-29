* WSocket.io Angular Service

The easiest way to integrate wsocket.io into your AngularJS project.

** Browser support

This only supports browsers that come with WebSocket enabled. It has a polyfill for `String.prototype.startsWith()`.

** Simple use

```js
angular.module('myApp', ['angularWsocketIOService'])

.controller('MyController', ['$scope', 'WsocketIOService', function ($scope, WsocketIOService) {
	$scope.currentMessage = '';
	$scope.response = '';

	WsocketIOService.connect();

	$scope.sendMessage = function () {
		WsocketIOService.send('message', {msg: $scope.currentMessage});
	}

	WsocketIOService.on('message-back', function (data) {
		$scope.response = data.msg;
	})
}]);
```