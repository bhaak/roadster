const blockcodes = document.querySelectorAll(".highlight code[data-lang]");

for (const bc of blockcodes) {
  const parent = bc.parentElement;
  const content = bc.innerText.split("\n").filter(Boolean).join("\n");

  // Copy to clipboard
  if (navigator.clipboard !== undefined) {
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    copyButton.classList.add("btn");
    copyButton.innerText = "Copy";

    copyButton.addEventListener("click", () => {
      copyButton.innerText = "Copied";
      setTimeout(() => {
        copyButton.innerText = "Copy";
      }, 1500);

      navigator.clipboard.writeText(content);
    });

    parent.closest(".highlight pre").prepend(copyButton);
  }
}
