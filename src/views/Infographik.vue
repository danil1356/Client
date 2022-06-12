<template>

  <div class="col-md-9 col-sm-8 col-xs-12">

    <h4>Статистика</h4>
    <hr>

    <table class="table table-bordered">
      <caption>Текущее состояние базы данных</caption>
      <tbody>
      <tr>
        <th style="width: 30%">Количество языков</th>
        <td>{{ languageItems.length }}</td>
      </tr>
      <tr>
        <th>Количество концептов</th>
        <td>{{conceptItems.length}}</td>
      </tr>
      <tr>
        <th>Количество аффиксальных морфем</th>
        <td>{{ affixItems.length }}</td>
      </tr>
      <tr>
        <th>Количество аффиксальных алломорфов</th>
        <td>{{ allomorphItems.length }}</td>
      </tr>
      <tr>
        <th>Количество корневых морфем</th>
        <td>{{rootItems.length}}</td>
      </tr>
      </tbody>
    </table>


    <Bar :chart-data="chartData"/>




  </div>
</template>

<script>
import {wait} from "@/utils";
import {mapActions, mapState} from "vuex";
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)



export default {

  data: ()=>({
      message: null
  }),

  mounted() {
    this.$nextTick(async () => {
      await this.initializeLanguage();
      await this.initializeConcepts();
      await this.initializeAffix();
      await this.initializeAllomorph();
      await this.initializeRoot();

      await wait(1500);
    });
  },

  methods: {
    ...mapActions([
        'initializeLanguage',
        'initializeConcepts',
        'initializeAffix',
        'initializeAllomorph',
        'initializeRoot'
    ]),

    entryStatistics(a, b){
      let res = [];
      let lang = a.map(c => c.id)
      let morph = b.map(d => d.id_language)


      for (let i=0; i<lang.length; i++)
      {
        res[i] = 0;
        for (let j=0; j<morph.length; j++)
        {
          if (lang[i] === morph[j])
          {
            res[i]+=1;
          }
        }
      }

      return res;
    }

  },

  components: {
    Bar
  },

  computed: {
    ...mapState({
      languageItems: state => state.language,
      affixItems: state => state.affixMorph,
      rootItems: state => state.rootMorph,
      allomorphItems: state => state.allomorph,
      conceptItems: state => state.concept,
    }),

    chartData() { return {
      labels: this.languageItems.map(c => c.name),
      datasets: [
        {
          label: 'Корневая морфема',
          backgroundColor: '#f87979',
          data: this.entryStatistics(this.languageItems, this.rootItems)
        },
        {
          label: 'Аффиксальная морфема',
          backgroundColor: '#f57800',
          data: this.entryStatistics(this.languageItems, this.affixItems)
        }

      ]}},

  }

}
</script>

<style scoped>

</style>