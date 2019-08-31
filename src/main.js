import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import VueMeta from "vue-meta";
import Paginate from "vuejs-paginate";
import router from "./router";
import store from "./store";
import localizeFilter from "@/filters/localize.filter";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import messagePlugin from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";
import Loader from "@/components/app/Loader";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(titlePlugin);
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
// name - function
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyDEgYPil1c8o4ndTVX_An0GEiLEKyx-1zI",
  authDomain: "vue-crm-main.firebaseapp.com",
  databaseURL: "https://vue-crm-main.firebaseio.com",
  projectId: "vue--crm-main",
  storageBucket: "",
  messagingSenderId: "987843894078",
  appId: "1:987843894078:web:39f6d3e545ea430b"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
