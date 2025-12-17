const verification = verifyEmail(email, policyData);

if (!verification.passed) {
  return res.status(500).json({
    error: "AI output failed validation",
    verification
  });
}
