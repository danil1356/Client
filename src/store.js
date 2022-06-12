import Vue from 'vue'
import Vuex from 'vuex'
import RssApi from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: [],
    affixMorph: [],
    rootMorph: [],
    allomorph: [],
    concept: [],

    alertText: ""
  },
  getters: {
  },
  mutations: {
    'SET_RSS_ITEMS'(state, rssItems) {
      state[rssItems.keyState] = rssItems.rssData;
    },
    'ADD_RSS_ITEM'(state, rssItem) {
      state[rssItem.keyState].push(rssItem.rssData)
    },
    'EDIT_RSS_ITEM'(state, rssItem) {
      const item = state[rssItem.keyState].find(item => item.id === rssItem.rssData.id);
      Object.assign(item, rssItem.rssData);
    },
    'REMOVE_RSS_ITEM'(state, rssItem) {
      const index = state[rssItem.keyState].findIndex(item => item.id === rssItem.rssData.id);
      state[rssItem.keyState].splice(index, 1);
    },

    'SET_ALERT_TEXT'(state, alertText) {
      state.alertText = alertText;
    },
  },
  actions: {
    //для affixMorph
    async initializeAffix(context){
      try {
        const keyState = "affixMorph";
        const response = await RssApi.affix_morphemes.getAll();
        context.commit('SET_RSS_ITEMS', {rssData: response.data, keyState});
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItemAffix(context, item) {
      try {
        const keyState = "affixMorph";
        const response = await RssApi.affix_morphemes.add(item);
        context.commit('ADD_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItemAffix(context, item) {
      try {
        const keyState = "affixMorph";
        const response = await RssApi.affix_morphemes.edit(item.id, item);
        context.commit('EDIT_RSS_ITEM', {rssData: response.data, keyState});
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItemAffix(context, id) {
      try {
        const keyState = "affixMorph";
        const response = await RssApi.affix_morphemes.delete(id);
        context.commit('REMOVE_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //для language
    async initializeLanguage(context){
      try {
        const keyState = "language";
        const response = await RssApi._language.getAll();
        context.commit('SET_RSS_ITEMS', {rssData: response.data, keyState} );
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItemLanguage(context, item) {
      try {
        const keyState = "language";
        const response = await RssApi._language.add(item);
        context.commit('ADD_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItemLanguage(context, item) {
      try {
        const keyState = "language";
        const response = await RssApi._language.edit(item.id, item);
        context.commit('EDIT_RSS_ITEM', {rssData: response.data, keyState});
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItemLanguage(context, id) {
      try {
        const keyState = "language";
        const response = await RssApi._language.delete(id);
        context.commit('REMOVE_RSS_ITEM', {rssData: response.data, keyState});
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //для rootMorph
    async initializeRoot(context){
      try {
        const keyState = "rootMorph";
        const response = await RssApi.root_morphemes.getAll();
        context.commit('SET_RSS_ITEMS', {rssData: response.data, keyState} );
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItemRoot(context, item) {
      try {
        const keyState = "rootMorph";
        const response = await RssApi.root_morphemes.add(item);
        context.commit('ADD_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItemRoot(context, item) {
      try {
        const keyState = "rootMorph";
        const response = await RssApi.root_morphemes.edit(item.id, item);
        context.commit('EDIT_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItemRoot(context, id) {
      try {
        const keyState = "rootMorph";
        const response = await RssApi.root_morphemes.delete(id);
        context.commit('REMOVE_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //для allomorphes
    async initializeAllomorph(context){
      try {
        const keyState = "allomorph";
        const response = await RssApi.allomorphes.getAll();
        context.commit('SET_RSS_ITEMS', {rssData: response.data, keyState} );
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItemAllomorph(context, item) {
      try {
        const keyState = "allomorph";
        const response = await RssApi.allomorphes.add(item);
        context.commit('ADD_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItemAllomorph(context, item) {
      try {
        const keyState = "allomorph";
        const response = await RssApi.allomorphes.edit(item.id, item);
        context.commit('EDIT_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItemAllomorph(context, id) {
      try {
        const keyState = "allomorph";
        const response = await RssApi.allomorphes.delete(id);
        context.commit('REMOVE_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },

    //для Concepts
    async initializeConcepts(context){
      try {
        const keyState = "concept";
        const response = await RssApi.concepts.getAll();
        context.commit('SET_RSS_ITEMS', {rssData: response.data, keyState} );
      }catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItemConcepts(context, item) {
      try {
        const keyState = "concept";
        const response = await RssApi.concepts.add(item);
        context.commit('ADD_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItemConcepts(context, item) {
      try {
        const keyState = "concept";
        const response = await RssApi.concepts.edit(item.id, item);
        context.commit('EDIT_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItemConcepts(context, id) {
      try {
        const keyState = "concept";
        const response = await RssApi.concepts.delete(id);
        context.commit('REMOVE_RSS_ITEM', {rssData: response.data, keyState} );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    }
  },
  modules: {
  }
})
