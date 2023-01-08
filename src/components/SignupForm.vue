<template>
  <form @submit.prevent="onSubmit">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      required
      v-model="email"
    />
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      required
      v-model="password"
    />
    <p v-if="passwordError" class="error">
      {{ passwordError }}
    </p>
    <label for="">Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <ul>
      <li v-for="skill in skills" :key="skill" @click="deleteSkill(skill)">
        {{ skill }}
      </li>
    </ul>

    <div class="terms">
      <input type="checkbox" id="terms" required v-model="terms" />
      <label for="terms">I agree to the terms and conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      role: 'designer',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: '',
    };
  },
  methods: {
    addSkill() {
      if (this.tempSkill.includes(',') && this.tempSkill.length > 1) {
        if (this.skills.includes(this.tempSkill.slice(0, -1))) {
          this.tempSkill = '';
          return;
        }
        this.skills.push(this.tempSkill.slice(0, -1));
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
    onSubmit() {
      // Check if password is at least 6 characters long
      this.passwordError =
        this.password.length < 6
          ? 'Password must be at least 6 chars long'
          : '';

      // Check if terms are accepted
      if (!this.terms) {
        alert('You must accept the terms and conditions');
        return;
      }

      // If there are no errors, submit the form
      if (!this.passwordError) {
        this.submitForm();
      }
    },
    submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
        role: this.role,
        skills: this.skills,
      };

      console.log(formData);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 20px 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

input,
select {
  display: block;
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #555;
}

input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 20px;
  cursor: pointer;
  color: #777;
}

li:hover {
  background: #ddd;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background: #0a4db7;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: 700;
}
</style>
