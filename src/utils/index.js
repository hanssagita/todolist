export default {
  updateObject (oldObject, updatedObject)  {
    return {
      ...oldObject,
      ...updatedObject
    }
  }
}