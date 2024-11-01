import express from "express";
import UserRoute from "./userRoute.js";

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRoute,
  },
];

routes.forEach((current, i) => {
  router.use(current.path, current.route);
});

export default router;