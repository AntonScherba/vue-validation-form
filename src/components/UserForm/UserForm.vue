<template>
    <div class="form">

        <!-- Фамилия -->
        <div class="form-group" :class="{ 'form-group--error': v.userInfo.surname.$error }">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="v.userInfo.surname.$model" 
            />
            <label class="form__label" :class="{'not-empty': v.userInfo.surname.$model}">Фамилия</label>
            <div class="error">Поле обязательное для заполнения</div>
        </div>
        <!-- Имя -->
        <div class="form-group" :class="{ 'form-group--error': v.userInfo.name.$error}">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="v.userInfo.name.$model" 
            />
            <label class="form__label" :class="{'not-empty': v.userInfo.name.$model}">Имя</label>
            <div class="error">Поле обязательное для заполнения</div>
            
        </div>
        <!-- Отчество -->
        <div class="form-group">
            <input 
                class="form__input" 
                type="text" 
                v-model.trim="userInfo.patronymic"
            />
            <label class="form__label" :class="{'not-empty': userInfo.patronymic}">Отчество</label>
        </div>
        <!-- Дата рождения -->
        <div class="form-group" :class="{ 'form-group--error': v.userInfo.birthday.$error}">
            <input
                class="form__input"
                type="date"
                v-model.trim="v.userInfo.birthday.$model" 
            />
            <label class="form__label" :class="{'not-empty': v.userInfo.birthday.$model}">Дата рождения</label>
            <div class="error">Поле обязательное для заполнения</div>
        </div>
        <!-- Номер телефона -->
        <div class="form-group" :class="{ 'form-group--error': v.userInfo.phone.$error }">
            <input 
                type="tel"
                class="form__input"  
                placeholder="7(xxx) xxx-xxxx"
                v-model.trim="v.userInfo.phone.$model"
                v-phone
                @input="setPhone($event.target.value)"
            />
            <label class="form__label" :class="{'not-empty': v.userInfo.phone.$model}">Номер телефона</label>
            <div
                class="error" 
                v-if="!v.userInfo.phone.minLength"
            >
                Не хватает цифр: 
                {{v.userInfo.phone.$params.minLength.min - v.userInfo.phone.$model.length}}
            </div>
            <div class="error" v-else>Поле обязательное для заполнения</div>
        </div>
        <!-- Группа клиентов -->
        <MultipleSelect 
            :clientGroup="clientGroup" 
            @checked="(value) => $emit('check', value)" 
            :req="v.userInfo.selectedClientGroup.required" 
            :err="v.userInfo.selectedClientGroup.$error" 
        />
        <!-- Лечащий врач -->
        <div class="form-group">
            <select class="form__input" v-model="userInfo.doctor">
                <option value="">Не выбрано</option>
                <option>Иванов</option>
                <option>Захаров</option>
                <option>Чернышева</option>
            </select>
            <label class="form__label" :class="{'not-empty': userInfo.doctor}">Лечащий врач</label>
        </div>
        <!-- Пол -->
        <div class="form-group"> 
            
            <input type="radio" id="man" value="Мужчина" v-model="userInfo.male">
            <label for="man">Мужчина</label>

            <input type="radio" id="woman" value="Женщина" v-model="userInfo.male">
            <label for="woman">Женщина</label>
            
        </div>
        <!-- Не отправлять СМС -->
        <div class="form-group"> 
            <input type="checkbox" id="sms" v-model="userInfo.isSendMessages">
            <label for="sms">Не отправлять СМС</label>
        </div>
    </div>
</template>

<script>

import MultipleSelect from '../MultipleSelect/MultipleSelect';

export default {
    name: 'UserForm',
    components: {
        MultipleSelect
    },
    props: ['userInfo', 'v'],
    data() {
        return {
            clientGroup: ["VIP" , "Проблемные", "ОМС"],
        }
    },
    methods: {
        setPhone(value) {           
            this.userInfo.phone = value.replace(/\D/g, "").substring(0,11);
        },
    },
}    
</script>