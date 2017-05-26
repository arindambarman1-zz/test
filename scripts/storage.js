export default Storage = (function() {
  const keyWord = 'fields'

  var getObject = function(key) {
    var fields = window.localStorage[key]
    if (fields && fields !== null && fields !== "undefined" && fields !== undefined) {
      return JSON.parse(fields) || []
    } else {
      return []
    }
  }

  var storeObject = function(key, array) {
    window.localStorage[key] = JSON.stringify(array)
  }

  return {
    getFields: function() {
      return getObject(keyWord)
    },

    storeFields: function(array) {
      storeObject(keyWord, array)
    }
  }
})()