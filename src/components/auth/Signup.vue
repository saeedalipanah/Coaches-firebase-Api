<template>
  <div>
    <p v-show="isLoading"><base-spinner></base-spinner></p>
    <base-card v-if="error">
      <h2>{{ error }}</h2>
    </base-card>
    <base-card v-else>
      <form @submit.prevent="submitForm">
        <div :class="{ invalid: !email.isValid }">
          <label for="email">Your E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model.trim="email.value"
            @blur="clearValidity(email)"
          />
          <p v-if="!email.isValid">E-mail must not be empty</p>
        </div>
        <div :class="{ invalid: !password.isValid }">
          <label for="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password.value"
            @blur="clearValidity(password)"
          />
          <p v-if="password.isValid === false">
            password must be at least 6 characters long
          </p>
        </div>
        <p v-if="formIsValid === false">
          Please fix the above errors and submit again.
        </p>
        <div>
          <button>Signup</button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  data() {
    return {
      email: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      },
      formIsValid: true,
      isLoading: false,
      error: null
    };
  },
  methods: {
    // ...mapActions(['singup']),
    clearValidity(input) {
      input.isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.value === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.value.length < 6) {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    async submitForm() {
      this.validateForm();
      if (this.formIsValid === false) {
        return;
      }
      const signupData = {
        email: this.email.value,
        password: this.password.value
      };

      this.isLoading = true;

      try {
        //1-we get informations from user and save in a object and now want to send it to vuex store:
        //2-conect to signup action in vuex store and send signupData as payload
        await this.$store.dispatch('signup', signupData);
        // this.signup(signupData)
      } catch (err) {
        this.error = err.message || 'failed to authenticate,try again later';
      }
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
form {
  padding: 10px;
}
label {
  font-weight: bold;
  margin: 5px 10px;
}
input {
  width: 90%;
  height: 22px;
  margin: 5px 10px;

  display: block;
}

button {
  font-family: inherit;
  font-size: inherit;
  margin: 10px;
  border: 1px solid #041722;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.invalid input {
  border-color: red;
}
.invalid label {
  color: red;
}

.invalid p {
  margin: 5px 10px;
  font-size: 12px;
}
</style>
