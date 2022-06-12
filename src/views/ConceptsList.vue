<template>

  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Список концептов</div>
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editConcepts', params: {id: 0}}">
        Добавить
      </router-link>
    </div>

    <table id="table_id" class="table table-striped">
      <thead>
      <tr>
        <th>№</th>
        <th style="width: 45%">Eng</th>
        <th style="width: 20px">Ru</th>
        <th style="width: 10%">Гипероним</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in conceptItems" :key="index">
        <td>{{index + 1}}</td>
        <td><a :href="item.link" target="_blank">{{ item.name_eng }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.name_ru }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.giperonim }}</a></td>


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
      await this.initializeConcepts();

      $(document).ready( function () {
        $('#table_id').DataTable();
      });

      await wait(1500);
    });
  },

  methods:{
    async handleRemoveClick(e, id) {
      await this.removeItemConcepts(id);
    },
    ...mapActions([
      'initializeConcepts',
      'removeItemConcepts'
    ])
  },

  components: {

  },
  computed: {
    ...mapState({
      conceptItems: state => state.concept
    })
  }
}
</script>

<style scoped>

</style>