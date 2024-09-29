// List of words with tone pairs (same as before)
const wordSet = [
  // 1,1 Tones
  { "tones": "1,1", "word": "中心", "pinyin": "zhōng xīn", "pinyin_no_tones": "zhong xin", "hsk": "1" },
  { "tones": "1,1", "word": "飞机", "pinyin": "fēijī", "pinyin_no_tones": "fei ji", "hsk": "1" },
  { "tones": "1,1", "word": "分钟", "pinyin": "fēnzhōng", "pinyin_no_tones": "fen zhong", "hsk": "1" },
  { "tones": "1,1", "word": "今天", "pinyin": "jīntiān", "pinyin_no_tones": "jin tian", "hsk": "1" },
  { "tones": "1,1", "word": "星期", "pinyin": "xīngqī", "pinyin_no_tones": "xing qi", "hsk": "1" },
  { "tones": "1,1", "word": "医生", "pinyin": "yīshēng", "pinyin_no_tones": "yi sheng", "hsk": "1" },

  // 1,2 Tones
  { "tones": "1,2", "word": "中文", "pinyin": "zhōng wén", "pinyin_no_tones": "zhong wen", "hsk": "1" },
  { "tones": "1,2", "word": "中国", "pinyin": "zhōngguó", "pinyin_no_tones": "zhong guo", "hsk": "1" },
  { "tones": "1,2", "word": "非常", "pinyin": "fēicháng", "pinyin_no_tones": "fei chang", "hsk": "2" },
  { "tones": "1,2", "word": "虽然", "pinyin": "suīrán", "pinyin_no_tones": "sui ran", "hsk": "2" },

  // 1,3 Tones
  { "tones": "1,3", "word": "分享", "pinyin": "fēn xiǎng", "pinyin_no_tones": "fen xiang", "hsk": "1" },
  { "tones": "1,3", "word": "中午", "pinyin": "zhōngwǔ", "pinyin_no_tones": "zhong wu", "hsk": "1" },
  { "tones": "1,3", "word": "宾馆", "pinyin": "bīnguǎn", "pinyin_no_tones": "bin guan", "hsk": "2" },
  { "tones": "1,3", "word": "机场", "pinyin": "jīchǎng", "pinyin_no_tones": "ji chang", "hsk": "2" },
  { "tones": "1,3", "word": "开始", "pinyin": "kāishǐ", "pinyin_no_tones": "kai shi", "hsk": "2" },
  { "tones": "1,3", "word": "铅笔", "pinyin": "qiānbǐ", "pinyin_no_tones": "qian bi", "hsk": "2" },
  { "tones": "1,3", "word": "身体", "pinyin": "shēntǐ", "pinyin_no_tones": "shen ti", "hsk": "2" },

  // 1,4 Tones
  { "tones": "1,4", "word": "发现", "pinyin": "fā xiàn", "pinyin_no_tones": "fa xian", "hsk": "1" },
  { "tones": "1,4", "word": "高兴", "pinyin": "gāoxìng", "pinyin_no_tones": "gao xing", "hsk": "1" },
  { "tones": "1,4", "word": "工作", "pinyin": "gōngzuò", "pinyin_no_tones": "gong zuo", "hsk": "1" },
  { "tones": "1,4", "word": "商店", "pinyin": "shāngdiàn", "pinyin_no_tones": "shang dian", "hsk": "1" },
  { "tones": "1,4", "word": "天气", "pinyin": "tiānqì", "pinyin_no_tones": "tian qi", "hsk": "1" },
  { "tones": "1,4", "word": "医院", "pinyin": "yīyuàn", "pinyin_no_tones": "yi yuan", "hsk": "1" },
  { "tones": "1,4", "word": "帮助", "pinyin": "bāngzhù", "pinyin_no_tones": "bang zhu", "hsk": "2" },
  { "tones": "1,4", "word": "鸡蛋", "pinyin": "jīdàn", "pinyin_no_tones": "ji dan", "hsk": "2" },
  { "tones": "1,4", "word": "生病", "pinyin": "shēngbìng", "pinyin_no_tones": "sheng bing", "hsk": "2" },
  { "tones": "1,4", "word": "生日", "pinyin": "shēngrì", "pinyin_no_tones": "sheng ri", "hsk": "2" },
  { "tones": "1,4", "word": "说话", "pinyin": "shuōhuà", "pinyin_no_tones": "shuo hua", "hsk": "2" },
  { "tones": "1,4", "word": "希望", "pinyin": "xīwàng", "pinyin_no_tones": "xi wang", "hsk": "2" },
  { "tones": "1,4", "word": "因为", "pinyin": "yīnwèi", "pinyin_no_tones": "yin wei", "hsk": "2" },

  // 1,neutral Tones
  { "tones": "1,neutral", "word": "休息", "pinyin": "xiūxi", "pinyin_no_tones": "xiu xi", "hsk": "1" },
  { "tones": "1,neutral", "word": "杯子", "pinyin": "bēizi", "pinyin_no_tones": "bei zi", "hsk": "1" },
  { "tones": "1,neutral", "word": "东西", "pinyin": "dōngxi", "pinyin_no_tones": "dong xi", "hsk": "1" },
  { "tones": "1,neutral", "word": "多少", "pinyin": "duōshao", "pinyin_no_tones": "duo shao", "hsk": "1" },
  { "tones": "1,neutral", "word": "妈妈", "pinyin": "māma", "pinyin_no_tones": "ma ma", "hsk": "1" },
  { "tones": "1,neutral", "word": "先生", "pinyin": "xiānsheng", "pinyin_no_tones": "xian sheng", "hsk": "1" },
  { "tones": "1,neutral", "word": "衣服", "pinyin": "yīfu", "pinyin_no_tones": "yi fu", "hsk": "1" },
  { "tones": "1,neutral", "word": "桌子", "pinyin": "zhuōzi", "pinyin_no_tones": "zhuo zi", "hsk": "1" },
  { "tones": "1,neutral", "word": "哥哥", "pinyin": "gēge", "pinyin_no_tones": "ge ge", "hsk": "2" },
  { "tones": "1,neutral", "word": "妻子", "pinyin": "qīzi", "pinyin_no_tones": "qi zi", "hsk": "2" },
  { "tones": "1,neutral", "word": "休息", "pinyin": "xiūxi", "pinyin_no_tones": "xiu xi", "hsk": "2" },
  { "tones": "1,neutral", "word": "知道", "pinyin": "zhīdao", "pinyin_no_tones": "zhi dao", "hsk": "2" },

  // 2,1 Tones
  { "tones": "2,1", "word": "原因", "pinyin": "yuán yīn", "pinyin_no_tones": "yuan yin", "hsk": "2" },
  { "tones": "2,1", "word": "明天", "pinyin": "míngtiān", "pinyin_no_tones": "ming tian", "hsk": "1" },
  { "tones": "2,1", "word": "昨天", "pinyin": "zuótiān", "pinyin_no_tones": "zuo tian", "hsk": "1" },
  { "tones": "2,1", "word": "房间", "pinyin": "fángjiān", "pinyin_no_tones": "fang jian", "hsk": "2" },
  { "tones": "2,1", "word": "旁边", "pinyin": "pángbiān", "pinyin_no_tones": "pang bian", "hsk": "2" },
  { "tones": "2,1", "word": "时间", "pinyin": "shíjiān", "pinyin_no_tones": "shi jian", "hsk": "2" },

  // 2,2 Tones
  { "tones": "2,2", "word": "同学", "pinyin": "tóngxué", "pinyin_no_tones": "tong xue", "hsk": "1" },
  { "tones": "2,2", "word": "学习", "pinyin": "xuéxí", "pinyin_no_tones": "xue xi", "hsk": "1" },
  { "tones": "2,2", "word": "回答", "pinyin": "huídá", "pinyin_no_tones": "hui da", "hsk": "3" },

  // 2,3 Tones
  { "tones": "2,3", "word": "没有", "pinyin": "méiyǒu", "pinyin_no_tones": "mei you", "hsk": "1" },
  { "tones": "2,3", "word": "苹果", "pinyin": "píngguǒ", "pinyin_no_tones": "ping guo", "hsk": "1" },
  { "tones": "2,3", "word": "牛奶", "pinyin": "niúnǎi", "pinyin_no_tones": "niu nai", "hsk": "2" },
  { "tones": "2,3", "word": "游泳", "pinyin": "yóuyǒng", "pinyin_no_tones": "you yong", "hsk": "2" },

  // 2,4 Tones
  { "tones": "2,4", "word": "前面", "pinyin": "qiánmiàn", "pinyin_no_tones": "qian mian", "hsk": "1" },
  { "tones": "2,4", "word": "学校", "pinyin": "xuéxiào", "pinyin_no_tones": "xue xiao", "hsk": "1" },
  { "tones": "2,4", "word": "颜色", "pinyin": "yánsè", "pinyin_no_tones": "yan se", "hsk": "2" },
  { "tones": "2,4", "word": "羊肉", "pinyin": "yángròu", "pinyin_no_tones": "yang rou", "hsk": "2" },
  { "tones": "2,4", "word": "一下", "pinyin": "yíxià", "pinyin_no_tones": "yi xia", "hsk": "2" },

  // 2,neutral Tones
  { "tones": "2,neutral", "word": "儿子", "pinyin": "érzi", "pinyin_no_tones": "er zi", "hsk": "1" },
  { "tones": "2,neutral", "word": "名字", "pinyin": "míngzi", "pinyin_no_tones": "ming zi", "hsk": "1" },
  { "tones": "2,neutral", "word": "朋友", "pinyin": "péngyou", "pinyin_no_tones": "peng you", "hsk": "1" },
  { "tones": "2,neutral", "word": "什么", "pinyin": "shénme", "pinyin_no_tones": "shen me", "hsk": "1" },
  { "tones": "2,neutral", "word": "时候", "pinyin": "shíhou", "pinyin_no_tones": "shi hou", "hsk": "1" },
  { "tones": "2,neutral", "word": "学生", "pinyin": "xuésheng", "pinyin_no_tones": "xue sheng", "hsk": "1" },
  { "tones": "2,neutral", "word": "孩子", "pinyin": "háizi", "pinyin_no_tones": "hai zi", "hsk": "2" },
  { "tones": "2,neutral", "word": "觉得", "pinyin": "juéde", "pinyin_no_tones": "jue de", "hsk": "2" },
  { "tones": "2,neutral", "word": "便宜", "pinyin": "piányi", "pinyin_no_tones": "pian yi", "hsk": "2" },

  // 3,1 Tones
  { "tones": "3,1", "word": "北京", "pinyin": "běijīng", "pinyin_no_tones": "bei jing", "hsk": "1" },
  { "tones": "3,1", "word": "老师", "pinyin": "lǎoshī", "pinyin_no_tones": "lao shi", "hsk": "1" },
  { "tones": "3,1", "word": "好吃", "pinyin": "hǎochī", "pinyin_no_tones": "hao chi", "hsk": "2" },
  { "tones": "3,1", "word": "手机", "pinyin": "shǒujī", "pinyin_no_tones": "shou ji", "hsk": "2" },

  // 3,2 Tones
  { "tones": "3,2", "word": "女儿", "pinyin": "nǚ’ér", "pinyin_no_tones": "nü er", "hsk": "1" },
  { "tones": "3,2", "word": "可能", "pinyin": "kěnéng", "pinyin_no_tones": "ke neng", "hsk": "2" },
  { "tones": "3,2", "word": "旅游", "pinyin": "lǚyóu", "pinyin_no_tones": "lü you", "hsk": "2" },
  { "tones": "3,2", "word": "起床", "pinyin": "qǐ chuáng", "pinyin_no_tones": "qi chuang", "hsk": "2" },
  { "tones": "3,2", "word": "小时", "pinyin": "xiǎoshí", "pinyin_no_tones": "xiao shi", "hsk": "2" },

  // 3,3 Tones
  { "tones": "3,3", "word": "水果", "pinyin": "shuǐguǒ", "pinyin_no_tones": "shui guo", "hsk": "1" },
  { "tones": "3,3", "word": "可以", "pinyin": "kěyǐ", "pinyin_no_tones": "ke yi", "hsk": "2" },
  { "tones": "3,3", "word": "手表", "pinyin": "shǒubiǎo", "pinyin_no_tones": "shou biao", "hsk": "2" },
  { "tones": "3,3", "word": "所以", "pinyin": "suǒyǐ", "pinyin_no_tones": "suo yi", "hsk": "2" },

  // 3,4 Tones
  { "tones": "3,4", "word": "米饭", "pinyin": "mǐfàn", "pinyin_no_tones": "mi fan", "hsk": "1" },
  { "tones": "3,4", "word": "考试", "pinyin": "kǎoshì", "pinyin_no_tones": "kao shi", "hsk": "2" },
  { "tones": "3,4", "word": "跑步", "pinyin": "pǎobù", "pinyin_no_tones": "pao bu", "hsk": "2" },
  { "tones": "3,4", "word": "准备", "pinyin": "zhǔnbèi", "pinyin_no_tones": "zhun bei", "hsk": "2" },

  // 3,neutral Tones
  { "tones": "3,neutral", "word": "我们", "pinyin": "wǒmen", "pinyin_no_tones": "wo men", "hsk": "1" },
  { "tones": "3,neutral", "word": "喜欢", "pinyin": "xǐhuan", "pinyin_no_tones": "xi huan", "hsk": "1" },
  { "tones": "3,neutral", "word": "小姐", "pinyin": "xiǎojie", "pinyin_no_tones": "xiao jie", "hsk": "1" },
  { "tones": "3,neutral", "word": "椅子", "pinyin": "yǐzi", "pinyin_no_tones": "yi zi", "hsk": "1" },
  { "tones": "3,neutral", "word": "怎么", "pinyin": "zěnme", "pinyin_no_tones": "zen me", "hsk": "1" },
  { "tones": "3,neutral", "word": "姐姐", "pinyin": "jiějie", "pinyin_no_tones": "jie jie", "hsk": "2" },
  { "tones": "3,neutral", "word": "晚上", "pinyin": "wǎnshang", "pinyin_no_tones": "wan shang", "hsk": "2" },
  { "tones": "3,neutral", "word": "眼睛", "pinyin": "yǎnjing", "pinyin_no_tones": "yan jing", "hsk": "2" },
  { "tones": "3,neutral", "word": "已经", "pinyin": "yǐjing", "pinyin_no_tones": "yi jing", "hsk": "2" },
  { "tones": "3,neutral", "word": "早上", "pinyin": "zǎoshang", "pinyin_no_tones": "zao shang", "hsk": "2" },
  { "tones": "3,neutral", "word": "左边", "pinyin": "zuǒbian", "pinyin_no_tones": "zuo bian", "hsk": "2" },

  // 4,1 Tones
  { "tones": "4,1", "word": "唱歌", "pinyin": "chànggē", "pinyin_no_tones": "chang ge", "hsk": "2" },
  { "tones": "4,1", "word": "大家", "pinyin": "dàjiā", "pinyin_no_tones": "da jia", "hsk": "2" },
  { "tones": "4,1", "word": "第一", "pinyin": "dìyī", "pinyin_no_tones": "di yi", "hsk": "2" },
  { "tones": "4,1", "word": "上班", "pinyin": "shàngbān", "pinyin_no_tones": "shang ban", "hsk": "2" },

  // 4,2 Tones
  { "tones": "4,2", "word": "面条", "pinyin": "miàntiáo", "pinyin_no_tones": "mian tiao", "hsk": "2" },
  { "tones": "4,2", "word": "去年", "pinyin": "qùnián", "pinyin_no_tones": "qu nian", "hsk": "2" },
  { "tones": "4,2", "word": "问题", "pinyin": "wèntí", "pinyin_no_tones": "wen ti", "hsk": "2" },

  // 4,3 Tones
  { "tones": "4,3", "word": "电脑", "pinyin": "diànnǎo", "pinyin_no_tones": "dian nao", "hsk": "1" },
  { "tones": "4,3", "word": "电影", "pinyin": "diànyǐng", "pinyin_no_tones": "dian ying", "hsk": "1" },
  { "tones": "4,3", "word": "汉语", "pinyin": "hànyǔ", "pinyin_no_tones": "han yu", "hsk": "1" },
  { "tones": "4,3", "word": "上午", "pinyin": "shàngwǔ", "pinyin_no_tones": "shang wu", "hsk": "1" },
  { "tones": "4,3", "word": "下午", "pinyin": "xiàwǔ", "pinyin_no_tones": "xia wu", "hsk": "1" },
  { "tones": "4,3", "word": "下雨", "pinyin": "xiàyǔ", "pinyin_no_tones": "xia yu", "hsk": "1" },
  { "tones": "4,3", "word": "一点儿", "pinyin": "yìdiǎnr", "pinyin_no_tones": "yi dian r", "hsk": "1" },
  { "tones": "4,3", "word": "报纸", "pinyin": "bàozhǐ", "pinyin_no_tones": "bao zhi", "hsk": "2" },
  { "tones": "4,3", "word": "跳舞", "pinyin": "tiàowǔ", "pinyin_no_tones": "tiao wu", "hsk": "2" },
  { "tones": "4,3", "word": "一起", "pinyin": "yìqǐ", "pinyin_no_tones": "yi qi", "hsk": "2" },

  // 4,4 Tones
  { "tones": "4,4", "word": "电视", "pinyin": "diànshì", "pinyin_no_tones": "dian shi", "hsk": "1" },
  { "tones": "4,4", "word": "饭店", "pinyin": "fàndiàn", "pinyin_no_tones": "fan dian", "hsk": "1" },
  { "tones": "4,4", "word": "看见", "pinyin": "kànjiàn", "pinyin_no_tones": "kan jian", "hsk": "1" },
  { "tones": "4,4", "word": "睡觉", "pinyin": "shuìjiào", "pinyin_no_tones": "shui jiao", "hsk": "1" },
  { "tones": "4,4", "word": "现在", "pinyin": "xiànzài", "pinyin_no_tones": "xian zai", "hsk": "1" },
  { "tones": "4,4", "word": "再见", "pinyin": "zàijiàn", "pinyin_no_tones": "zai jian", "hsk": "1" },
  { "tones": "4,4", "word": "但是", "pinyin": "dànshì", "pinyin_no_tones": "dan shi", "hsk": "2" },
  { "tones": "4,4", "word": "教室", "pinyin": "jiàoshì", "pinyin_no_tones": "jiao shi", "hsk": "2" },
  { "tones": "4,4", "word": "介绍", "pinyin": "jièshào", "pinyin_no_tones": "jie shao", "hsk": "2" },
  { "tones": "4,4", "word": "快乐", "pinyin": "kuàilè", "pinyin_no_tones": "kuai le", "hsk": "2" },
  { "tones": "4,4", "word": "运动", "pinyin": "yùndòng", "pinyin_no_tones": "yun dong", "hsk": "2" },
  { "tones": "4,4", "word": "正在", "pinyin": "zhèngzài", "pinyin_no_tones": "zheng zai", "hsk": "2" },

  // 4,neutral Tones
  { "tones": "4,neutral", "word": "爸爸", "pinyin": "bàba", "pinyin_no_tones": "ba ba", "hsk": "1" },
  { "tones": "4,neutral", "word": "后面", "pinyin": "hòumian", "pinyin_no_tones": "hou mian", "hsk": "1" },
  { "tones": "4,neutral", "word": "漂亮", "pinyin": "piàoliang", "pinyin_no_tones": "piao liang", "hsk": "1" },
  { "tones": "4,neutral", "word": "认识", "pinyin": "rènshi", "pinyin_no_tones": "ren shi", "hsk": "1" },
  { "tones": "4,neutral", "word": "谢谢", "pinyin": "xièxie", "pinyin_no_tones": "xie xie", "hsk": "1" },
  { "tones": "4,neutral", "word": "弟弟", "pinyin": "dìdi", "pinyin_no_tones": "di di", "hsk": "2" },
  { "tones": "4,neutral", "word": "告诉", "pinyin": "gàosu", "pinyin_no_tones": "gao su", "hsk": "2" },
  { "tones": "4,neutral", "word": "妹妹", "pinyin": "mèimei", "pinyin_no_tones": "mei mei", "hsk": "2" },
  { "tones": "4,neutral", "word": "事情", "pinyin": "shìqing", "pinyin_no_tones": "shi qing", "hsk": "2" },
  { "tones": "4,neutral", "word": "意思", "pinyin": "yìsi", "pinyin_no_tones": "yi si", "hsk": "2" },
  { "tones": "4,neutral", "word": "右边", "pinyin": "yòubian", "pinyin_no_tones": "you bian", "hsk": "2" },
  { "tones": "4,neutral", "word": "丈夫", "pinyin": "zhàngfu", "pinyin_no_tones": "zhang fu", "hsk": "2" },
];

// Possible tone pairs for rendering the table
const initialTones = ["1", "2", "3", "4"];
const finalTones = ["1", "2", "3", "4", "neutral"];

// Stats data structure to store tries and successes
let stats = {};

let selectedWord; // The current word to guess
let isAnswerSelected = false; // Track if an answer has been selected

function saveStatsToLocalStorage() {
  localStorage.setItem('tonePairStats', JSON.stringify(stats));
}

function loadStatsFromLocalStorage() {
  const storedStats = localStorage.getItem('tonePairStats');
  if (storedStats) {
    stats = JSON.parse(storedStats);
  } else {
    initializeStats(); // If no stats are stored, initialize a new stats object
  }
}

// Initialize the stats object for each tone pair
function initializeStats() {
  initialTones.forEach(initialTone => {
    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      stats[tonePair] = {
        tries: 0,
        success: 0,
        failures: 0
      };
    });
  });
}

function calculateGradientColor(percentage) {
  const hue = (120 * percentage) / 100; // 0 is red, 120 is green in HSL
  return `hsl(${hue}, 70%, 80%)`; // Light color with 70% saturation and 80% lightness
}

// Function to randomly select a word
function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordSet.length);
  selectedWord = wordSet[randomIndex];

  // Display the selected word and pinyin (without tones)
  document.getElementById('selected-word').innerText = `Word: ${selectedWord.word}`;
  document.getElementById('selected-pinyin').innerText = `Pinyin: ${selectedWord.pinyin_no_tones}`;
  
  // Enable tone selection buttons and disable the "Next Word" button
  enableToneSelection();
  document.getElementById('next-word-btn').disabled = true;

  // Clear the result message
  const resultMsg = document.getElementById('result-msg');
  resultMsg.classList.add('d-none');
  resultMsg.innerText = '';

  // Reset answer tracking
  isAnswerSelected = false;
}

function playAudio() {
  const audioPath = `tone_pairs/${selectedWord.word}.mp3`;
  const audio = new Audio(audioPath);
  audio.play();
}

// Function to render tone pair options in a table
function renderToneOptions() {
  const tableBody = document.getElementById('tone-table');
  tableBody.innerHTML = ''; // Clear previous options

  initialTones.forEach(initialTone => {
    const row = document.createElement('tr');
    
    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      const cell = document.createElement('td');
      cell.innerText = tonePair;
      cell.classList.add('table-cell');
      cell.onclick = () => checkAnswer(tonePair);
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

function checkAnswer(selectedTone) {
  if (isAnswerSelected) return; // Prevent further answers

  const resultMsg = document.getElementById('result-msg');
  
  // Update stats
  const data = stats[selectedTone];
  data.tries += 1;
  if (selectedTone === selectedWord.tones) {
    data.success += 1;
    resultMsg.className = 'alert alert-success';
    resultMsg.innerText = 'Correct! You guessed the right tone pair!';
  } else {
    resultMsg.className = 'alert alert-danger';
    resultMsg.innerText = `Wrong! The correct tone pair was ${selectedWord.tones}. Pinyin: ${selectedWord.pinyin}`;
  }

  resultMsg.classList.remove('d-none');
  
  // Disable further answers and enable "Next Word" button
  isAnswerSelected = true;
  disableToneSelection();
  document.getElementById('next-word-btn').disabled = false;

  // Save stats to localStorage
  saveStatsToLocalStorage();

  // Re-render stats table after each guess
  renderStatsTable();
}

function disableToneSelection() {
  const cells = document.querySelectorAll('.table-cell');
  cells.forEach(cell => {
    cell.onclick = null; // Disable clicking
  });
}

function enableToneSelection() {
  const cells = document.querySelectorAll('.table-cell');
  cells.forEach(cell => {
    const tonePair = cell.innerText;
    cell.onclick = () => checkAnswer(tonePair); // Re-enable clicking
  });
}

// Function to render the stats table with gradient background
function renderStatsTable() {
  const tableBody = document.getElementById('stats-table');
  tableBody.innerHTML = ''; // Clear previous table

  initialTones.forEach(initialTone => {
    const row = document.createElement('tr');
    const header = document.createElement('th');
    header.innerText = initialTone;
    row.appendChild(header); // Add row header

    finalTones.forEach(finalTone => {
      const tonePair = `${initialTone},${finalTone}`;
      const cell = document.createElement('td');
      const data = stats[tonePair];

      // Check if there are any tries, and calculate the success percentage
      const percentage = data.tries > 0 ? Math.round((data.success / data.tries) * 100) : 0;
      cell.style.backgroundColor = calculateGradientColor(percentage);
      cell.innerText = `${percentage}%`;

      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// Initialize the game
function initGame() {
  loadStatsFromLocalStorage(); // Load stats from localStorage or initialize if not found
  renderToneOptions();
  const resultMsg = document.getElementById('result-msg');
  resultMsg.classList.add('d-none'); // Hide result message
  renderStatsTable(); // Make sure to render the stats table on load
}

// Set up event listeners
document.getElementById('replay-btn').addEventListener('click', playAudio);
document.getElementById('next-word-btn').addEventListener('click', function() {
  selectRandomWord();
  playAudio();
});

// Initialize game on page load
initGame();

