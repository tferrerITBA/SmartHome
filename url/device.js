api.model = api.model || {};

api.model.device = class {
  constructor(id, name, meta) {
    if (id) {
      this.id = id;
    } else {
      delete(this.id);
    }
    this.name = name;
    this.meta = meta;
  }
}
