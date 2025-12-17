<div className="mt-4">
  <p className="text-sm text-slate-400">
    Policy Completeness Score
  </p>
  <div className="w-full bg-slate-800 rounded h-2 mt-1">
    <div
      className="bg-green-400 h-2 rounded"
      style={{ width: `${score}%` }}
    />
  </div>
  <p className="text-xs mt-1">{score}%</p>
</div>
