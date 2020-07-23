import * as actionTypes from './constants'
import { getRecommendListRequest ,getBannersRequest }from '../../../api/request'

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
        data:data
});

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
        data
});



export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data))
            dispatch(changeEnterLoading(false))
        }).catch(()=>{
            console.log('推荐数据传输有误')
        })

    }

export const getBanners = () =>{

}
}
