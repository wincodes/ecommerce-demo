<template >
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div @click="login" class="btn btn-primary">Log In</div>
            </form>
            <div class="alert alert-danger" role="alert" v-if="error">
                {{error}}
            </div>
    </div>
</template>

<script>
export default {
     data () {
    return {
        user:{
            email:'',
            password: '',
        },
        error: null
    }
  },
  methods: {
      async login () {
        this.error = ''
        const areAllFieldsFilled = Object.keys(this.user).every(key => !!this.user[key])
            if(!areAllFieldsFilled){
                this.error = 'Please Fill All Fields'
                return
            }
        try{
          await axios.post('auth/login', {user: this.user})
            .then((response) => {
                if(response.data.error){
                    this.error = response.data.error;
                    console.log(response.data.error)
                }
                if(response.data.user){
                window.location.href = "/"
            };
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            })
        }catch(error){
            console.log(error);
          this.error = 'Sorry an error Occurred';
        }
          
      }
  },
  mounted() {},
}
</script>