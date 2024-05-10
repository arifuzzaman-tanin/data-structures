class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new TreeNode(value)

        if(!this.root){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(rootNode, newNode){
        if(newNode.value < rootNode.value){
            if(!rootNode.left){
                rootNode.left = newNode
            }
            else{
                this.insertNode(rootNode.left, newNode)
            }
        }
        else{
            if(!rootNode.right){
                rootNode.right = newNode
            }
            else{
                this.insertNode(rootNode.right, newNode)
            }
        }
    }

    inorderTraversal(rootNode){
        if(rootNode != null){
            this.inorderTraversal(rootNode.left)
            console.log(rootNode.value)
            this.inorderTraversal(rootNode.right)
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder traversal of the binary tree:");
tree.inorderTraversal(tree.root);
