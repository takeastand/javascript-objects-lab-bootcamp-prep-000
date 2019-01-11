var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value});
  object = new Object({key: value});
  return object;
}