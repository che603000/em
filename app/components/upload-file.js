import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments)
    this.files = [];
  },
  actions: {
    onSuccess (file, data, cnt) {
      const {type, size, name} = file;
      const {path} =data
      !this.files.some(file => file.name === name) && this.files.push({type, name, size, path})
      console.log(file, this.files);

    },
    onRemove(file){
      this.files = this.files.filter(f=>f.name === file.name);
      console.log(file, this.files);
    }
  }

});
