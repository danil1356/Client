<template>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Редактирование морфемы</div>
    <div class="panel-body">
      <form @submit="handleSubmit">

        <div class="form-group">
          <label for="inputTitle">Название</label>
          <input type="text" class="form-control" id="inputTitle" v-model="name">
        </div>

        <div>
          <label for="inputTitle">Язык </label>
          <select v-model="nameLang">
            <option type="number" v-for="item in rssItems" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
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
      await this.initializeLanguage();
      await wait(1500);
    });
  },


  data() {
    return {
      id: parseInt(this.$route.params.id),
      id_language: 0,
      name: "",

      nameLang: 0
    };
  },
  created() {
    if (this.id !== 0 && this.affix_morphemes) {
      this.id_language = this.affix_morphemes.nameLang;
      this.name = this.affix_morphemes.name;

    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const item = {
        id_language: this.nameLang,
        name: this.name
      };
      if (this.id !== 0) {
        item.id = this.id;
        await this.editItemAffix(item);
      } else {
        await this.addItemAffix(item);
      }
      await this.$router.push({name: "AffixMorphList"});
    },

    ...mapActions([
      'addItemAffix',
      'editItemAffix',
      'initializeLanguage'
    ])
  },
  computed: {
    //для заполнения полей
    affix_morphemes() {
      return this.id !== 0 ?
          this.$store.state.affixMorph.find(item => item.id === this.id):
          null;
    },
    ...mapState({
      rssItems: state => state.language
    })
  }

}
</script>

<style scoped>

</style>