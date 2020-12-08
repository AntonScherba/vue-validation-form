<template>
  <form id="app" class="wrapper" @submit.prevent="submit">
    <h3>Заполните личные данные</h3>
    <UserForm :userInfo="userInfo" :v="$v" @check="addSelected"/>
    <h3>Заполните Адрес</h3>
    <AddressForm :addressForm="addressForm" :v="$v" />
    <h3>Заполните паспортные данные</h3>
    <PassportForm :passportForm="passportForm" :v="$v" /> 
    <button class="btn-submit" type="submit">Добавить пользователя</button>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import UserForm from "./components/UserForm/UserForm";
import AddressForm from "./components/AddressForm/AddressForm";
import PassportForm from "./components/PassportForm/PassportForm";

export default {
  name: "App",
  data() {
    return {
      users: [],
      userInfo: {
        name: '',
        surname: '',
        patronymic: '',
        birthday: '',
        phone: '',
        male: '',
        doctor: '',
        isSendMessages: undefined,
        selectedClientGroup: [],
      },
      addressForm: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      },
      passportForm: {
        type: '',
        series: '',
        number: '',
        issued: '',
        dateIssue: '',
        departmentСode: '',
      }
    }
  },
  validations: {
    userInfo: {
      name: { required },
      surname: { required },
      birthday: { required },
      phone: { required, minLength: minLength(11) },
      selectedClientGroup: { required },
    },
    addressForm: {
      city: { required }
    },
    passportForm: {
      type: { required },
      dateIssue: { required },
    }
  },
  components: {
    UserForm,
    AddressForm,
    PassportForm,
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error) {
        alert("Исправьте или заполните выделенные поля");
      } else {
          this.addUserInfo();
          this.$v.$reset();
          this.reset()
      }
    },
    addUserInfo() {
      let user = {
        userInfo: this.userInfo,
        addressForm: this.addressForm,
        passportForm: this.passportForm
      }
      this.users.push(user);
      alert("Новый клиент успешно добавлен");
    },
    reset() {
      this.userInfo = {
        name: '',
        surname: '',
        patronymic: '',
        birthday: '',
        phone: '',
        male: '',
        doctor: '',
        isSendMessages: undefined,
        selectedClientGroup: [],
      };
      this.addressForm = {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      };
      this.passportForm = {
        type: '',
        series: '',
        number: '',
        issued: '',
        dateIssue: '',
        departmentСode: '',
      };
    },
    addSelected(value){
      this.userInfo.selectedClientGroup = value;
      this.$v.userInfo.selectedClientGroup.$touch();
    },
  },
};
</script>

<style lang="scss">
  
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  $error: red;
  $valid: green;

  html {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h3 {
      border-bottom: 1px solid black;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
    border: 1px dashed grey;
  }

  .form-group {
    position: relative;
    margin: 10px;
    width: 250px;
  }
  .form__input {
    width: 100%;
    font-weight: 200;
    padding: 1px;
    padding-top: 1rem;
    outline: none;
    font-size: 1.3rem;
    color: rgb(51,51,51);
    border: none;
    border-bottom: 1px solid #666;
  }
  .form__label {
    position: absolute;
    left: 0;
    top: 15px;
    font-size: 1.3rem;
    color: rgba(51,51,51,.54);
    pointer-events: none;
    background-color: white;
  }
  .not-empty {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 12px;
  }
  .error {
    font-size: 12px;
    pointer-events: none;
    margin-top: 2px;
  } 

  .form__input:focus ~.form__label {
    position: absolute;
    left: 0;
    top: 0;
    transition: all .2s ease;
    font-size: 12px;
  }

  .message {
    font-size: 12px;
    pointer-events: none;
    margin-top: 2px;
  }

  .btn-submit {
    margin: 1rem;
    font-size: 1rem;
    padding: 1rem;
  }

  .form-group--error {
    
    .form__input {
      border-bottom: 1px solid $error; 
    }
    .form__label {
      color: $error;
    }
    .error {
      color: $error;
    }
  }


</style>
