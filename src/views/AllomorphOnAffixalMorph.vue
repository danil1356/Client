<template>

  <table class="table table-hover table-bordered summary-table table-nowrap">
    <thead>
    <tr>
      <th></th>
      <th v-for="(item, index) in languageItems" :key="index">{{item.name}}</th>
    </tr>
    </thead>

    <tbody>

    <tr v-for="(item3, index3) in allomorphItems" :key="index3">{{item3.value}}
    <th v-for="(item2, index2) in languageItems" :key="index2">{{entryStatistics(item,item3,item2,affixItems,allomorphItems)}}</th>
    </tr>
    </tbody>


    <div id="app">
      <a href="http://localhost:8080/downloadExcel/allomorphAffix" style="text-align: center">
        Скачать
      </a>
    </div>
  </table>

</template>

<script>
import {wait} from "@/utils";
import {mapActions, mapState} from "vuex";

export default {
  mounted() {
    this.$nextTick(async () => {
      await this.initializeLanguage();
      await this.initializeAllomorph();
      await this.initializeAffix();

      await wait(1500);
    });
  },

  methods:{
    ...mapActions([
      'initializeLanguage',
      'initializeAllomorph',
      'initializeAffix',
    ]),


    uniq(a)
    {
      var seen = {};
      return a.filter(function(item)
      {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
    },

    entryStatistics(langItems, allomItems, langItems2,affixList,allomorphList){
      let res;
      for (let i=0; i<affixList.length; i++)
      {
        if(allomItems.id_affix == affixList[i].id)
        {
          if(langItems2.id == affixList[i].id_language)
          {
            res = affixList[i].name;
          }
        }
      }
      return res;
    }
  },

  components: {
  },
  computed: {
    ...mapState({
      languageItems: state => state.language,
      allomorphItems: state => state.allomorph,
      affixItems: state => state.affixMorph
    })
  }
}
</script>

<style scoped>

</style>