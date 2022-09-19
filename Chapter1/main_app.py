import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/musicHistory?year=2000&category=0',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr:nth-child(1) > td.number
#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr:nth-child(1) > td.info > a.title.ellipsis
#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr:nth-child(1) > td.info > a.artist.ellipsis

genie = soup.select('#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr')

for music in genie:
    rank = music.select_one('td.number').text.strip()
    title = music.select_one('td.info > a.title.ellipsis').text.strip()
    artist = music.select_one('td.info > a.artist.ellipsis').text.strip()
    titles = title.replace("TITLE","").strip()

    print(rank,titles,artist)


