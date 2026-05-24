import React from "react";

function minutesToReadEmoji(minutes) {
  if (minutes >= 30) {
    const count = Math.ceil(minutes / 10);
    return "🍱".repeat(count) + ` ${minutes} min read`;
  } else {
    const count = Math.ceil(minutes / 5) || 1;
    return "☕️".repeat(count) + ` ${minutes} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {typeof minutes === "number" ? (
        <small>{minutesToReadEmoji(minutes)}</small>
      ) : null}
    </article>
  );
}

export default Article;
