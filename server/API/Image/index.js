// Libraries
import express from "express";
import passport from "passport";


// Database modal
import { ImageModel } from "../../database/allModels";


const Router = express.Router();



/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});






export default Router;