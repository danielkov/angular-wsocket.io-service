import { Client } from '../../../wsocket.io-client/index';

export default class WsocketIOService {
  constructor () {

  }

  connect (url) {
    return this.client = new Client(url);
  }

  on (name, fn, ...fns) {
    return this.client.on(name, fn, ...fns);
  }

  send (name, data) {
    return this.client.send(name, data);
  }

  all (...fns) {
    return this.client.all(...fns);
  }

  off (name) {
    return this.client.off(name);
  }

  offAll () {
    return this.client.offAll();
  }

  close () {
    this.client = null;
    return this.client.close();
  }
}
