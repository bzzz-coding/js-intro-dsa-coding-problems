const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function')
})

test('replaces Sleeping with sitting', () => {
  expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch")
})

test('replaces sleeping with Sitting', () => {
  expect(searchReplace("He is sleeping on the couch", "sleeping", "Sitting")).toEqual("He is sitting on the couch")
})

test('replaces SLEEPING with Sitting', () => {
  expect(searchReplace("He is SLEEPING on the couch", "SLEEPING", "Sitting")).toEqual("He is SITTING on the couch")
})
