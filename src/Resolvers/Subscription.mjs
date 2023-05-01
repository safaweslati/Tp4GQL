export const Subscription = {
    cv : {
    subscribe: (parent,args,{data, pubSub},info) => {return pubSub.subscribe("Cv_changed")},
    resolve: (payload) => {return payload}
    }
}