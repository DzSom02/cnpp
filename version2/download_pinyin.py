import os
import requests
import time

# Define the base URL for the audio files
base_url = "https://resources.allsetlearning.com/pronwiki/resources/pinyin-audio/"

# List of pinyin initials and finals (you can expand this list with more pinyin pairs)
pinyin_pairs = ['zhong', 'cong', 'xian', 'nian']  # Add more pairs here

pinyin_pairs = [
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

