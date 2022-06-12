<template>

  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Список алломорфов</div>
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editAllomorph', params: {id: 0}}">
        Добавить
      </router-link>
    </div>

    <table id="table_id" class="table table-striped">
      <thead>
      <tr>
        <th>№</th>
        <th style="width: 65%">Алломорфы</th>
        <th style="width: 20px">Аффиксальная морфема</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in allomorphItems" :key="index">
        <td>{{index + 1}}</td>
        <td><a :href="item.link" target="_blank">{{ item.value }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.affixMorphemesResource.name }}</a></td>

        <td>
          <router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editAllomorph', params: {id: item.id}}">
            <span class="glyphicon glyphicon-pencil"> Изменить </span>
          </router-link>
        </td>

        <td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
          <span class="glyphicon glyphicon-remove"> Удалить</span>
        </button></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
import {wait} from "@/utils";
import dt from 'datatables.net-bs5';
import $ from 'jquery';
$.fn.DataTable = dt;

export default {
  mounted() {
    this.$nextTick(async () => {
      await this.initializeAllomorph();
      $(document).ready( function () {
        $('#table_id').DataTable();
      });

      await wait(1500);
    });
  },
  methods:{
    async handleRemoveClick(e, id) {
      await this.removeItemAllomorph(id);
    },
    ...mapActions([
      'initializeAllomorph',
      'removeItemAllomorph'
    ])
  },
  components: {

  },
  computed: {
    ...mapState({
      allomorphItems: state => state.allomorph
    })
  }

}
</script>

<style scoped>

</style>