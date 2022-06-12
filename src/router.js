import Vue from 'vue'
import VueRouter from 'vue-router'
import AffixMorphList from "@/views/AffixMorphList";
import Home from "@/views/Home";
import AffixMorphEdit from "@/views/AffixMorphEdit";
import App from "@/App"
import LanguageList from "@/views/LanguageList";
import LanguageEdit from "@/views/LanguageEdit";
import RootMorphList from "@/views/RootMorphList";
import RootEdit from "@/views/RootEdit";
import AllomorphesList from "@/views/AllomorphesList";
import AllomorphesEdit from "@/views/AllomorphesEdit";
import ConceptsList from "@/views/ConceptsList";
import infographik from "@/views/Infographik";
import AllomorphOnAffixalMorph from "@/views/AllomorphOnAffixalMorph";
import editConcepts from "@/views/editConcepts";

Vue.use(VueRouter)

const routes =
    [
        {path: "/", name: "Home", component: Home },

        {path: "/affixlist",component: App, children: [
                {path: "/", name: "AffixMorphList", component: AffixMorphList},
                {path: "/affixlist/:id", name: "edit", component: AffixMorphEdit}
            ]
        },

        {path: "/languageList",component: App, children: [
                {path: "/", name: "LanguageList", component: LanguageList},
                {path: "/languageList/:id", name: "editLanguage", component: LanguageEdit}
            ]
        },

        {path: "/rootList",component: App, children: [
                {path: "/", name: "RootList", component: RootMorphList},
                {path: "/rootList/:id", name: "editRoot", component: RootEdit}
            ]
        },
        {path: "/allomorphesList",component: App, children: [
                {path: "/", name: "AllomorphesList", component: AllomorphesList},
                {path: "/allomorphesList/:id", name: "editAllomorph", component: AllomorphesEdit}
            ]
        },
        {path: "/conceptsList",component: App, children: [
                {path: "/", name: "ConceptsList", component: ConceptsList},
                {path: "/allomorphesList/:id", name: "editConcepts", component: editConcepts}
            ]
        },
        {path: "/allomorph_on_affixal_morph",component: App, children: [
                {path: "/", name: "allomorph_on_affixal_morph", component: AllomorphOnAffixalMorph}
            ]
        },
        {path: "/infographik",component: App, children: [
                {path: "/", name: "infographik", component: infographik}
            ]
        }
    ]

const router = new VueRouter({
  routes
})

export default router
