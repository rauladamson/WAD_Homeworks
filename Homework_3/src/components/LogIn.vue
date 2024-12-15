<template>
  <div class="login-container">
    <div class="form-container">
      <h2>Sign in to your account</h2>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="formData.email" placeholder="Email" required/>

        <div class="password-section">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="formData.password" placeholder="Password" required/>
          <div v-if="passwordErrors.length" class="password-errors">
            <p>Password is not valid:</p>
            <ul>
              <li v-for="(error, index) in passwordErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>

        <button class="login-btn" type="submit" :disabled="isSubmitting">Log In</button>
      </form>
      <p>Don't have an account?
        <button class="signup-link" @click="navigateToSignup">Sign Up</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      passwordErrors: [],
      isSubmitting: false,
    };
  },
  methods: {
    validatePassword() {
      this.passwordErrors = [];
      const password = this.formData.password;

      if (password.length < 8 || password.length > 15) {
        this.passwordErrors.push("Password must be between 8 and 15 characters");
      }
      if (!/^[A-Z]/.test(password)) {
        this.passwordErrors.push("Password must start with an uppercase letter");
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.passwordErrors.push("Password must include at least two lowercase letters");
      }
      if (!/[A-Z]/.test(password)) {
        this.passwordErrors.push("Password must include at least one uppercase letter");
      }
      if (!/\d/.test(password)) {
        this.passwordErrors.push("Password must include at least one number");
      }
      if (!/_/.test(password)) {
        this.passwordErrors.push("Password must include an underscore character (_)");
      }

      return this.passwordErrors.length === 0;
    },

    async handleSubmit() {
      if (!this.validatePassword()) {
        return;
      }
      this.isSubmitting = true;

      try {
        // Todo: Replace with actual API call!!!!!!!!!!
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5174",
          }, credentials: 'include',
          body: JSON.stringify(this.formData),
        });
        if (!response.ok) {
          throw new Error("Login failed");
        }
        const data = await response.json();
        console.log("Login successful:", data);
        location.assign("/");
      } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed. Please check your credentials.");
      } finally {
        this.isSubmitting = false;
      }
    },

    navigateToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: black;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
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

.login-btn,
.signup-link {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.login-btn:hover,
.signup-link:hover {
  background-color: #0056b3;
}

.login-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
