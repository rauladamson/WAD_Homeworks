<template>
  <div class="signup-container">
    <div class="form-container">
      <h2>Create an Account</h2>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="formData.email" placeholder="Email" required>
        <div class="password-section">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="formData.password" placeholder="Password" required>
          <div v-if="!isPasswordValid" class="password-errors">
            <p>Password is not valid:</p>
            <ul>
              <li v-for="(error, index) in passwordErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
        <button class="signup-btn" type="submit" :disabled="!isPasswordValid">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      passwordErrors: []
    }
  },
  methods: {
    handleSubmit() {
      if (this.isPasswordValid) {
        this.SignUp()
        // Handle form submission
      }
    },

    SignUp() {
      let data = {
        email: this.formData.email,
        password: this.formData.password
      };
      console.log(data);
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5174",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },


  computed: {
    isPasswordValid() {
      this.passwordErrors = []
      const password = this.formData.password

      if (password.length < 8 || password.length > 15) {
        this.passwordErrors.push('Password must be between 8 and 15 characters')
      }
      if (!/^[A-Z]/.test(password)) {
        this.passwordErrors.push('Password must start with an uppercase letter')
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.passwordErrors.push('Password must include at least two lowercase letters')
      }
      if (!/[A-Z]/.test(password)) {
        this.passwordErrors.push('Password must include at least one uppercase letter')
      }
      if (!/\d/.test(password)) {
        this.passwordErrors.push('Password must include at least one number')
      }
      if (!/_/.test(password)) {
        this.passwordErrors.push('Password must include underscore character "_"')
      }

      return this.passwordErrors.length === 0
    }
  }
}
</script>
<style>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: black;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  text-align: center;
  width: 500px;
}

h2 {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 6px;
  text-align: left;
  font-size: 14px;
}

form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 12px;
}

.signup-btn {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 24px; /* Rounded button */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-btn:hover {
  background-color: #0056b3;
}

.signup-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>