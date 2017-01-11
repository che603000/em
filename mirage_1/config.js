import Mirage, {faker} from 'ember-cli-mirage';

export default function () {

  //this.namespace = 'api';

  this.passthrough('http://localhost:3000/upload-file', ['post'])
  this.passthrough('https://vs2008-40-11/api/Deposition/DepProcess', ['get'])

  this.get('/contents-90/:id', (db, req) => {

    return {
      content: {
        id: 1,
        header: 'mirage-title',
        body: "<code>test</code>"
      }
    }
  });

  this.get('/contents/:id', () => {
    return {
      data: {
        type: "content",
        id: 1,
        attributes: {
          header: 'mirage-title',
          body: "<code>test</code>"
        }

      },
    };
  });

  this.del('/contents/:id', () => {
    return {}
  });

  this.patch('/contents/:id', (db, req) => {
    const data = JSON.parse(req.requestBody)
    //console.log(data);
    return new Mirage.Response(422,
      {
        //some: 'header'
      }, {
        // errors: {
        //   "title": "Validation error..."
        // }
        errors:[
          {
          "detail": "Server validate error",
          "source": {
            "pointer": "data/attributes/header"
          }
        }]


      });
    // return new Mirage.Response(422,null, {
    //   errors:{
    //     a:1,
    //     b:3
    //   }
    // });
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
   Config (with defaults).

   Note: these only affect routes defined *after* them!
   */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
   Shorthand cheatsheet:

   this.get('/posts');
   this.post('/posts');
   this.get('/posts/:id');
   this.put('/posts/:id'); // or this.patch
   this.del('/posts/:id');

   http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
   */
}
