<template>

  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Список языков</div>
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editLanguage', params: {id: 0}}">
        Добавить
      </router-link>
    </div>

    <table id="table_id" class="table table-striped">
      <thead>
      <tr>
        <th>№</th>
        <th>Языки</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in languageItems" :key="index">
        <td>{{index + 1}}</td>

        <td><a :href="item.link" target="_blank">{{ item.name }}</a></td>

        <td>
          <router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editLanguage', params: {id: item.id}}">
            <span class="glyphicon glyphicon-pencil"> Изменить </span>
          </router-link>

          <button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
            <span class="glyphicon glyphicon-remove"> Удалить</span>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import {wait} from "@/utils";
import {mapActions, mapState} from "vuex";

import dt from 'datatables.net-bs5';
import $ from 'jquery';
$.fn.DataTable = dt;


export default {
  mounted() {
    this.$nextTick(async () => {
      await this.initializeLanguage();

      $(document).ready( function () {
        $('#table_id').DataTable();
      });

      await wait(1500);
    });
  },

  methods:{

    async handleRemoveClick(e, id) {
      await this.removeItemLanguage(id);
    },
    ...mapActions([
      'removeItemLanguage',
      'initializeLanguage'
    ])
  },

  components: {

  },
  computed: {
    ...mapState({
      languageItems: state => state.language
    })
  }
}
</script>

<style scoped>

</style>