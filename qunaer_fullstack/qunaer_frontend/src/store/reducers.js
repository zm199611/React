import {
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_CITY_DATA
} from './actions'
export default {
    // 页面状态 改变对应数据的改变
    isCitySelectorVisible(state = false, action) {
        const { type, paylod } = action;
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return payload
            default:
        }
        return state
    },
    cityData(state = null, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_CITY_DATA:
                return payload
            default:
        }
        return state
    },
    // 完成这个reducer和相应的action 并且在fetchCityData中处理它相关的逻辑
    // isloadingCityData
    isloadingCityData(state = true,action){
        const{ type,payload } = action;
        switch(type){
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload
                default:
                    return state
        }
    }
}