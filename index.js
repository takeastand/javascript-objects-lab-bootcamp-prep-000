var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  object = new Object({key: value});
  return Object.assign(object, {[key]: value});
}