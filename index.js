function newImage(x, y, z) {
  let object = document.createElement('img');
  object.src = x
  object.style.position = 'fixed';
  object.style.left = y
  object.style.bottom = z
  document.body.append(object);
  return object
}
// newImage and newItem tied together
function newItem(x, y, z) {
  let Item = newImage(x, y, z)
  
  Item.addEventListener('dblclick', function() {
      Item.remove();
  });
}
// newImage function invoked
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '300px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
// newItem function invoked
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');