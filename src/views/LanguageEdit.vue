<template>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Редактирование языка</div>
    <div class="panel-body">

      <form @submit="handleSubmit">

        <div class="form-group">
          <label for="inputTitle">Язык</label>
          <input type="text" class="form-control" id="inputTitle" v-model="name">
        </div>

        <button type="submit" class="btn btn-primary pull-right">Сохранить</button>
      </form>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      name: ""
    };
  },
  created() {
    if (this.id !== 0 && this.language) {
      this.name = this.language.name;
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const item = {
         name: this.name
      };
      if (this.id !== 0) {
        item.id = this.id;
        await this.editItemLanguage(item);
      } else {
        await this.addItemLanguage(item);
      }
      await this.$router.push({name: "LanguageList"});
    },

    ...mapActions([
      'addItemLanguage',
      'editItemLanguage'
    ])
  },

  computed: {
    //для заполнения полей
    language() {
      return this.id !== 0 ?
          this.$store.state.language.find(item => item.id === this.id):
          null;
    }
  }

}
</script>

<style scoped>

</style>