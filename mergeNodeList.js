/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {

};

const list1 = new ListNode(1, new ListNode(2, 3));
const list2 = new ListNode(1, new ListNode(3, 4));

console.log(list1);

mergeTwoLists([1, 2, 4], [1, 3, 4]);




