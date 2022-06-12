<template>

  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Редактирование алломорфа</div>
    <div class="panel-body">
      <form @submit="handleSubmit">

        <div class="form-group">
          <label for="inputTitle">Значение</label>
          <input type="text" class="form-control" id="inputTitle" v-model="value">
        </div>

        <div>
          <label for="inputTitle">Аффиксальная морфема </label>
          <select v-model="nameAffix">
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
      await this.initializeAffix();
      await wait(1500);
    });
  },

  data() {
    return {
      id: parseInt(this.$route.params.id),
      value: "",
      id_affix: 0,

      nameAffix: 0
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
        value: this.value,
        id_affix: this.nameAffix
      };
      if (this.id !== 0) {
        item.id = this.id;
        await this.editItemAllomorph(item);
      } else {
        await this.addItemAllomorph(item);
      }
      await this.$router.push({name: "AllomorphesList"});
    },

    ...mapActions([
      'addItemAllomorph',
      'editItemAllomorph',
        'initializeAffix'
    ])
  },
  computed: {
    //для заполнения полей
    allomorphes() {
      return this.id !== 0 ?
          this.$store.state.allomorph.find(item => item.id === this.id):
          null;
    },
    ...mapState({
      rssItems: state => state.affixMorph
    })
  }
}
</script>

<style scoped>

</style>