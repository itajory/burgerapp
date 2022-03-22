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
    cat_id:null,
    cat_name:null,
    product_id:null,
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

      for(var i=0;i<data.length;i++)
      {
        data[i].image="https://admin.burgerlocation.online/storage/app/public/category/"+data[i].image;
      }
     state.categories=data;

   //  console.log("set cat : --------",this.state.categories);
    },
    setprodutlist(state,data)
    {
      
      for(var i=0;i<data.length;i++)
      {
        data[i].image="https://admin.burgerlocation.online/storage/app/public/product/"+data[i].image;
      }
      state.products=data;
    },
    setcatId(state,payload)
    {

      
      state.cat_id=null;
      state.cat_name=null;
      state.cat_id=payload.id;
      state.cat_name=payload.name;
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
        {console.log("inside actions cate = - =- = -",cat.data);
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
        {console.log("inside getallproduct actions = - =- = -",cat.data.products);
          context.commit('setprodutlist',cat.data.products)
        }
    },

    catid(context,payload){

      console.log('name    ssss ',payload.name);
      context.commit('setcatId',payload)
    }
  },
  modules: {

  }
});
