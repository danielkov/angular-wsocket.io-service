import { angular } from 'angular';
import WsocketIOService from './service/wsocket.io-service';

'use strict';

module.exports = angular.module('angularWsocketIOService', [])

.service('WsocketIOService', WsocketIOService);
