export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE
 = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE'
 export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'

export function showCitySelector(){
    return{
        type:ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload:true

    }
}
// 对ACTION_SET_CITY_DATA设置一个action
export function fetchCityData(){
    return (dispatch,getstate) =>{
        fetch('./rest/cities')
            .then(res => res.json())
            .then(cityData =>{
                dispatch(setCityData(cityData))
                   
            })
        }
    }
export function setCityData(cityData){
    return{
        type:ACTION_SET_CITY_DATA,
        payload:cityData
    }
}


