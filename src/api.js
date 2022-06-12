import {apiUrl} from "@/config";
import axios from "axios";

export default {
    affix_morphemes:
        {
            resourceUrl: "affix_morphemes",
            getAll(){
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}?expand`,
                    method: "GET"
                });
            },
            getOne(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "GET"
                });
            },
            add(item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: item
                });
            },
            edit(id, item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "PUT",
                    data: item
                });
            },
            delete(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "DELETE"
                });
            }
        },
    _language:
        {
            resourceUrl: "_language",
            getAll(){
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "GET"
                });
            },
            getOne(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "GET"
                });
            },
            add(item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: item
                });
            },
            edit(id, item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "PUT",
                    data: item
                });
            },
            delete(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "DELETE"
                });
            }
        },

    root_morphemes:
        {
            resourceUrl: "root_morphemes",
            getAll(){
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}?expand`,
                    method: "GET"
                });
            },
            getOne(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "GET"
                });
            },
            add(item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: item
                });
            },
            edit(id, item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "PUT",
                    data: item
                });
            },
            delete(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "DELETE"
                });
            }
        },

    allomorphes:
        {
            resourceUrl: "allomorphes",
            getAll(){
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}?expand`,
                    method: "GET"
                });
            },
            getOne(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "GET"
                });
            },
            add(item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: item
                });
            },
            edit(id, item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "PUT",
                    data: item
                });
            },
            delete(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "DELETE"
                });
            }
        },
    concepts:
        {
            resourceUrl: "concepts",
            getAll(){
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}?expand`,
                    method: "GET"
                });
            },
            getOne(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "GET"
                });
            },
            add(item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: item
                });
            },
            edit(id, item) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "PUT",
                    data: item
                });
            },
            delete(id) {
                return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${id}`,
                    method: "DELETE"
                });
            }
        }
}