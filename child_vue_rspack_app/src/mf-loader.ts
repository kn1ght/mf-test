import { createApp } from "vue";

import "./index.css";

import App from "./App.vue";

type GetCreateAppParams = {
  message?: string;
};

export default function getCreateApp(params: GetCreateAppParams) {
  return createApp(App, params);
}
