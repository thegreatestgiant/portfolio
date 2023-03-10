document.addEventListener("DOMContentLoaded", async function () {
  const data = await (await fetch("source.json")).json();
  const page = window.document.title.split(" ").join("");
  for (const key in data[page]) {
    const elem = document.createElement(key.split("-")[0]);
    elem.textContent = data[page][key];
    document.querySelector("#content").appendChild(elem);
  }
  for (const pageKey of Object.keys(data)) {
    const a = document.createElement("a");
    a.href =
      pageKey.toLowerCase() === "home"
        ? "./"
        : pageKey === "Files"
        ? "//files.drshacker.systems"
        : `${pageKey.toLowerCase().replace(/_/g, "")}.html`;
    a.textContent = pageKey
      .replace(/_/g, " ")
      .trim();
    document.querySelector("#navbar").appendChild(a);
  }
});
