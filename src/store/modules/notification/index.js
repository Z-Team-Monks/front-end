import axios from 'axios'

const notification = {
    namespaced: true,
    state: {
        notifications : [],
        
    },
    mutations: {
        CLEAR_NOTIFICATIONS : (state) => {
            state.notifications = [];
        },
        GET_NOTIFICATIONS : (state,notifications) => {            
            state.notifications = notifications;            
        }
    },
    actions: {
        async getNotifications({ commit }){            
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
            await axios.get("/users/notification", options)
                .then(res => {
                    commit('GET_NOTIFICATIONS',res.data);                    
                }).catch(e => {
                    console.log(e)
                })            
        },
        async clearNotifications({ commit }){
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
            await axios.delete("/users/notification", options)
                .then(res => {                    
                    commit("CLEAR_NOTIFICATIONS");
                }).catch(e => {
                    console.log(e)
                })            
        }
    },
    getters: {
        notifications: state => state.notificaions
    },
};

export default notification;