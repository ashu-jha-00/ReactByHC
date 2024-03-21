const reactElement1 = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_ ",
  },
  children: "Google.com",
};
const reactElement2 = {
  type: "button",
  props: {
    onClick: () => {
      alert("Button clicked!");
    },
  },
  children: "Click me",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement2, mainContainer);

function customRender(reactElement, container) {
  //version 1
  /* const newElement = document.createElement(reactElement.type);
  newElement.href = reactElement.props.href;
  newElement.innerHTML = reactElement.children;
  newElement.setAttribute("target", reactElement.props.target);
  container.appendChild(newElement); */

  //version 2
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "onClick") {
      // Add event listener for "onClick" instead of setting it as an attribute
      domElement.addEventListener("click", reactElement.props[prop]);
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}
