export const required = value =>
  value || value === 0 ? undefined : "Required";