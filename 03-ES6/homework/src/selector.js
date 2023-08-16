var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
 
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  var traverse = function(element) {
    // Revisa si el elemento actual cumple con la condición
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    // Recorre los hijos del elemento actual de forma recursiva
    for (var i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  };

  // Inicia el recorrido desde el elemento startEl
  traverse(startEl);
  
  // Retorna el conjunto de elementos que cumplen con la condición
  return resultSet;

  // Detecta y devuelve el tipo de selector
  // devuelve uno de estos tipos: id, class, tag.class, tag
};

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id"; //si la posicion 0 es igual a #,osea que empieza con # se toma como que es un ID
  if (selector[0] === ".") return "class"; //si la posicion 0 es igual a ".",osea que empieza con "." se toma como que es un class
  if (selector.includes(".")) return "tag.class"; //
  if(selector.includes("(>)")) return "child combinator"
  return "tag"; //si no es ninguno d los anteriores, es tag
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  
  
  var matchFunction = function(element){
    if (selectorType === "id") {
      return`#${element.id}` === selector;
    } else if (selectorType === "class") {
        for (let clase of element.classList) {
          if (`.${clase}` === selector) {
            return true;
          }; }      
    } else if (selectorType === "tag.class") {
      const [tag, className] = selector.split(".");
    
      return (
        matchFunctionMaker(tag)(element) &&
        matchFunctionMaker(`.${className}`)(element)
      );
    } else if (selectorType === "tag") {
      return (element.tagName &&
        element.tagName.toLowerCase() === selector
      );
    } else if(selectorType === "child combinator"){
      return`(>)${element.children}` === selector
    }
    return false
  }
  return matchFunction;
};

  let $ = function (selector) {
    let elements;
    let selectorMatchFunc = matchFunctionMaker(selector);
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
  };

