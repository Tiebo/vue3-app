import {createStore} from 'vuex'
import ModuleUser from "@/store/user";

export default createStore({

    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: ModuleUser,
    }
});

