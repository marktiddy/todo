import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import {
  MdField,
  MdCheckbox,
  MdToolbar,
  MdCard,
  MdLayout,
  MdElevation,
  MdButton
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-light.css";

Vue.use(VueMaterial);
Vue.use(MdField);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdLayout);
Vue.use(MdElevation);
Vue.use(MdCheckbox);
Vue.use(MdButton);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
