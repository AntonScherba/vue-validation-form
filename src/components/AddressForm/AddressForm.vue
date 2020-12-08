<template>
    <div class="form">
        <!-- Страна -->
        <div class="form-group" >
            <input 
                class="form__input"  
                type="text"
                v-model.trim="addressForm.country" 
            />
            <label class="form__label" :class="{'not-empty': addressForm.country}">Страна</label>
        </div>
        <!-- Область -->
        <div class="form-group" >
            <input 
                class="form__input"  
                type="text"
                v-model.trim="addressForm.region" 
            />
            <label class="form__label" :class="{'not-empty': addressForm.region}">Область</label>
        </div>
         <!-- Город -->
        <div class="form-group" :class="{ 'form-group--error': v.addressForm.city.$error}">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="v.addressForm.city.$model" 
            />
            <label class="form__label" :class="{'not-empty': v.addressForm.city.$model}">Город</label>
            <div class="error">Поле обязательное для заполнения</div>
        </div>
         <!-- Улица -->
        <div class="form-group" >
            <input 
                class="form__input"  
                type="text"
                v-model.trim="addressForm.street" 
            />
            <label class="form__label" :class="{'not-empty': addressForm.street}">Улица</label>
        </div>
         <!-- Дом -->
        <div class="form-group" >
            <input 
                class="form__input"  
                type="number"
                v-model.trim="addressForm.house" 
            />
            <label class="form__label" :class="{'not-empty': addressForm.house}">Дом</label>
        </div>
         <!-- Индекс -->
        <div class="form-group" >
            <input 
                class="form__input"  
                type="text"
                v-model.trim="addressForm.index" 
            />
            <label class="form__label" :class="{'not-empty': addressForm.index}">Индекс</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddressForm',
    props: ['addressForm', 'v'],
    methods: {
    },
}    
</script>