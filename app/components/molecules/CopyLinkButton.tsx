"use client";

import LinkCopy from "../../../public/social/link.svg";

export default function CopyLinkButton({ url }: { url: string }) {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button type="button" onClick={copyLink} aria-label="Copy link">
      <LinkCopy />
    </button>
  );
}
