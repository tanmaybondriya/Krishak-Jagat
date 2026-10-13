// Fixed time zone so server output is identical everywhere (readers are in India).
const dateFormatter = new Intl.DateTimeFormat("hi-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

/** "2026-10-09T12:14:06Z" → "9 अक्तूबर 2026" */
export function formatDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? "" : dateFormatter.format(date);
}
