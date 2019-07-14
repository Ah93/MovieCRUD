// AddMovie.vue

<template>
 <div class="container">
        <div class="card">
            <div class="card-header">
  <h1>Add New Movie</h1>
   </div>
            <div class="card-body">
                <form v-on:submit.prevent="addMovie">
                    <div class="form-group">
                        <label>Movie Name:</label>
                        <input type="text" class="form-control"  v-model="newMovie.name"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Type</label>
                        <input type="text" class="form-control"  v-model="newMovie.type"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Description</label>
                        <input type="text" class="form-control"  v-model="newMovie.desc"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Movie"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../config/db'
export default {
  components: {
      name: 'AddMovie'
  },
  /*firebase: {
    movies: db.ref('movies')
  },*/
   data () {
    return {
      newMovie: {
          name: '',
          type: '',
          desc: ''
      }
    }
  },
  methods: {
      addMovie() {
          firebase.database().ref('movies').push({name: this.newMovie.name, 
          type: this.newMovie.type, desc: this.newMovie.desc
          }).then((data) => {console.log(data)})
      .catch((error) => {console.log(error)});
        /*this.$firebaseRefs.movies.push({
            name: this.newMovie.name,
            type: this.newMovie.type,
            desc: this.newMovie.desc
        })*/
        this.newMovie.name = '';
        this.newMovie.type = '';
        this.newMovie.desc = '';
        this.$router.push('/index')
      }
    }
}
</script>