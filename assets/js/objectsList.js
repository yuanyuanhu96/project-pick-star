class ObjectsList {
  type;

  needCreate;
  created = 0;
  list = [window.multiObjects, window.object];

  constructor(type, needCreate) {
    this.needCreate = needCreate;
    this.type = type;
    console.log(this.list);
    //    this.createObjects();
  }

  //   createObjects() {
  //     if (this.created <= this.needCreate) {
  //       //const window.multiObjects = new window.MultiObjects(0, 20);
  //       console.log(window.object);

  //       this.created += 1;
  //       this.createObjects();
  //     }
  //   }
}
