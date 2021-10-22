import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from "./auth/AuthService";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
	state: {
  		authenticated:false
	},
	mutations: {
	  	login(state){
		    state.authenticated = true
	  	},
	  	logout(state){
	    	state.authenticated = false
	  	},
	},
	actions: {
	  	login({commit}){
            return new Promise(async (resolve, reject) => {                
				commit('login');
				localStorage.removeItem("token");
            })
	    },
        logout({commit}){
	        return new Promise((resolve, reject) => {
                console.log("in logout")
	            commit('logout')
                //localStorage.removeItem("isAuthenticated");
	            resolve("Logout Successfully")
	        })
	    },
	},
	getters : {
	  authenticated: state => state.authenticated,
	}
})