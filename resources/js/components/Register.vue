<template>
  <div>
    <form>
      <div class="form-group">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" v-model="user.name" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
            v-model="user.password"
          />
        </div>
      </div>
      <div @click="register" class="btn btn-primary">Sign Up</div>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error">{{error}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    async register() {
      this.error = "";
      const areAllFieldsFilled = Object.keys(this.user).every(
        key => !!this.user[key]
      );
      if (!areAllFieldsFilled) {
        this.error = "Please Fill All Fields";
        return;
      }
      try {
        await axios
          .post("auth/register", { user: this.user })
          .then(response => {
            if (response.data.error) {
              this.error = response.data.error;
              console.log(response.data.error);
            }

            if (response.status === 201 || response.status === 200) {
              this.$router.push({
                path: "/login"
              });
            }
          });
      } catch (error) {
        this.error = "Sorry an error Occurred";
        console.log(error);
      }
    }
  },
  mounted() {}
};
</script>