import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments)
    this.files = [Ember.Object.create(
      {
        name: 'test.doc',
        size: 457888,
        type: 'doc'
      }
    )];
  },

  createFile: ({type, size, name}, path)=>Ember.Object.create({type, name, size, path}),



  actions: {
    onSuccess (file, data) {
      const {path} =data
      this.files.push(this.createFile(file, path))
      console.log("add", this.files);

    },
    onRemove(file){
      // this.files = this.files.filter(f=>{
      //   return f.name !== file.name;
      //
      // });
      console.log("remove", this.files);
    },
    onAccept(file, done) {
      done()
      //debugger;
      // if (file.name == "justinbieber.jpg") {
      //   done("Naha, you don't.");
      // }
      // else { done(); }
    },
  }

});
