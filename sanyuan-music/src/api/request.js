import { axiosInstance } from "./config";

// export const getRecommendListRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data:[{
//           id: 1,
//           title: 'aaaaaa'
//         }]
//       })
//     }, 1000)
//   })
// }


// 项目所有请求API的列表文件 
// 每个请求一个函数
// 每个函数都是返回一个promise 

// api 与actions的分离点
// axiosInstance.get   返回是Promise 

//首页广告 
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

// 歌手列表 支持分页 0-50-100
// 接口请求规范  要传offset
// reducer init = {singerList:[],offset:0}
// useEffect dispatch getHotSingerList  -> getHotSingerListRequest  API 请求  异步
// then  changeSingerList  [] [...oldSingerList, ...data]
// changeOffset 0 data.lenght

// onPullDown offset 0 changeOffset
// getHotSingerListRequest


// better-scroll  baseUI scroll/index.js 上拉加载更多
 export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

// history.push()/Link

export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

// 前后端合作的要素有哪些
  // 1.分水岭:接口地址
  // url/top/artist  RESTFUL  资源的暴露
  //  2.传参
  // 3. 接口文档 后端给
export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const sentVcodeRequest = phone => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
  return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};