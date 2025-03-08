function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

function formatViews(count) {
  if (count < 1000) return count.toString();
  if (count < 1_000_000)
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  if (count < 1_000_000_000)
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
}

module.exports = { timeAgo, formatViews };
