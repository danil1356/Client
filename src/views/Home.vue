<template>
  <div class="container">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="http://localhost:8081/#/allomorph_on_affixal_morph" class="nav-link">Сводная таблица</a></li>
              <li class="nav-item"><a href="http://localhost:8081/#/infographik" class="nav-link">Статистика</a></li>
            </ul>
        </div>
      </div>
    </nav>


    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-4 sidebar-menu" id="sidebarMenuBlock">
          <div class="list-group">
            <div class="list-group-item">
              <b>Общая часть</b>
            </div>

            <a class="list-group-item" role="button" data-toggle="collapse" href="http://localhost:8081/#/languageList">
              Языки
              <span class="glyphicon glyphicon-chevron-down pull-right" style="line-height: 1.846;"></span>
            </a>

            <a class="list-group-item" role="button" data-toggle="collapse" href="http://localhost:8081/#/ConceptsList">
              Концепты
              <span class="glyphicon glyphicon-chevron-down pull-right" style="line-height: 1.846;"></span>
            </a>

            <div class="list-group-item">
              <b>Языковая часть</b>
            </div>

            <a class="list-group-item" role="button" data-toggle="collapse" href="http://localhost:8081/#/affixlist">
              Аффиксальные морфемы
              <span class="glyphicon glyphicon-chevron-down pull-right" style="line-height: 1.846;"></span>
            </a>


            <a class="list-group-item" role="button" data-toggle="collapse" href="http://localhost:8081/#/rootList">
              Корневые морфемы
              <span class="glyphicon glyphicon-chevron-down pull-right" style="line-height: 1.846;"></span>
            </a>


            <a class="list-group-item" role="button" data-toggle="collapse" href="http://localhost:8081/#/allomorphesList">
              Алломорфы
              <span class="glyphicon glyphicon-chevron-down pull-right" style="line-height: 1.846;"></span>
            </a>
          </div>
        </div>
        <div class="col-md-9 col-sm-8 col-xs-12">

          <h4>Модель Тюркской Морфемы</h4>
          <hr>
          <div style="text-align: justify; max-width: 960px; font-size: 1.2em">
            <p>Для проведения научных исследований в области тюркологии и типологии агглютинативных языков необходим программный инструментарий, который учитывает структурно-функциональные особенности рассматриваемых языков.</p>
            <p>Веб-сервис для лингвистической базы данных, содержит информацию о языковых и общеязыковых элементах, предоставляющий эту информацию в форме сводных таблиц по содержащимся в базе данных языкам, а также инфографику и статистику по базе данных</p>
            <p></p>
            <p>Базы данных веб-сервиса также могут быть использованы в учебном процессе, как информационно-справочная система по тюркским языкам.</p>
            <span class="thumbnail">

        <img :src="image" alt="model" style="max-height: 500px">

    </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import model from '@/assets/model.png'

export default {
  data: ()=> ({
    image: model
  }),

  methods:{

  },

  components: {

  },
  computed: {

      }
}
</script>

<style scoped>

</style>