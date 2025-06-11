import express from "express";
import { spawn } from "child_process";

const router = express.Router();
let result = [];

router.get("/Reqvectors", async (req, res) => {
  try {
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  } finally {
    result = [];
  }
});

router.post("/Resvectors", async (req, res) => {
  try {
    const {
      selectedSite,
      searchType,
      numberOfUpWeeks,
      numberOfDownWeeks,
      skipWhat,
      value1,
      value2,
      value3,
      value4,
      dateInput1,
      dateInput2,
      dateInput3,
      fixedDate,
      numberOfN2Skips,
      numberOfN3Skips,
      matches
    } = req.body;

    const value20 = value2[0];
    const value21 = value2[1];
    const value22 = value2[2];

    const args = [
      isNaN(selectedSite) || selectedSite == null ? 0 : parseInt(selectedSite, 10),
      isNaN(searchType) || searchType == null ? 0 : parseInt(searchType, 10),
      isNaN(numberOfUpWeeks) || numberOfUpWeeks == null ? 5 : parseInt(numberOfUpWeeks, 10),
      isNaN(numberOfDownWeeks) || numberOfDownWeeks == null ? 5 : parseInt(numberOfDownWeeks, 10),
      isNaN(skipWhat) || skipWhat == null ? 0 : parseInt(skipWhat, 10),
      isNaN(value1) || value1 == null ? 0 : parseInt(value1, 10),
      isNaN(value20) || value20 == null ? 0 : parseInt(value20, 10),
      isNaN(value21) || value21 == null ? 0 : parseInt(value21, 10),
      isNaN(value22) || value22 == null ? 0 : parseInt(value22, 10),
      isNaN(value3) || value3 == null ? 0 : parseInt(value3, 10),
      isNaN(value4) || value4 == null ? 0 : parseInt(value4, 10),
      dateInput1 == null || dateInput1 === "" ? "00/00/00" : dateInput1,
      dateInput2 == null || dateInput2 === "" ? "00/00/00" : dateInput2,
      dateInput3 == null || dateInput3 === "" ? "00/00/00" : dateInput3,
      isNaN(fixedDate) || fixedDate == null ? 1 : parseInt(fixedDate, 10),
      isNaN(numberOfN2Skips) || numberOfN2Skips == null ? 0 : parseInt(numberOfN2Skips, 10),
      isNaN(numberOfN3Skips) || numberOfN3Skips == null ? 0 : parseInt(numberOfN3Skips, 10),
      isNaN(matches) || matches == null ? 3 : parseInt(matches, 10)
    ];

    const exePath = "./csvFiles/cal";
    const process = spawn(exePath, args);

    let stdoutData = "";
    let stderrData = "";
    process.stdout.on("data", (data) => {
      stdoutData += data.toString();
    });
    process.stderr.on("data", (data) => {
      stderrData += data.toString();
    });

    process.on("close", (code) => {
      if (code !== 0) {
        console.error("Error in execution:", stderrData);
        return res.status(500).json(`Server Error: ${stderrData}`);
      }

      if (!stdoutData) {
        console.error("No output from executable.");
        return res.status(500).json("Server Error: No output from executable.");
      }

      result = JSON.parse(stdoutData);
      res.status(200).json("result");
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json("Server Error");
  }
});

router.post("/Reqpattern", async (req, res) => {
  try {
    const { Fpanel, Spanel } = req.body;

    let args = [Fpanel, Spanel];
    const exePath = "./routes/triS";
    const process = spawn(exePath, args);

    let stdoutData = "";
    let stderrData = "";
    process.stdout.on("data", (data) => {
      stdoutData += data.toString();
    });
    process.stderr.on("data", (data) => {
      stderrData += data.toString();
    });

    process.on("close", (code) => {
      if (code !== 0) {
        console.error("Error in execution:", stderrData);
        return res.status(500).json(`Server Error: ${stderrData}`);
      }

      if (!stdoutData) {
        console.error("No output from executable.");
        return res.status(500).json("Server Error: No output from executable.");
      }

      const patternResult = JSON.parse(stdoutData);
      res.status(200).json(patternResult);
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json("Server Error");
  }
});

export default router;
