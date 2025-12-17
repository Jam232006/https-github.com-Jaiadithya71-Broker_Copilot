export function calculatePolicyScore(policy) {
  let score = 0;

  if (policy.policyNumber) score += 40;
  if (policy.customerName) score += 20;
  if (policy.policyType) score += 20;
  if (policy.expiryDate) score += 10;
  if (policy.premiumAmount) score += 10;

  return Math.min(score, 100);
}
