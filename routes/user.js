import express from "express";
import { getAllusers } from "../controllers/user.js";
import { register } from "../controllers/user.js";
import { getUserDetails, updateUsers,deleteUsers} from "../controllers/user.js";

const router =express.Router();

router.get("/all", getAllusers );

router.post("/new", register );

router
.route("/userid/:id")
.get(getUserDetails)
.put(updateUsers)
.delete(deleteUsers)



// router.get("/userid/:id",getUserDetails)
// router.put("/userid/:id", updateUsers)
// router.delete("/userid/:id", deleteUsers)


export default router;