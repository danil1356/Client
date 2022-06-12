<template>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Редактирование концепта</div>
    <div class="panel-body">
      <form @submit="handleSubmit">

        <div class="form-group">
          <label for="inputTitle1">RU</label>
          <input type="text" class="form-control" id="inputTitle1" v-model="value1">
        </div>
        <div class="form-group">
          <label for="inputTitle2">ENG</label>
          <input type="text" class="form-control" id="inputTitle2" v-model="value2">
        </div>
        <div class="form-group">
          <label for="inputTitle3">Значение</label>
          <input type="text" class="form-control" id="inputTitle3" v-model="value3">
        </div>

        <button type="submit" class="btn btn-primary pull-right">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {wait} from "@/utils";

export default {
  mounted() {
    this.$nextTick(async () => {
      await this.initializeConcepts();
      await wait(1500);
    });
  },

  data() {
    return {
      id: parseInt(this.$route.params.id),
      value1: "",
      value2: "",
      value3: ""
    };
  },
  created() {
    if (this.id !== 0 && this.allomorphes) {
      this.value = this.allomorphes.value;
      this.id_affix = this.allomorphes.nameAffix;
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const item = {
        name_eng: this.value1,
        name_ru: this.value2,
        giperonim: this.value3
      };
      if (this.id !== 0) {
        item.id = this.id;
        await this.editItemConcepts(item);
      } else {
        await this.addItemConcepts(item);
      }
      await this.$router.push({name: "ConceptsList"});
    },

    ...mapActions([
      'initializeConcepts',
        'addItemConcepts',
        'editItemConcepts'
    ])
  },
  computed: {
    //для заполнения полей
    allomorphes() {
      return this.id !== 0 ?
          this.$store.state.concept.find(item => item.id === this.id):
          null;
    }
  }
}
</script>

<style scoped>

</style>