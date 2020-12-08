<template>
    <div class="form">
        <!-- Тип документа -->
        <div class="form-group" :class="{'form-group--error': v.passportForm.type.$error }">
            <select class="form__input" v-model="v.passportForm.type.$model">
                <option value="">Не выбрано</option>
                <option>Паспорт</option>
                <option>Свидетельство о рождении</option>
                <option>Вод. удостоверение</option>
            </select>
            <label class="form__label" :class="{'not-empty': v.passportForm.type.$model}">Тип документа</label>
            <div class="error">Поле обязательное для заполнения</div>
        </div>
        <!-- Серия -->
        <div class="form-group">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="passportForm.series" 
            />
            <label class="form__label" :class="{'not-empty': passportForm.series}">Серия</label>
        </div>
        <!-- Номер -->
        <div class="form-group">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="passportForm.number" 
            />
            <label class="form__label" :class="{'not-empty': passportForm.number}">Номер</label>
        </div>
        <!-- Кем выдан -->
        <div class="form-group">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="passportForm.issued" 
            />
            <label class="form__label" :class="{'not-empty': passportForm.issued}">Кем выдан</label>
        </div>
        <!-- Код подразделения -->
        <div class="form-group">
            <input 
                class="form__input"  
                type="text"
                v-model.trim="passportForm.departmentСode" 
            />
            <label class="form__label" :class="{'not-empty': passportForm.departmentСode}">Код подразделения</label>
        </div>
         <!-- Дата выдачи -->
        <div class="form-group" :class="{ 'form-group--error': v.passportForm.dateIssue.$error}">
            <input
                class="form__input"
                type="date"
                v-model.trim="v.passportForm.dateIssue.$model" 
            />
            <label class="form__label" :class="{'not-empty': v.passportForm.dateIssue.$model}">Дата выдачи</label>
        <div class="error">Поле обязательное для заполнения</div>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'PassportForm',
    props: ['passportForm', 'v'],
}    
</script>