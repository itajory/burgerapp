import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[],
    products:[],
    imageurl:'https://admin.burgerlocation.online/storage/app/public/',
    apilink:'https://admin.burgerlocation.online/api/v1/',
  },
  getters: {
    getcatlist(state){
      if(state.categories.length >0)
      return state.categories
      else return null
    },
    getproduct(state){
      if(state.products.length >0)
      return state.products
      else return null
    },

  },
  mutations: {
    setcategorylist(state , data){
     this.state.categories=data;
    },
    setprodutlist(state,data)
    {
      this.state.products=data;
    }
  },
  actions: {
  async  getallcategory(context)
    {
        const cat= await axios.get(context.state.apilink+'categories')
        .catch(err=>{
          console.log(err)
        });
        if(cat)
        {console.log("inside actions = - =- = -",cat.data);
          context.commit('setcategorylist',cat.data)
        }
    },

    async  getallproduct(context)
    {
        const cat= await axios.get(context.state.apilink+'products/latest')
        .catch(err=>{
          console.log(err)
        });
        if(cat)
        {console.log("inside getallproduct actions = - =- = -",cat);
          context.commit('setprodutlist',cat.data)
        }
    }
  },
  modules: {

  }
});
