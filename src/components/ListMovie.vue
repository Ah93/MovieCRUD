// ListMovie.vue

<template>
  <div>
    <h1>List All Movies</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Movie Type</th>
          <th>Movie Description</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movie,key) in movies" :key='key'>
          <td>{{ movie.name }}</td>
          <td>{{ movie.type }}</td>
          <td>{{ movie.desc }}</td>
          <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Edit</button>
          </td>
          <td>
            <button class="btn btn-xs btn-danger" @click="deleteMovie(key)">Delete</button>
         </td>
        </tr>
      </tbody>
    </table>
    
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
  
</template>

<script>
import config from '../config/db'
//import { db } from '../config/db'
export default {
  components: {
    name: "ListMovie"
  },
   data() {
    return {
      movies: []
    }
  },
  created(){
    firebase.database().ref('movies').on('value', (snapshot) => {
      this.movies = snapshot.val();
    })
  },
  // firebase: {
  //   movies: db.ref('movies')
  // },
  methods: {
    deleteMovie(key) {
      //comsole.log(key)
      firebase.database().ref('movies/'+key).remove();
    }
  }
  //Delete data from firebase database
 // methods: {
  
  //}
};
</script>