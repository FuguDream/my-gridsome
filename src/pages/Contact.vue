<template>
  <Layout>
    <div class="container">
      <h1 class="title">Say hi!</h1>
      <p class="describe">Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      <form name="contact" class="contact">
        <div class="form-item-container">
          <label for="name">Your name</label>
          <input type="text" name="name" v-model="contact.name">
        </div>
        <div class="form-item-container">
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="contact.email">
        </div>
        <div class="form-item-container message">
          <label for="message">Message</label>
          <textarea type="text" name="message" v-model="contact.message"></textarea>
        </div>
        <div class="form-item-container button-container">
          <button style="button" @click.prevent="submit">Submit form</button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Contact me'
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submit() {
      try {
        await axios.post('/strapiproxy' + '/contacts', this.contact)
        console.log('发送消息成功！')
      } catch (error) {
        console.log('发送消息失败！')
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    max-width: 1008px;
    padding: 0 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    margin: 2rem 0 4rem;
    font-size: 4rem;
  }

  .describe {
    margin:0 0 5.2rem;
    font-size: 1.2rem;
  }

  .contact {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .form-item-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin:0 4rem 2rem 0;
  }

  .message {
    flex-grow: 2;
    min-width: 51%;
  }

  .button-container {
    flex-grow: 2;
    min-width: 51%;
  }

  label {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    padding: 0.8rem 1rem;
    height: 1.2rem;
    border-radius: 0.3rem;
    border: 1px solid #f3f3f3;
    font-size: 1rem;
    font-family: monospace;
  }

  input:focus, textarea:focus {
    border: 1px solid #767676;
    outline: none;
  }

  textarea {
    height: 7rem;
  }

  button {
    width: 128px;
    padding: 0.8rem 1.6rem;
    font-size: 0.8rem;
    border-radius: 0.3rem;
    border: 0;
    color: #fff;
    background: #000;
    letter-spacing: 0.035em;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  button:hover {
    opacity: 0.6;
  }

  button:focus {
    border: 1px solid #fff
  }
</style>