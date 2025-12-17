import { calculatePolicyScore } from "../utils/policyScore.js";

const score = calculatePolicyScore(policyData);

if (score < 70) {
  return res.status(400).json({
    error: "Insufficient policy data",
    score,
    message: "Minimum 70% policy completeness required"
  });
}
