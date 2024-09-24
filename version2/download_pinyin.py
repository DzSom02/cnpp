import os
import requests
import time

# Define the base URL for the audio files
base_url = "https://s3contents.chinesepod.com/mp3/pinyin/"

# List of pinyin initials and finals (you can expand this list with more pinyin pairs)
pinyin_pairs = ['zhong', 'cong', 'xian', 'nian']  # Add more pairs here

pinyin_pairs = [
    "a", "ai", "ao", "an", "ang", "e", "ei", "en", "eng", "er", "o", "ou", "yi", "ya", "yao", "ye", "you", 
    "yan", "yang", "yin", "ying", "yong", "wu", "wa", "wai", "wei", "wo", "wan", "wang", "wen", "weng", 
    "yu", "yue", "yuan", "yun", "ba", "bai", "bao", "ban", "bang", "bei", "ben", "beng", "bo", "bi", "biao", 
    "bie", "bian", "bin", "bing", "bu", "pa", "pai", "pao", "pan", "pang", "pei", "pen", "peng", "po", "pou", 
    "pi", "piao", "pie", "pian", "pin", "ping", "pu", "ma", "mai", "mao", "man", "mang", "me", "mei", "men", 
    "meng", "mo", "mou", "mi", "miao", "mie", "miu", "mian", "min", "ming", "mu", "fa", "fan", "fang", "fei", 
    "fen", "feng", "fo", "fou", "fu", "da", "dai", "dao", "dan", "dang", "de", "dei", "den", "deng", "dou", 
    "dong", "di", "diao", "die", "diu", "dian", "ding", "du", "dui", "duo", "duan", "dun", "ta", "tai", "tao", 
    "tan", "tang", "te", "teng", "tou", "tong", "ti", "tiao", "tie", "tian", "ting", "tu", "tui", "tuo", "tuan", 
    "tun", "na", "nai", "nao", "nan", "nang", "ne", "nei", "nen", "neng", "nou", "nong", "ni", "niao", "nie", 
    "niu", "nian", "niang", "nin", "ning", "nu", "nuo", "nuan", "nü", "nüe", "la", "lai", "lao", "lan", "lang", 
    "le", "lei", "leng", "lo", "lou", "long", "li", "lia", "liao", "lie", "liu", "lian", "liang", "lin", "ling", 
    "lu", "luo", "luan", "lun", "lü", "lüe", "za", "zai", "zao", "zan", "zang", "ze", "zei", "zen", "zeng", 
    "zou", "zong", "zi", "zu", "zui", "zuo", "zuan", "zun", "ca", "cai", "cao", "can", "cang", "ce", "cen", 
    "ceng", "cou", "cong", "ci", "cu", "cui", "cuo", "cuan", "cun", "sa", "sai", "sao", "san", "sang", "se", 
    "sen", "seng", "sou", "song", "si", "su", "sui", "suo", "suan", "sun", "zha", "zhai", "zhao", "zhan", 
    "zhang", "zhe", "zhei", "zhen", "zheng", "zhou", "zhong", "zhi", "zhu", "zhua", "zhuai", "zhui", "zhuo", 
    "zhuan", "zhuang", "zhun", "cha", "chai", "chao", "chan", "chang", "che", "chen", "cheng", "chou", 
    "chong", "chi", "chu", "chua", "chuai", "chui", "chuo", "chuan", "chuang", "chun", "sha", "shai", "shao", 
    "shan", "shang", "she", "shen", "sheng", "shou", "shi", "shu", "shua", "shuai", "shui", "shuo", "shuan", 
    "shuang", "shun", "rao", "ran", "rang", "re", "ren", "reng", "rou", "rong", "ri", "ru", "rua", "rui", "ruo", 
    "ruan", "run", "ji", "jia", "jiao", "jie", "jiu", "jian", "jiang", "jin", "jing", "jiong", "ju", "jue", "juan", 
    "jun", "qi", "qia", "qiao", "qie", "qiu", "qian", "qiang", "qin", "qing", "qiong", "qu", "que", "quan", 
    "qun", "xi", "xia", "xiao", "xie", "xiu", "xian", "xiang", "xin", "xing", "xiong", "xu", "xue", "xuan", 
    "xun", "ga", "gai", "gao", "gan", "gang", "ge", "gei", "gen", "geng", "gou", "gong", "gu", "gua", "guai", 
    "gui", "guo", "guan", "guang", "gun", "ka", "kai", "kao", "kan", "kang", "ke", "ken", "keng", "kou", "kong", 
    "ku", "kua", "kuai", "kui", "kuo", "kuan", "kuang", "kun", "ha", "hai", "hao", "han", "hang", "he", "hei", 
    "hen", "heng", "hou", "hong", "hu", "hua", "huai", "hui", "huo", "huan", "huang", "hun"
]


# Define tones
tones = [1, 2, 3, 4]

# Directory to save audio files
save_dir = "./audios"
if not os.path.exists(save_dir):
    os.makedirs(save_dir)

# Function to download the audio
def download_audio(pinyin, tone):
    file_name = f"{pinyin}{tone}.mp3"
    url = f"{base_url}{file_name}"
    response = requests.get(url)
    file_name = f"{pinyin}{tone}.mp3"
    file_path = os.path.join(save_dir, file_name)
    with open(file_path, "wb") as file:
        file.write(response.content)


for pinyin in pinyin_pairs:
    for tone in [1,2,3,4]:
        print(f"Downloading {pinyin}{tone}")
        download_audio(pinyin, tone)
        time.sleep(1)

