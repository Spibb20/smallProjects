// element - div, p, h1, h2
// attributes - [{attribute:'class',value:'card'}]
// value - innerText
function generateHtmlElement(element, attributes, value) {
  //your code is here
  const elementTag = document.createElement(element);

  attributes.forEach((attr) => {
    elementTag.setAttribute(attr.attribute, attr.value);
  });
  elementTag.innerText = value;

  return elementTag;
}

const descP = generateHtmlElement(
  "p",
  [
    { attribute: "class", value: "description-text" },
    { attribute: "id", value: "uniq-id" },
  ],
  "this is a description"
);
console.log(descP);

// descP -> <p id="uniq-id" class="description-text">this is a description</p>
document.getElementById("app").appendChild(descP);
