<template>
  <input :type="type" :name="name" :placeholder="placeholder">
</template>

<script>
  export default {
    name: "AuthInput",
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 25px;
    padding: 20px 23px;

    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.32px;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0.16);
    border: 3px solid #686868;
    background-color: #ffffff;
    transition: border 0.2s, box-shadow 0.2s;
  }

  input:focus {
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.16);
    border: 3px solid #3d3d3d;
    transition: border 0.2s, box-shadow 0.2s;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.32px;
  }
</style>