
// for ( node of document.body.childNodes ) {
//     console.log( node )
// }

//    for (let i = 0; i < document.body.childNodes.length; i++) {
//       console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
//     }


const elem = document.querySelector('.banner1')
// console.log(elem.childNodes[0])
// console.log(elem.childNodes)

// for (node of elem.childNodes ) {
//     console.log(node)
// }

// console.log(elem.lastChild);
// console.log(elem.childNodes)
// console.log(Array.from(elem.childNodes))
// console.log(Array.isArray(Array.from(elem.childNodes)))
// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(elem.childNodes[0].nextSibling)

  // shows 0, 1, length, item, values and more.
  for (let prop of document.body.children) console.log(prop);

  const side_menu = document.querySelector('.fa-stack');
  const side_menu_content = document.querySelector('.side-menu-container')
  side_menu.addEventListener('click', () => {
    alert(side_menu_content.getAttribute("style"));
  })