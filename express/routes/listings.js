import express from "express";
import DetailedProperty from "../models/DetailedProperties";

const router = express.Router();

router.get("/", (req, res) => {
  DetailedProperty.find({}).then(item => {
    res.json({ item });
  });
});

export default router;
