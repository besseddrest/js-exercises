// { value: x, left: {}, right: {}}

function invertBinaryTree(node) {
  let left = node.left;
  let right = node.right;
  node.left = right;
  node.right = left;
  if (left.value != null) invertBinaryTree(left);
  if (right.value != null) invertBinaryTree(right);
  return node;
}

