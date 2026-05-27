const nodes = {
  basebin: {
    kind: "index",
    link: "https://github.com/basebin",
    text: "github.com/basebin",
    note: "public entry point.",
  },
  harpertoken: {
    kind: "software",
    link: "https://github.com/harpertoken",
    text: "github.com/harpertoken",
    note: "developer tooling.",
  },
  libnudget: {
    kind: "library",
    link: "https://github.com/libnudget",
    text: "github.com/libnudget",
    note: "shared packages.",
  },
  "coccinella-labs": {
    kind: "software",
    link: "https://github.com/Coccinella-Labs",
    text: "github.com/Coccinella-Labs",
    note: "apps.",
  },
};

const buttons = [...document.querySelectorAll(".node")];
const nameEl = document.querySelector("#node-name");
const kindEl = document.querySelector("#node-kind");
const linkEl = document.querySelector("#node-link");
const noteEl = document.querySelector("#node-note");

function selectNode(name) {
  const node = nodes[name];
  if (!node) return;

  buttons.forEach((button) => {
    const active = button.dataset.node === name;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  nameEl.textContent = name;
  kindEl.textContent = node.kind;
  linkEl.href = node.link;
  linkEl.textContent = node.text;
  noteEl.textContent = node.note;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => selectNode(button.dataset.node));
});
