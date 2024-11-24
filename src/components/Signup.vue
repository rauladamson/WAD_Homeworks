<template>
  <div class="form-container">
    <h2>Create an Account</h2>
    <form @submit.prevent="handleSubmit">
      <input type="email" v-model="formData.email" placeholder="Email" required>
      <div class="password-section">
        <input type="password" v-model="formData.password" placeholder="Password" required>
        <div v-if="!isPasswordValid" class="password-errors">
          <p>Password is not valid:</p>
          <ul>
            <li v-for="(error, index) in passwordErrors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
      <button type="submit" :disabled="!isPasswordValid">Sign Up</button>
    </form>
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
  },
  methods: {
    handleSubmit() {
      if (this.isPasswordValid) {
        console.log('Form submitted:', this.formData)
        // Handle form submission
      }
    }
  }
}
</script>