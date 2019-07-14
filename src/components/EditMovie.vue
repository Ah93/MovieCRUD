// EditMovie.vue

<template>
 <div class="container">
        <div class="card">
            <div class="card-header">
    <h1>Edit Movie</h1>
    </div>
            <div class="card-body">
                <form v-on:submit.prevent="EditMovie">
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
//import { db } from '../config/db'
export default {
  components: {
    name: "EditMovie"
  },
  //   firebase: {
  //   movies: db.ref('movies'),
  //   moviesObj: {
  //     source: db.ref('movies'),
  //     asObject: true
  //   }
  // },
  data () {
    return {
      newMovie: {}
    }
  },

   methods: {
    editMovie() {
      firebase.database().ref('movies/'+this.$route.params.id).set(this.newMovie);
      this.$router.push('/index')
    }
  }
};
</script>