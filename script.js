/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(llist) {
  let newllist = {};
  let next = null;
  while(llist) {
    console.log(llist.data);
    let previous = llist.prev;
    newllist = {
      data: llist.data,
      next: next,
      prev: llist.next
    }
    next = newllist;
    llist = llist.next;
  }
     
  return newllist;
}

/////////////////////////////////////////////////
function reverse(llist) {
    let head = llist;
    let last = null;
    while(head !== null) {
        let next = head.next;
        head.next = head.prev;
        head.prev = next;
        last = head;
        head = next;
    }

    return last;
}
