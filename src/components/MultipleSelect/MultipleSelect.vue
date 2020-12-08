<template>
  <div>
    <div class="form-group" :class="{'form-group--error': err}">
      <div class="overselect" @click="showDropdown">
        <label v-if='show' class="times">&times;</label>
      </div>
      <select class="form__input" />
      <label class="form__label" :class="{'not-empty': selected.length > 0}">Группа клиентов</label>
      <span class="group-title">{{selected.join(', ')}}</span>
      <div class="error">Поле обязательное для заполнения</div>
    </div>
    <div class="multiselect" v-if="show">
      <ul>
        <li v-for="(group, index) in clientGroup" :key="index">
          <input type="checkbox" :id="index" :value="group" v-model="selected">
          <label :for="index">{{ group }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
    name: 'MultipleSelect',
    props: ['clientGroup', 'req', 'err'],
    data() {
      return {
        show: false,
        selected: []
      }
    },
    methods: {
      showDropdown() {
        this.show = !this.show
      }
    },
    watch: {
      selected(value) {
        this.$emit('checked', value)
      }
    }
}

</script>

<style lang="scss" scoped>

  .multiselect {
    position: relative;
    ul {
      border: 1px solid #aaa;
      margin: 0;
      padding: 0;
      list-style: none;
      width: 248px;
      position: absolute;
      top: -25px;
      left: 10px;
      background-color: rgba(255,255, 255, 100%);
      z-index: 1;
    }
  }

  .overselect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .group-title {
    position: absolute;
    left: 0;
    top: 20px;
    font-size: 1rem;
    color: rgba(51,51,51);
    pointer-events: none;
  }

  .times {
    position: absolute;
    right: 0px;
    top: 5px;
    font-size: 1.7rem;
    color: rgba(51,51,51);
    background-color: white;
    pointer-events: none;
  }

</style>