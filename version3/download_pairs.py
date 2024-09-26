import os
import requests
import time

# List of Chinese words
chinese_words = [
    "开心", "中国", "今晚", "关闭", "他们", 
    "全新", "全年", "传统", "博客", "值得", 
    "买家", "以前", "产品", "保护", "喜欢", 
    "信息", "个人", "下载", "介绍", "力量", 
    "中心", "中文", "分享", "发现", "休息", 
    "原因", "其实", "如果", "图片", "便宜", 
    "取消", "友情", "你好", "保证", "小姐", 
    "信箱", "内容", "作者", "但是", "困难", 
    "交通", "交流", "多少", "因为", "圈子", 
    "国家", "原则", "媒体", "城市", "合同", 
    "已经", "小时", "减少", "免费", "尺寸", 
    "健康", "地图", "具体", "告诉", "态度"
]

# API URL for generating MP3 files
post_url = "https://ttsmp3.com/makemp3_new.php"
download_base_url = "https://ttsmp3.com/created_mp3/"

# Folder to save the downloaded MP3 files
save_folder = "tone_pairs"
os.makedirs(save_folder, exist_ok=True)

# Iterate over each Chinese word and download the corresponding MP3 file
for word in chinese_words:
    time.sleep(1)
    try:
        # Send POST request to generate MP3 file
        response = requests.post(post_url, data={"msg": word, "lang": "Zhiyu", "source": "ttsmp3"})
        response_data = response.json()

        # Check if there was an error
        if response_data.get("Error") == 0:
            mp3_file = response_data.get("MP3")
            mp3_url = f"{download_base_url}{mp3_file}"

            # Download the MP3 file
            mp3_response = requests.get(mp3_url)
            if mp3_response.status_code == 200:
                # Save the MP3 file locally
                save_path = os.path.join(save_folder, f"{word}.mp3")
                with open(save_path, "wb") as f:
                    f.write(mp3_response.content)
                print(f"Downloaded: {word}.mp3")
            else:
                print(f"Failed to download MP3 for {word}")

        else:
            print(f"Error generating MP3 for {word}: {response_data.get('Error')}")

    except Exception as e:
        print(f"Exception occurred for {word}: {e}")

