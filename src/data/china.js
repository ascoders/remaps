/**
 * 中国地图数据
 */

'use strict';

var chinaData = {
  // 省的索引，包含经纬度和全名信息
  provinceIndex: {
    // 1 << 12: 4096; 1 << 13: 8192; 1 << 14: 16384; 1 << 15: 32768;
    '中国': {scale: 3000, center: [105, 35.666], pole: [0,0], fullName: '中国', index: -1},
    '甘肃': {scale: 10000, center: [100.7129,38.166], pole: [98.1738,39.8035], fullName: '甘肃', index: 0},
    '青海': {scale: 12000, center: [96.2402,35.4199], pole: [93.5925,33.9368], fullName: '青海', index: 1},
    '广西': {scale: 22500, center: [108.2813,23.6426], pole: [110.5554,25.318], fullName: '广西', index: 2},
    '贵州': {scale: 25500, center: [106.6113,26.9385], pole: [104.7546,26.0925], fullName: '贵州', index: 3},
    '重庆': {scale: 32000, center: [107.7539,30.1904], pole: [106.6661,29.7236], fullName: '重庆', index: 4},
    '北京': {scale: 60000, center: [116.4551,40.2539], pole: [116.3500,39.7341], fullName: '北京', index: 5},
    '福建': {scale: 28000, center: [118.3008,25.9277], pole: [117.0241,25.0841], fullName: '福建', index: 6},
    '安徽': {scale: 23000, center: [117.2461,32.0361], pole: [116.9697,33.6523], fullName: '安徽', index: 7},
    '广东': {scale: 21000, center: [113.4668,22.8076], pole: [116.6293,23.6603], fullName: '广东', index: 8},
    '西藏': {scale: 9000, center: [88.7695,31.6846], pole: [81.140491,34.640584], fullName: '西藏', index: 9},
    '新疆': {scale: 7000, center: [84.9023,41.748], pole: [79.924278,37.142652], fullName: '新疆', index: 10},
    '海南': {scale: 55000, center: [109.9512,19.2041], pole: [109.547986,18.316819], fullName: '海南', index: 11},
    '宁夏': {scale: 30000, center: [105.9961,37.3096], pole: [106.246439,36.017639], fullName: '宁夏', index: 13},
    '陕西': {scale: 16000, center: [109.5996,35.6396], pole: [107.030053,33.0714], fullName: '陕西', index: 14},
    '山西': {scale: 17000, center: [112.4121,37.6611], pole: [113.309033,40.085189], fullName: '山西', index: 15},
    '湖北': {scale: 24000, center: [112.2363,31.1572], pole: [109.486374,30.301139], fullName: '湖北', index: 16},
    '湖南': {scale: 23000, center: [111.5332,27.3779], pole: [113.022317,25.776451], fullName: '湖南', index: 17},
    '四川': {scale: 14000, center: [102.9199,30.1904], pole: [102.274324,27.887813], fullName: '四川', index: 18},
    '云南': {scale: 16000, center: [101.8652,25.1807], pole: [98.582436,24.447242], fullName: '云南', index: 19},
    '河北': {scale: 17000, center: [115.4004,39.5688], pole: [114.898621,40.830172], fullName: '河北', index: 20},
    '河南': {scale: 22000, center: [113.4668,33.8818], pole: [112.534003,32.996217], fullName: '河南', index: 21},
    '辽宁': {scale: 22000, center: [122.3438,41.0889], pole: [121.623978,38.917549], fullName: '辽宁', index: 22},
    '山东': {scale: 21000, center: [118.7402,36.4307], pole: [118.363852,35.111948], fullName: '山东', index: 23},
    '天津': {scale: 60000, center: [117.4219,39.4189], pole: [117.415157,40.053243], fullName: '天津', index: 24},
    '江西': {scale: 22000, center: [116.0156,27.29], pole: [114.941691,25.836399], fullName: '江西', index: 25},
    '江苏': {scale: 25000, center: [120.0586,32.915], pole: [117.227672,34.270784], fullName: '江苏', index: 26},
    '上海': {scale: 90000, center: [121.4648,31.2891], pole: [121.413342,31.632609], fullName: '上海', index: 27},
    '浙江': {scale: 30000, center: [120.498,29.0918], pole: [120.725129,27.921457], fullName: '浙江', index: 28},
    '吉林': {scale: 17000, center: [126.4746,43.5938], pole: [129.510381,42.886653], fullName: '吉林', index: 29},
    '内蒙古': {scale: 5500, center: [113.5977,44.3408], pole: [119.785146,49.219484], fullName: '内蒙古', index: 30},
    '黑龙江': {scale: 10000, center: [128.1445,48.5156], pole: [124.632005,51.924242], fullName: '黑龙江', index: 31},
    '台湾': {scale: 30000, center: [121.0254,23.5986], pole: [120.730375,22.405258], fullName: '台湾', index: 32},
    '香港': {scale: 250000, center: [114.1578,22.3242], pole: [113.894597,22.244163], fullName: '香港', index: 33},
    '澳门': {scale: 1000000, center: [113.5547,22.1484], pole: [113.566291,22.119587], fullName: '澳门', index: 34}
  },
  // 市的索引，包含经纬度和全名信息
  cityIndex: {
    '重庆':{center:[107.7539,30.1904],fullName:'重庆市',province:'重庆'},
    '北京':{center:[116.4551,40.2539],fullName:'北京市',province:'北京'},
    '天津':{center:[117.4219,39.4189],fullName:'天津市',province:'天津'},
    '上海':{center:[121.4648,31.2891],fullName:'上海市',province:'上海'},
    '香港':{center:[114.2578,22.3242],fullName:'香港',province:'新疆'},
    '澳门':{center:[113.5547,22.1484],fullName:'澳门',province:'新疆'},
    '巴音':{center:[88.1653,39.6002],fullName:'巴音郭楞蒙古自治州',province:'新疆'},
    '和田':{center:[81.167,36.9855],fullName:'和田地区',province:'新疆'},
    '哈密':{center:[93.7793,42.9236],fullName:'哈密地区',province:'新疆'},
    '阿克':{center:[82.9797,41.0229],fullName:'阿克苏地区',province:'新疆'},
    '阿勒':{center:[88.2971,47.0929],fullName:'阿勒泰地区',province:'新疆'},
    '喀什':{center:[77.168,37.8534],fullName:'喀什地区',province:'新疆'},
    '塔城':{center:[86.6272,45.8514],fullName:'塔城地区',province:'新疆'},
    '昌吉':{center:[89.6814,44.4507],fullName:'昌吉回族自治州',province:'新疆'},
    '克孜':{center:[74.6301,39.5233],fullName:'克孜勒苏柯尔克孜自治州',province:'新疆'},
    '吐鲁':{center:[89.6375,42.4127],fullName:'吐鲁番地区',province:'新疆'},
    '伊犁':{center:[82.5513,43.5498],fullName:'伊犁哈萨克自治州',province:'新疆'},
    '博尔':{center:[81.8481,44.6979],fullName:'博尔塔拉蒙古自治州',province:'新疆'},
    '乌鲁':{center:[87.9236,43.5883],fullName:'乌鲁木齐市',province:'新疆'},
    '克拉':{center:[85.2869,45.5054],fullName:'克拉玛依市',province:'新疆'},
    '阿拉尔':{center:[81.2769,40.6549],fullName:'阿拉尔市',province:'新疆'},
    '图木':{center:[79.1345,39.8749],fullName:'图木舒克市',province:'新疆'},
    '五家':{center:[87.5391,44.3024],fullName:'五家渠市',province:'新疆'},
    '石河':{center:[86.0229,44.2914],fullName:'石河子市',province:'新疆'},
    '那曲':{center:[88.1982,33.3215],fullName:'那曲地区',province:'西藏'},
    '阿里':{center:[82.3645,32.7667],fullName:'阿里地区',province:'西藏'},
    '日喀':{center:[86.2427,29.5093],fullName:'日喀则地区',province:'西藏'},
    '林芝':{center:[95.4602,29.1138],fullName:'林芝地区',province:'西藏'},
    '昌都':{center:[97.0203,30.7068],fullName:'昌都地区',province:'西藏'},
    '山南':{center:[92.2083,28.3392],fullName:'山南地区',province:'西藏'},
    '拉萨':{center:[91.1865,30.1465],fullName:'拉萨市',province:'西藏'},
    '呼伦':{center:[120.8057,50.2185],fullName:'呼伦贝尔市',province:'内蒙古'},
    '阿拉善':{center:[102.019,40.1001],fullName:'阿拉善盟',province:'内蒙古'},
    '锡林':{center:[115.6421,44.176],fullName:'锡林郭勒盟',province:'内蒙古'},
    '鄂尔':{center:[108.9734,39.2487],fullName:'鄂尔多斯市',province:'内蒙古'},
    '赤峰':{center:[118.6743,43.2642],fullName:'赤峰市',province:'内蒙古'},
    '巴彦':{center:[107.5562,41.3196],fullName:'巴彦淖尔市',province:'内蒙古'},
    '通辽':{center:[121.4758,43.9673],fullName:'通辽市',province:'内蒙古'},
    '乌兰':{center:[112.5769,41.77],fullName:'乌兰察布市',province:'内蒙古'},
    '兴安':{center:[121.3879,46.1426],fullName:'兴安盟',province:'内蒙古'},
    '包头':{center:[110.3467,41.4899],fullName:'包头市',province:'内蒙古'},
    '呼和':{center:[111.4124,40.4901],fullName:'呼和浩特市',province:'内蒙古'},
    '乌海':{center:[106.886,39.4739],fullName:'乌海市',province:'内蒙古'},
    '海西':{center:[94.9768,37.1118],fullName:'海西蒙古族藏族自治州',province:'青海'},
    '玉树':{center:[93.5925,33.9368],fullName:'玉树藏族自治州',province:'青海'},
    '果洛':{center:[99.3823,34.0466],fullName:'果洛藏族自治州',province:'青海'},
    '海南':{center:[100.3711,35.9418],fullName:'海南藏族自治州',province:'青海'},
    '海北':{center:[100.3711,37.9138],fullName:'海北藏族自治州',province:'青海'},
    '黄南':{center:[101.5686,35.1178],fullName:'黄南藏族自治州',province:'青海'},
    '海东':{center:[102.3706,36.2988],fullName:'海东地区',province:'青海'},
    '西宁':{center:[101.4038,36.8207],fullName:'西宁市',province:'青海'},
    '甘孜':{center:[99.9207,31.0803],fullName:'甘孜藏族自治州',province:'四川'},
    '阿坝':{center:[102.4805,32.4536],fullName:'阿坝藏族羌族自治州',province:'四川'},
    '凉山':{center:[101.9641,27.6746],fullName:'凉山彝族自治州',province:'四川'},
    '绵阳':{center:[104.7327,31.8713],fullName:'绵阳市',province:'四川'},
    '达州':{center:[107.6111,31.333],fullName:'达州市',province:'四川'},
    '广元':{center:[105.6885,32.2284],fullName:'广元市',province:'四川'},
    '雅安':{center:[102.6672,29.8938],fullName:'雅安市',province:'四川'},
    '宜宾':{center:[104.6558,28.548],fullName:'宜宾市',province:'四川'},
    '乐山':{center:[103.5791,29.1742],fullName:'乐山市',province:'四川'},
    '南充':{center:[106.2048,31.1517],fullName:'南充市',province:'四川'},
    '巴中':{center:[107.0618,31.9977],fullName:'巴中市',province:'四川'},
    '泸州':{center:[105.4578,28.493],fullName:'泸州市',province:'四川'},
    '成都':{center:[103.9526,30.7617],fullName:'成都市',province:'四川'},
    '资阳':{center:[104.9744,30.1575],fullName:'资阳市',province:'四川'},
    '攀枝':{center:[101.6895,26.7133],fullName:'攀枝花市',province:'四川'},
    '眉山':{center:[103.8098,30.0146],fullName:'眉山市',province:'四川'},
    '广安':{center:[106.6333,30.4376],fullName:'广安市',province:'四川'},
    '德阳':{center:[104.48,31.1133],fullName:'德阳市',province:'四川'},
    '内江':{center:[104.8535,29.6136],fullName:'内江市',province:'四川'},
    '遂宁':{center:[105.5347,30.6683],fullName:'遂宁市',province:'四川'},
    '自贡':{center:[104.6667,29.2786],fullName:'自贡市',province:'四川'},
    '黑河':{center:[127.1448,49.2957],fullName:'黑河市',province:'黑龙江'},
    '大兴':{center:[124.1016,52.2345],fullName:'大兴安岭地区',province:'黑龙江'},
    '哈尔':{center:[127.9688,45.368],fullName:'哈尔滨市',province:'黑龙江'},
    '齐齐':{center:[124.541,47.5818],fullName:'齐齐哈尔市',province:'黑龙江'},
    '牡丹':{center:[129.7815,44.7089],fullName:'牡丹江市',province:'黑龙江'},
    '绥化':{center:[126.7163,46.8018],fullName:'绥化市',province:'黑龙江'},
    '伊春':{center:[129.1992,47.9608],fullName:'伊春市',province:'黑龙江'},
    '佳木':{center:[133.0005,47.5763],fullName:'佳木斯市',province:'黑龙江'},
    '鸡西':{center:[132.7917,45.7361],fullName:'鸡西市',province:'黑龙江'},
    '双鸭':{center:[133.5938,46.7523],fullName:'双鸭山市',province:'黑龙江'},
    '大庆':{center:[124.7717,46.4282],fullName:'大庆市',province:'黑龙江'},
    '鹤岗':{center:[130.4407,47.7081],fullName:'鹤岗市',province:'黑龙江'},
    '七台':{center:[131.2756,45.9558],fullName:'七台河市',province:'黑龙江'},
    '酒泉':{center:[96.2622,40.4517],fullName:'酒泉市',province:'甘肃'},
    '张掖':{center:[99.7998,38.7433],fullName:'张掖市',province:'甘肃'},
    '甘南':{center:[102.9199,34.6893],fullName:'甘南藏族自治州',province:'甘肃'},
    '武威':{center:[103.0188,38.1061],fullName:'武威市',province:'甘肃'},
    '陇南':{center:[105.304,33.5632],fullName:'陇南市',province:'甘肃'},
    '庆阳':{center:[107.5342,36.2],fullName:'庆阳市',province:'甘肃'},
    '白银':{center:[104.8645,36.5076],fullName:'白银市',province:'甘肃'},
    '定西':{center:[104.5569,35.0848],fullName:'定西市',province:'甘肃'},
    '天水':{center:[105.6445,34.6289],fullName:'天水市',province:'甘肃'},
    '兰州':{center:[103.5901,36.3043],fullName:'兰州市',province:'甘肃'},
    '平凉':{center:[107.0728,35.321],fullName:'平凉市',province:'甘肃'},
    '临夏':{center:[103.2715,35.5737],fullName:'临夏回族自治州',province:'甘肃'},
    '金昌':{center:[102.074,38.5126],fullName:'金昌市',province:'甘肃'},
    '嘉峪':{center:[98.1738,39.8035],fullName:'嘉峪关市',province:'甘肃'},
    '普洱':{center:[100.7446,23.4229],fullName:'普洱市',province:'云南'},
    '红河':{center:[103.0408,23.6041],fullName:'红河哈尼族彝族自治州',province:'云南'},
    '文山':{center:[104.8865,23.5712],fullName:'文山壮族苗族自治州',province:'云南'},
    '曲靖':{center:[103.9417,25.7025],fullName:'曲靖市',province:'云南'},
    '楚雄':{center:[101.6016,25.3619],fullName:'楚雄彝族自治州',province:'云南'},
    '大理':{center:[99.9536,25.6805],fullName:'大理白族自治州',province:'云南'},
    '临沧':{center:[99.613,24.0546],fullName:'临沧市',province:'云南'},
    '迪庆':{center:[99.4592,27.9327],fullName:'迪庆藏族自治州',province:'云南'},
    '昭通':{center:[104.0955,27.6031],fullName:'昭通市',province:'云南'},
    '昆明':{center:[102.9199,25.4663],fullName:'昆明市',province:'云南'},
    '丽江':{center:[100.448,26.955],fullName:'丽江市',province:'云南'},
    '西双':{center:[100.8984,21.8628],fullName:'西双版纳傣族自治州',province:'云南'},
    '保山':{center:[99.0637,24.9884],fullName:'保山市',province:'云南'},
    '玉溪':{center:[101.9312,23.8898],fullName:'玉溪市',province:'云南'},
    '怒江':{center:[99.1516,26.5594],fullName:'怒江傈僳族自治州',province:'云南'},
    '德宏':{center:[98.1299,24.5874],fullName:'德宏傣族景颇族自治州',province:'云南'},
    '百色':{center:[106.6003,23.9227],fullName:'百色市',province:'广西'},
    '河池':{center:[107.8638,24.5819],fullName:'河池市',province:'广西'},
    '桂林':{center:[110.5554,25.318],fullName:'桂林市',province:'广西'},
    '南宁':{center:[108.479,23.1152],fullName:'南宁市',province:'广西'},
    '柳州':{center:[109.3799,24.9774],fullName:'柳州市',province:'广西'},
    '崇左':{center:[107.3364,22.4725],fullName:'崇左市',province:'广西'},
    '来宾':{center:[109.7095,23.8403],fullName:'来宾市',province:'广西'},
    '玉林':{center:[110.2148,22.3792],fullName:'玉林市',province:'广西'},
    '梧州':{center:[110.9949,23.5052],fullName:'梧州市',province:'广西'},
    '贺州':{center:[111.3135,24.4006],fullName:'贺州市',province:'广西'},
    '钦州':{center:[109.0283,22.0935],fullName:'钦州市',province:'广西'},
    '贵港':{center:[109.9402,23.3459],fullName:'贵港市',province:'广西'},
    '防城':{center:[108.0505,21.9287],fullName:'防城港市',province:'广西'},
    '北海':{center:[109.314,21.6211],fullName:'北海市',province:'广西'},
    '怀化':{center:[109.9512,27.4438],fullName:'怀化市',province:'湖南'},
    '永州':{center:[111.709,25.752],fullName:'永州市',province:'湖南'},
    '邵阳':{center:[110.9619,26.8121],fullName:'邵阳市',province:'湖南'},
    '郴州':{center:[113.2361,25.8673],fullName:'郴州市',province:'湖南'},
    '常德':{center:[111.4014,29.2676],fullName:'常德市',province:'湖南'},
    '湘西':{center:[109.7864,28.6743],fullName:'湘西土家族苗族自治州'},
    '衡阳':{center:[112.4121,26.7902],fullName:'衡阳市',province:'湖南'},
    '岳阳':{center:[113.2361,29.1357],fullName:'岳阳市',province:'湖南'},
    '益阳':{center:[111.731,28.3832],fullName:'益阳市',province:'湖南'},
    '长沙':{center:[113.0823,28.2568],fullName:'长沙市',province:'湖南'},
    '株洲':{center:[113.5327,27.0319],fullName:'株洲市',province:'湖南'},
    '张家界':{center:[110.5115,29.328],fullName:'张家界市',province:'湖南'},
    '娄底':{center:[111.6431,27.7185],fullName:'娄底市',province:'湖南'},
    '湘潭':{center:[112.5439,27.7075],fullName:'湘潭市',province:'湖南'},
    '榆林':{center:[109.8743,38.205],fullName:'榆林市',province:'陕西'},
    '延安':{center:[109.1052,36.4252],fullName:'延安市',province:'陕西'},
    '汉中':{center:[106.886,33.0139],fullName:'汉中市',province:'陕西'},
    '安康':{center:[109.1162,32.7722],fullName:'安康市',province:'陕西'},
    '商洛':{center:[109.8083,33.761],fullName:'商洛市',province:'陕西'},
    '宝鸡':{center:[107.1826,34.3433],fullName:'宝鸡市',province:'陕西'},
    '渭南':{center:[109.7864,35.0299],fullName:'渭南市',province:'陕西'},
    '咸阳':{center:[108.4131,34.8706],fullName:'咸阳市',province:'陕西'},
    '西安':{center:[109.1162,34.2004],fullName:'西安市',province:'陕西'},
    '铜川':{center:[109.0393,35.1947],fullName:'铜川市',province:'陕西'},
    '清远':{center:[112.9175,24.3292],fullName:'清远市',province:'广东'},
    '韶关':{center:[113.7964,24.7028],fullName:'韶关市',province:'广东'},
    '湛江':{center:[110.3577,20.9894],fullName:'湛江市',province:'广东'},
    '梅州':{center:[116.1255,24.1534],fullName:'梅州市',province:'广东'},
    '河源':{center:[114.917,23.9722],fullName:'河源市',province:'广东'},
    '肇庆':{center:[112.1265,23.5822],fullName:'肇庆市',province:'广东'},
    '惠州':{center:[114.6204,23.1647],fullName:'惠州市',province:'广东'},
    '茂名':{center:[111.0059,22.0221],fullName:'茂名市',province:'广东'},
    '江门':{center:[112.6318,22.1484],fullName:'江门市',province:'广东'},
    '阳江':{center:[111.8298,22.0715],fullName:'阳江市',province:'广东'},
    '云浮':{center:[111.7859,22.8516],fullName:'云浮市',province:'广东'},
    '广州':{center:[113.5107,23.2196],fullName:'广州市',province:'广东'},
    '汕尾':{center:[115.5762,23.0438],fullName:'汕尾市',province:'广东'},
    '揭阳':{center:[116.1255,23.313],fullName:'揭阳市',province:'广东'},
    '珠海':{center:[113.7305,22.1155],fullName:'珠海市',province:'广东'},
    '佛山':{center:[112.8955,23.1097],fullName:'佛山市',province:'广东'},
    '潮州':{center:[116.7847,23.8293],fullName:'潮州市',province:'广东'},
    '汕头':{center:[117.1692,23.3405],fullName:'汕头市',province:'广东'},
    '深圳':{center:[114.5435,22.5439],fullName:'深圳市',province:'广东'},
    '东莞':{center:[113.8953,22.901],fullName:'东莞市',province:'广东'},
    '中山':{center:[113.4229,22.478],fullName:'中山市',province:'广东'},
    '延边':{center:[129.397,43.2587],fullName:'延边朝鲜族自治州',province:'吉林'},
    '吉林':{center:[126.8372,43.6047],fullName:'吉林市',province:'吉林'},
    '白城':{center:[123.0029,45.2637],fullName:'白城市',province:'吉林'},
    '松原':{center:[124.0906,44.7198],fullName:'松原市',province:'吉林'},
    '长春':{center:[125.8154,44.2584],fullName:'长春市',province:'吉林'},
    '白山':{center:[127.2217,42.0941],fullName:'白山市',province:'吉林'},
    '通化':{center:[125.9583,41.8579],fullName:'通化市',province:'吉林'},
    '四平':{center:[124.541,43.4894],fullName:'四平市',province:'吉林'},
    '辽源':{center:[125.343,42.7643],fullName:'辽源市',province:'吉林'},
    '承德':{center:[117.5757,41.4075],fullName:'承德市',province:'河北'},
    '张家口':{center:[115.1477,40.8527],fullName:'张家口市',province:'河北'},
    '保定':{center:[115.0488,39.0948],fullName:'保定市',province:'河北'},
    '唐山':{center:[118.4766,39.6826],fullName:'唐山市',province:'河北'},
    '沧州':{center:[116.8286,38.2104],fullName:'沧州市',province:'河北'},
    '石家':{center:[114.4995,38.1006],fullName:'石家庄市',province:'河北'},
    '邢台':{center:[114.8071,37.2821],fullName:'邢台市',province:'河北'},
    '邯郸':{center:[114.4775,36.535],fullName:'邯郸市',province:'河北'},
    '秦皇':{center:[119.2126,40.0232],fullName:'秦皇岛市',province:'河北'},
    '衡水':{center:[115.8838,37.7161],fullName:'衡水市',province:'河北'},
    '廊坊':{center:[116.521,39.0509],fullName:'廊坊市',province:'河北'},
    '恩施':{center:[109.5007,30.2563],fullName:'恩施土家族苗族自治州',province:'湖北'},
    '十堰':{center:[110.5115,32.3877],fullName:'十堰市',province:'湖北'},
    '宜昌':{center:[111.1707,30.7617],fullName:'宜昌市',province:'湖北'},
    '襄樊':{center:[111.9397,31.9263],fullName:'襄樊市',province:'湖北'},
    '黄冈':{center:[115.2686,30.6628],fullName:'黄冈市',province:'湖北'},
    '荆州':{center:[113.291,30.0092],fullName:'荆州市',province:'湖北'},
    '荆门':{center:[112.6758,30.9979],fullName:'荆门市',province:'湖北'},
    '咸宁':{center:[114.2578,29.6631],fullName:'咸宁市',province:'湖北'},
    '随州':{center:[113.4338,31.8768],fullName:'随州市',province:'湖北'},
    '孝感':{center:[113.9502,31.1188],fullName:'孝感市',province:'湖北'},
    '武汉':{center:[114.3896,30.6628],fullName:'武汉市',province:'湖北'},
    '黄石':{center:[115.0159,29.9213],fullName:'黄石市',province:'湖北'},
    '神农':{center:[110.4565,31.5802],fullName:'神农架林区',province:'湖北'},
    '天门':{center:[113.0273,30.6409],fullName:'天门市',province:'湖北'},
    '仙桃':{center:[113.3789,30.3003],fullName:'仙桃市',province:'湖北'},
    '潜江':{center:[112.7637,30.3607],fullName:'潜江市',province:'湖北'},
    '鄂州':{center:[114.7302,30.4102],fullName:'鄂州市',province:'湖北'},
    '遵义':{center:[106.908,28.1744],fullName:'遵义市',province:'贵州'},
    '黔东':{center:[108.4241,26.4166],fullName:'黔东南苗族侗族自治州',province:'贵州'},
    '毕节':{center:[105.1611,27.0648],fullName:'毕节地区',province:'贵州'},
    '黔南':{center:[107.2485,25.8398],fullName:'黔南布依族苗族自治州',province:'贵州'},
    '铜仁':{center:[108.6218,28.0096],fullName:'铜仁地区',province:'贵州'},
    '黔西':{center:[105.5347,25.3949],fullName:'黔西南布依族苗族自治州',province:'贵州'},
    '六盘':{center:[104.7546,26.0925],fullName:'六盘水市',province:'贵州'},
    '安顺':{center:[105.9082,25.9882],fullName:'安顺市',province:'贵州'},
    '贵阳':{center:[106.6992,26.7682],fullName:'贵阳市',province:'贵州'},
    '烟台':{center:[120.7397,37.5128],fullName:'烟台市',province:'山东'},
    '临沂':{center:[118.3118,35.2936],fullName:'临沂市',province:'山东'},
    '潍坊':{center:[119.0918,36.524],fullName:'潍坊市',province:'山东'},
    '青岛':{center:[120.4651,36.3373],fullName:'青岛市',province:'山东'},
    '菏泽':{center:[115.6201,35.2057],fullName:'菏泽市',province:'山东'},
    '济宁':{center:[116.8286,35.3375],fullName:'济宁市',province:'山东'},
    '德州':{center:[116.6858,37.2107],fullName:'德州市',province:'山东'},
    '滨州':{center:[117.8174,37.4963],fullName:'滨州市',province:'山东'},
    '聊城':{center:[115.9167,36.4032],fullName:'聊城市',province:'山东'},
    '东营':{center:[118.7073,37.5513],fullName:'东营市',province:'山东'},
    '济南':{center:[117.1582,36.8701],fullName:'济南市',province:'山东'},
    '泰安':{center:[117.0264,36.0516],fullName:'泰安市',province:'山东'},
    '威海':{center:[121.9482,37.1393],fullName:'威海市',province:'山东'},
    '日照':{center:[119.2786,35.5023],fullName:'日照市',province:'山东'},
    '淄博':{center:[118.0371,36.6064],fullName:'淄博市',province:'山东'},
    '枣庄':{center:[117.323,34.8926],fullName:'枣庄市',province:'山东'},
    '莱芜':{center:[117.6526,36.2714],fullName:'莱芜市',province:'山东'},
    '赣州':{center:[115.2795,25.8124],fullName:'赣州市',province:'江西'},
    '吉安':{center:[114.884,26.9659],fullName:'吉安市',province:'江西'},
    '上饶':{center:[117.8613,28.7292],fullName:'上饶市',province:'江西'},
    '九江':{center:[115.4224,29.3774],fullName:'九江市',province:'江西'},
    '抚州':{center:[116.4441,27.4933],fullName:'抚州市',province:'江西'},
    '宜春':{center:[115.0159,28.3228],fullName:'宜春市',province:'江西'},
    '南昌':{center:[116.0046,28.6633],fullName:'南昌市',province:'江西'},
    '景德':{center:[117.334,29.3225],fullName:'景德镇市',province:'江西'},
    '萍乡':{center:[113.9282,27.4823],fullName:'萍乡市',province:'江西'},
    '鹰潭':{center:[117.0813,28.2349],fullName:'鹰潭市',province:'江西'},
    '新余':{center:[114.95,27.8174],fullName:'新余市',province:'江西'},
    '南阳':{center:[112.4011,33.0359],fullName:'南阳市',province:'河南'},
    '信阳':{center:[114.8291,32.0197],fullName:'信阳市',province:'河南'},
    '洛阳':{center:[112.0605,34.3158],fullName:'洛阳市',province:'河南'},
    '驻马':{center:[114.1589,32.9041],fullName:'驻马店市',province:'河南'},
    '周口':{center:[114.873,33.6951],fullName:'周口市',province:'河南'},
    '商丘':{center:[115.741,34.2828],fullName:'商丘市',province:'河南'},
    '三门':{center:[110.8301,34.3158],fullName:'三门峡市',province:'河南'},
    '新乡':{center:[114.2029,35.3595],fullName:'新乡市',province:'河南'},
    '平顶':{center:[112.9724,33.739],fullName:'平顶山市',province:'河南'},
    '郑州':{center:[113.4668,34.6234],fullName:'郑州市',province:'河南'},
    '安阳':{center:[114.5325,36.0022],fullName:'安阳市',province:'河南'},
    '开封':{center:[114.5764,34.6124],fullName:'开封市',province:'河南'},
    '焦作':{center:[112.8406,35.1508],fullName:'焦作市',province:'河南'},
    '许昌':{center:[113.6975,34.0466],fullName:'许昌市',province:'河南'},
    '濮阳':{center:[115.1917,35.799],fullName:'濮阳市',province:'河南'},
    '漯河':{center:[113.8733,33.6951],fullName:'漯河市',province:'河南'},
    '鹤壁':{center:[114.3787,35.744],fullName:'鹤壁市',province:'河南'},
    '大连':{center:[122.2229,39.4409],fullName:'大连市',province:'辽宁'},
    '朝阳':{center:[120.0696,41.4899],fullName:'朝阳市',province:'辽宁'},
    '丹东':{center:[124.541,40.4242],fullName:'丹东市',province:'辽宁'},
    '铁岭':{center:[124.2773,42.7423],fullName:'铁岭市',province:'辽宁'},
    '沈阳':{center:[123.1238,42.1216],fullName:'沈阳市',province:'辽宁'},
    '抚顺':{center:[124.585,41.8579],fullName:'抚顺市',province:'辽宁'},
    '葫芦':{center:[120.1575,40.578],fullName:'葫芦岛市',province:'辽宁'},
    '阜新':{center:[122.0032,42.2699],fullName:'阜新市',province:'辽宁'},
    '锦州':{center:[121.6626,41.4294],fullName:'锦州市',province:'辽宁'},
    '鞍山':{center:[123.0798,40.6055],fullName:'鞍山市',province:'辽宁'},
    '本溪':{center:[124.1455,41.1987],fullName:'本溪市',province:'辽宁'},
    '营口':{center:[122.4316,40.4297],fullName:'营口市',province:'辽宁'},
    '辽阳':{center:[123.4094,41.1383],fullName:'辽阳市',province:'辽宁'},
    '盘锦':{center:[121.9482,41.0449],fullName:'盘锦市',province:'辽宁'},
    '忻州':{center:[112.4561,38.8971],fullName:'忻州市',province:'山西'},
    '吕梁':{center:[111.3574,37.7325],fullName:'吕梁市',province:'山西'},
    '临汾':{center:[111.4783,36.1615],fullName:'临汾市',province:'山西'},
    '晋中':{center:[112.7747,37.37],fullName:'晋中市',province:'山西'},
    '运城':{center:[111.1487,35.2002],fullName:'运城市',province:'山西'},
    '大同':{center:[113.7854,39.8035],fullName:'大同市',province:'山西'},
    '长治':{center:[112.8625,36.4746],fullName:'长治市',province:'山西'},
    '朔州':{center:[113.0713,39.6991],fullName:'朔州市',province:'山西'},
    '晋城':{center:[112.7856,35.6342],fullName:'晋城市',province:'山西'},
    '太原':{center:[112.3352,37.9413],fullName:'太原市',province:'山西'},
    '阳泉':{center:[113.4778,38.0951],fullName:'阳泉市',province:'山西'},
    '六安':{center:[116.3123,31.8329],fullName:'六安市',province:'安徽'},
    '安庆':{center:[116.7517,30.5255],fullName:'安庆市',province:'安徽'},
    '滁州':{center:[118.1909,32.536],fullName:'滁州市',province:'安徽'},
    '宣城':{center:[118.8062,30.6244],fullName:'宣城市',province:'安徽'},
    '阜阳':{center:[115.7629,32.9919],fullName:'阜阳市',province:'安徽'},
    '宿州':{center:[117.5208,33.6841],fullName:'宿州市',province:'安徽'},
    '黄山':{center:[118.0481,29.9542],fullName:'黄山市',province:'安徽'},
    '巢湖':{center:[117.7734,31.4978],fullName:'巢湖市',province:'安徽'},
    '亳州':{center:[116.1914,33.4698],fullName:'亳州市',province:'安徽'},
    '池州':{center:[117.3889,30.2014],fullName:'池州市',province:'安徽'},
    '合肥':{center:[117.29,32.0581],fullName:'合肥市',province:'安徽'},
    '蚌埠':{center:[117.4109,33.1073],fullName:'蚌埠市',province:'安徽'},
    '芜湖':{center:[118.3557,31.0858],fullName:'芜湖市',province:'安徽'},
    '淮北':{center:[116.6968,33.6896],fullName:'淮北市',province:'安徽'},
    '淮南':{center:[116.7847,32.7722],fullName:'淮南市',province:'安徽'},
    '马鞍':{center:[118.6304,31.5363],fullName:'马鞍山市',province:'安徽'},
    '铜陵':{center:[117.9382,30.9375],fullName:'铜陵市',province:'安徽'},
    '南平':{center:[118.136,27.2845],fullName:'南平市',province:'福建'},
    '三明':{center:[117.5317,26.3013],fullName:'三明市',province:'福建'},
    '龙岩':{center:[116.8066,25.2026],fullName:'龙岩市',province:'福建'},
    '宁德':{center:[119.6521,26.9824],fullName:'宁德市',province:'福建'},
    '福州':{center:[119.4543,25.9222],fullName:'福州市',province:'福建'},
    '漳州':{center:[117.5757,24.3732],fullName:'漳州市',province:'福建'},
    '泉州':{center:[118.3228,25.1147],fullName:'泉州市',province:'福建'},
    '莆田':{center:[119.0918,25.3455],fullName:'莆田市',province:'福建'},
    '厦门':{center:[118.1689,24.6478],fullName:'厦门市',province:'福建'},
    '丽水':{center:[119.5642,28.1854],fullName:'丽水市',province:'浙江'},
    '杭州':{center:[119.5313,29.8773],fullName:'杭州市',province:'浙江'},
    '温州':{center:[120.498,27.8119],fullName:'温州市',province:'浙江'},
    '宁波':{center:[121.5967,29.6466],fullName:'宁波市',province:'浙江'},
    '舟山':{center:[122.2559,30.2234],fullName:'舟山市',province:'浙江'},
    '台州':{center:[121.1353,28.6688],fullName:'台州市',province:'浙江'},
    '金华':{center:[120.0037,29.1028],fullName:'金华市',province:'浙江'},
    '衢州':{center:[118.6853,28.8666],fullName:'衢州市',province:'浙江'},
    '绍兴':{center:[120.564,29.7565],fullName:'绍兴市',province:'浙江'},
    '嘉兴':{center:[120.9155,30.6354],fullName:'嘉兴市',province:'浙江'},
    '湖州':{center:[119.8608,30.7782],fullName:'湖州市',province:'浙江'},
    '盐城':{center:[120.2234,33.5577],fullName:'盐城市',province:'江苏'},
    '徐州':{center:[117.5208,34.3268],fullName:'徐州市',province:'江苏'},
    '南通':{center:[121.1023,32.1625],fullName:'南通市',province:'江苏'},
    '淮安':{center:[118.927,33.4039],fullName:'淮安市',province:'江苏'},
    '苏州':{center:[120.6519,31.3989],fullName:'苏州市',province:'江苏'},
    '宿迁':{center:[118.5535,33.7775],fullName:'宿迁市',province:'江苏'},
    '连云':{center:[119.1248,34.552],fullName:'连云港市',province:'江苏'},
    '扬州':{center:[119.4653,32.8162],fullName:'扬州市',province:'江苏'},
    '南京':{center:[118.8062,31.9208],fullName:'南京市',province:'江苏'},
    '泰州':{center:[120.0586,32.5525],fullName:'泰州市',province:'江苏'},
    '无锡':{center:[120.3442,31.5527],fullName:'无锡市',province:'江苏'},
    '常州':{center:[119.4543,31.5582],fullName:'常州市',province:'江苏'},
    '镇江':{center:[119.4763,31.9702],fullName:'镇江市',province:'江苏'},
    '吴忠':{center:[106.853,37.3755],fullName:'吴忠市',province:'宁夏'},
    '中卫':{center:[105.4028,36.9525],fullName:'中卫市',province:'宁夏'},
    '固原':{center:[106.1389,35.9363],fullName:'固原市',province:'宁夏'},
    '银川':{center:[106.3586,38.1775],fullName:'银川市',province:'宁夏'},
    '石嘴':{center:[106.4795,39.0015],fullName:'石嘴山市',province:'宁夏'},
    '儋州':{center:[109.3291,19.5653],fullName:'儋州市',province:'海南'},
    '文昌':{center:[110.8905,19.7823],fullName:'文昌市',province:'海南'},
    '乐东':{center:[109.0283,18.6301],fullName:'乐东黎族自治县',province:'海南'},
    '三亚':{center:[109.3716,18.3698],fullName:'三亚市',province:'海南'},
    '琼中':{center:[109.8413,19.0736],fullName:'琼中黎族苗族自治县',province:'海南'},
    '东方':{center:[108.8498,19.0414],fullName:'东方市',province:'海南'},
    '海口':{center:[110.3893,19.8516],fullName:'海口市',province:'海南'},
    '万宁':{center:[110.3137,18.8388],fullName:'万宁市',province:'海南'},
    '澄迈':{center:[109.9937,19.7314],fullName:'澄迈县',province:'海南'},
    '白沙':{center:[109.3703,19.211],fullName:'白沙黎族自治县',province:'海南'},
    '琼海':{center:[110.4208,19.224],fullName:'琼海市',province:'海南'},
    '昌江':{center:[109.0407,19.2137],fullName:'昌江黎族自治县',province:'海南'},
    '临高':{center:[109.6957,19.8063],fullName:'临高县',province:'海南'},
    '陵水':{center:[109.9924,18.5415],fullName:'陵水黎族自治县',province:'海南'},
    '屯昌':{center:[110.0377,19.362],fullName:'屯昌县',province:'海南'},
    '定安':{center:[110.3384,19.4698],fullName:'定安县',province:'海南'},
    '保亭':{center:[109.6284,18.6108],fullName:'保亭黎族苗族自治县',province:'海南'},
    '五指':{center:[109.5282,18.8299],fullName:'五指山市',province:'海南'}
  }
};

module.exports = chinaData;