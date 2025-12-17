export function verifyEmail(email, policyData) {
  const checks = {
    policyNumberPresent: email.includes(policyData.policyNumber),
    customerNamePresent: email.includes(policyData.customerName),
    policyTypePresent: email.includes(policyData.policyType)
  };

  const passed = Object.values(checks).every(Boolean);

  return { passed, checks };
}
