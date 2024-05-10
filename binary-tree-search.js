class BinaryTree{
    #TreeNode = class{
        constructor(value){
            this.value = value
            this.left = null
            this.right = null
        }
    }
    
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new this.#TreeNode(value)

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
    
    search(value){
        return this.searchNode(this.root, value)
    }
    
    searchNode(rootNode, value){
        if(rootNode === null){
            return false
        }
        
        if(rootNode.value > value){
            return this.searchNode(rootNode.left, value)
        }
        else if(rootNode.value < value){
            return this.searchNode(rootNode.right, value)
        }
        else{
            return true
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(3);
tree.insert(7);
tree.insert(19);


console.log("Inorder traversal of the binary tree:");
tree.inorderTraversal(tree.root);

console.log("Search for value 7:", tree.search(7)); // Should return true
console.log("Search for value 20:", tree.search(20)); // Should return false

// OUTPUT
// norder traversal of the binary tree:
// 1
// 3
// 5
// 7
// 10
// 15
// 19
// Search for value 7: true
// Search for value 20: false