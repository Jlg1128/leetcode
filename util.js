const _ = module.exports;
_.getLinkedList = function(arr = []) {
    function gen(index, arr) {
        let node = null;
        if (index < arr.length) {
            node = new ListNode(arr[index]);
            node.next = gen(index + 1, arr);
        }
        return node;
    }
    return gen(0, arr);
}


function ListNode(val) {
    this.val = val || null;
    this.next = null;
}
