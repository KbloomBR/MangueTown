import UsuariosMenu from "@/components/UsuariosMenu.vue";
import UsuariosContrato from "@/components/UsuariosContrato.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: UsuariosMenu,
  },
  {
    path: "/contrato",
    component: UsuariosContrato,
  },
//   {
//     path: "/cadastrar",
//     name: "cadastrar",
//     component: () => import("./components/Cadastrar.vue"), // Exemplo de componente extra
//   },
];

const router = new VueRouter({
  mode: "history",
  routes,
});


export default router;
