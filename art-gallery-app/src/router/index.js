import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import userDataService from "../services/mainUserData";
import HomeView from "../views/HomeView.vue";
import UserPostView from "../views/UserPostView.vue";
import LogIn from "../components/LogIn.vue";
import SignUP from "../components/SignUp.vue";
import IStaticMethods from "preline/preline";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  /* {
    path: "/about",
    name: "about",
    component: () =>
    import( webpackChunkName: "about"  "../views/AboutView.vue")
  }, */
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "singup",
    component: SignUP,
  },
  {
    path: "/post",
    name: "post",
    component: UserPostView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    try {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          if (!userDataService.getUserUid() && user && user.uid) {
            userDataService.setUserUid(user.uid);
          }
          resolve(user);
        },
        reject
      );
    } catch (error) {
      console.log(error);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("no access");
      next("/");
    }
  } else {
    next();
  }
});
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      if (IStaticMethods && typeof IStaticMethods.autoInit === "function") {
        IStaticMethods.autoInit();
      }
    }, 100);
  }
});

export default router;
