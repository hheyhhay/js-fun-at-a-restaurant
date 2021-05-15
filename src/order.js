function takeOrder(order, orderTypes) {
  if (orderTypes.length < 3) {
      orderTypes.push(order)
      return orderTypes;
  }
};

function refundOrder(orderNumRefund, orderTypes) {
  for (i = 0; i < orderTypes.length; i++) {
    if (orderTypes[i].orderNumber === orderNumRefund) {
      orderTypes.splice(i, 1)
    }
  } return orderTypes; // returns the orderType with order removed
};

function listItems(orderTypes) {
  var list = [];
    for (i = 0; i < orderTypes.length; i++) {
    list.push(orderTypes[i].item);
  }
  var printList = list.join(", ");
  return printList;
};

function searchOrder(orderTypes, itemSearch) {
  var list = [];
  for (i = 0; i < orderTypes.length; i++) {
    list.push(orderTypes[i].item);
  } return list.includes(itemSearch);
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
