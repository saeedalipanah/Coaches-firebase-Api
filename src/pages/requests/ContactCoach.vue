<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div :class="{ invalid: email.isValid === false }">
        <label for="email">Your E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model.trim="email.value"
          @blur="clearValidity(email)"
        />
        <p v-if="email.isValid === false">E-mail must not be empty</p>
      </div>
      <div :class="{ invalid: !massage.isValid }">
        <label for="massage">Massage</label>
        <textarea
          name="massage"
          id="massage"
          cols="30"
          rows="5"
          v-model.trim="massage.value"
          @blur="clearValidity(massage)"
        ></textarea>
        <p v-if="massage.isValid === false">Massage must not be empty</p>
      </div>
      <div>
        <button>Send massage</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: {
        value: '',
        isValid: true
      },
      massage: {
        value: '',
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearValidity(input) {
      input.isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.value === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.massage.value === '') {
        this.massage.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (this.formIsValid === false) {
        return;
      }
      this.$store.dispatch('addRequests',{
        coachId:this.$route.params.id,
        email:this.email.value,
        massage:this.massage.value 
      });
      this.$router.replace('/requests')
    }
  }
};
</script>

<style scoped>
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
textarea {
  width: 90%;
  margin: 5px 10px;
  border-radius: 2px;
  /* display: block; */
  /* max-width: ; */
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
.invalid textarea {
  border-color: red;
}
.invalid p {
  margin: 5px 10px;
  font-size: 12px;
}
</style>
