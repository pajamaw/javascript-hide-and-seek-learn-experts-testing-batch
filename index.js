function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list');

  for(var i = 0; i < lis.length;i++){
    var children = lis[i].children

    for (var j = 0; j< children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var next = node.children[0]

  while(next){
    node = next
    next = node.children[0]
  }
  return node
}
