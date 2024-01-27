export default class TodoModel {
    constructor(title){
      this.id = crypto.randomUUID(),
      this.title = title,
      this.completed= false
    }
  }