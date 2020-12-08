import Vuelidate from "vuelidate";
import Vue from "vue";
import App from "./App.vue";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.directive("phone", {
  bind: function(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      const x = this.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);

      if (!x[2] && x[1] !== "") {
        this.value = x[1] === "7" ? x[1] : "7" + x[1];
      } else {
        this.value = !x[3]
          ? x[1] + x[2]
          : x[1] + "(" + x[2] + ") " + x[3] + (x[4] ? "-" + x[4] : "");
      }
    };
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
