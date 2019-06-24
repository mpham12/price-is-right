import { expect } from 'chai'
import * as checkout from './checkout'

describe('Checkout', () => {
  it('calculates the total', () => {
    const items = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2, total: 0
    }]

    const expected = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12,
      quantity: 2, total: 35.11
    }]
//console.log(items)

//let result = checkout.calculateTotal(items);

//console.log(result)
   expect(checkout.calculateTotal(items)).to.deep.equal(expected)
  })
})
