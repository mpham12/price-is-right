function calculateItemTotal(item) {
  const total = item.price * (1 - item.discount) * item.quantity
  item.total = parseInt(total * 100) / 100

  return item
}

export function calculateTotal(items) {
  return items
}
