import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        warehouses: [],
    },
    actions: {
        GET_WAREHOUSES_FROM_API({commit}) {
            return axios('http://api.odesseo.com.ua/warehouses?limit=100', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_WAREHOUSES_TO_VUEX', response.data.data)
                })
        }
    },
    mutations: {
        SET_WAREHOUSES_TO_VUEX: (state, warehouses) => {
            state.warehouses = warehouses
        }
    },
    getters: {
        WAREHOUSES(state) {
            return state.warehouses
        }
    }
})

export default store;