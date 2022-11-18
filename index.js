/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import { createServer } from "miragejs";

AppRegistry.registerComponent(appName, () => App);
if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/categories", () => {
      return {
        categories: [
          { id: 1, name: "Comida"},
          { id: 2, name: "Tecnologia"},
          { id: 3, name: "Acessórios"},
        ],
      }
    })
  },
});