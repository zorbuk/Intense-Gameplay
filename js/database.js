Storage.prototype.almacenar = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.obtener = function(key) {
    return JSON.parse(this.getItem(key))
}
