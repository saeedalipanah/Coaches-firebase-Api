<template>
<div>

<base-card>
  <h1>Register as a coach</h1>
</base-card>
  <base-card>
    <form @submit.prevent="submitForm">
      <div :class="{ invalid: firstName.isValid === false }">
        <label for="first-name">First Name</label>
        <input
          id="first-name"
          name="first-name"
          type="text"
          v-model.trim="firstName.value"
          @blur="clearValidity('firstName')"
        />
        <p v-if="firstName.isValid === false">First name must not be empty</p>
      </div>

      <div :class="{ invalid: !lastName.isValid }">
        <label for="last-name">Last Name</label>
        <input
          id="last-name"
          name="last-name"
          type="text"
          v-model.trim="lastName.value"
          @blur="clearValidity('lastName')"
        />
        <p v-if="!lastName.isValid">Last name must not be empty</p>
      </div>

      <div :class="{ invalid: !rate.isValid }">
        <label for="rate">Hourly Rate</label>
        <input
          id="rate"
          name="rate"
          type="number"
          v-model.number="rate.value"
          @blur="clearValidity('rate')"
        />
        <p v-if="!rate.isValid">
          Please enter a valid number(rate must be greater then 0)
        </p>
      </div>

      <div class="desc" :class="{ invalid: !description.isValid }">
        <label for="description">Your Description</label>
        <textarea
          name="description"
          id="description"
          cols="20"
          rows="5"
          v-model.trim="description.value"
          @blur="clearValidity('description')"
        ></textarea>
        <p v-if="!description.isValid">Description must not be empty!</p>
      </div>

      <div class="checkbox" :class="{ invalid: !areas.isValid }">
        <h3>
          Areas of Expertise
        </h3>
        <div>
          <input
            type="checkbox"
            name="frontend"
            value="frontend"
            v-model="areas.value"
            @blur="clearValidity('areas')"
          />
          <label for="frontend">Frontend</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="backend"
            value="backend"
            v-model="areas.value"
            @blur="clearValidity('areas')"
          />
          <label for="backend">Backend</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="career"
            value="career"
            v-model="areas.value"
            @blur="clearValidity('areas')"
          />
          <label for="career">Career</label>
        </div>
        <p v-if="!areas.isValid">At least one expertise must be selected</p>
      </div>

      <div>
        <p v-if="formIsValid === false">
          Please fix the above errors and submit again.
        </p>
        <button>Save Data</button>
      </div>
    </form>
  </base-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        value: '',
        isValid: true //برای چک کردن این که تک تک اینپوت ها ولید هستند یا خیر
      },
      lastName: {
        value: '',
        isValid: true
      },
      rate: {
        value: null,
        isValid: true
      },
      description: {
        value: '',
        isValid: true
      },
      areas: {
        value: [],
        isValid: true
      },
      formIsValid: true //برای مشخص کردن این که کل فرم ولید است یا خیر و تا زمانی که کل اینپوت ها ولید نشوند فرم نیز ولید نخواهد بود
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.rate.value === null || this.rate.value <= 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
      
    },

    submitForm() {
      this.validateForm(); //اینجا فراخوانی میکنیم تا به محض کلیک ولیدیتی چک شود
      if (!this.formIsValid) {
        return;
      }

      const inputData = {
        first: this.firstName.value,
        last: this.lastName.value,
        rate: this.rate.value,
        desc: this.description.value,
        areas: this.areas.value
      };
      //input data will be payload
      this.$store.dispatch('registerCoach', inputData); //در استور یک اکشن داریم با نام ریجستر کوچ که  با این دستور دیتای دریافتی کاربر را در آن میریزیم یعنی در واقع در استور ذخیره می کنیم
      this.$router.replace('/coaches')//replace is work just like push just user cant back to page with back button in browser
    }
  }
};
</script>

<style scoped>
form {
  margin: 20px;
  /* background-color: indigo; */
}
div {
  margin: 15px 0px;
}

/* .form-control {
  margin: 0.5rem 0;
} */
.invalid label {
  color: red;
}
.invalid input {
  border-color: red;
}

.invalid p {
  /* color: red; */
  margin: 0px 10px;
  font-size: 0.85rem;
}
.desc.invalid textarea {
  border-color: red;
}
.checkbox.invalid label {
  color: red;
}
label {
  font-weight: bold;
  margin: 5px 10px;
}
input[type='text'],
input[type='number'] {
  width: 90%;
  height: 22px;
  margin: 5px 10px;

  display: block;
}
textarea {
  /* width: 90%; */
  margin: 5px 10px;
  border-radius: 2px;
  display: block;
  max-width: 90%;
  min-width: 90%;
  height: 100px;
  min-height: 60px;
  max-height: 200px;
}

input[type='checkbox'] {
  margin: 5px 10px;
}

h3 {
  margin: 5px 10px;
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
.checkbox input {
  margin: 0px;
}
</style>
