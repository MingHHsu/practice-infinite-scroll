import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enum: [
    'Taipei',
    'NewTaipei',
    'Taoyuan',
    'Taichung',
    'Tainan',
    'Kaohsiung',
    'Keelung',
    'Hsinchu',
    'HsinchuCounty',
    'MiaoliCounty',
    'ChanghuaCounty',
    'NantouCounty',
    'YunlinCounty',
    'ChiayiCounty',
    'Chiayi',
    'PingtungCounty',
    'YilanCounty',
    'HualienCounty',
    'TaitungCounty',
    'KinmenCounty',
    'PenghuCounty',
    'LienchiangCounty',
  ],
  'x-enum': {
    NantouCounty: '南投縣',
    Kaohsiung: '高雄市',
    PenghuCounty: '澎湖縣',
    KinmenCounty: '金門縣',
    HsinchuCounty: '新竹縣',
    NewTaipei: '新北市',
    PingtungCounty: '屏東縣',
    ChanghuaCounty: '彰化縣',
    YilanCounty: '宜蘭縣',
    HualienCounty: '花蓮縣',
    Taoyuan: '桃園市',
    LienchiangCounty: '連江縣',
    Hsinchu: '新竹市',
    Chiayi: '嘉義市',
    MiaoliCounty: '苗栗縣',
    YunlinCounty: '雲林縣',
    Keelung: '基隆市',
    Taipei: '臺北市',
    Tainan: '臺南市',
    TaitungCounty: '臺東縣',
    ChiayiCounty: '嘉義縣',
    Taichung: '臺中市',
  },
};

const { reducer } = createSlice({
  name: 'cities',
  initialState,
});

export default reducer;
