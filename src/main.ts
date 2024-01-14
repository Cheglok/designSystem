import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const requireComponent = require.context("./components/icons", false, /Icon[A-Z]\w+\.(vue)$/);

const DS = createApp(App);
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    // @ts-ignore
    const componentName = fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");

    DS.component(componentName, componentConfig.default);
});

DS.use(store).mount("#app");
