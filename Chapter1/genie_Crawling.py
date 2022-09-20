import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.vuhmz.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}

data_2000 = requests.get('https://www.genie.co.kr/chart/musicHistory?year=2000&category=0', headers=headers)
data_2010 = requests.get('https://www.genie.co.kr/chart/musicHistory?year=2010&category=0', headers=headers)
data_2020 = requests.get('https://www.genie.co.kr/chart/musicHistory?year=2020&category=0', headers=headers)

soup_2000 = BeautifulSoup(data_2000.text, 'html.parser')
genie_2000 = soup_2000.select('#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr')
soup_2010 = BeautifulSoup(data_2010.text, 'html.parser')
genie_2010 = soup_2010.select('#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr')
soup_2020 = BeautifulSoup(data_2020.text, 'html.parser')
genie_2020 = soup_2020.select('#body-content > div.songlist-box > div.music-list-wrap > table > tbody > tr')

for music_2000 in genie_2000:
    rank_2000 = music_2000.select_one('td.number').text.strip()
    titles_2000 = music_2000.select_one('td.info > a.title.ellipsis').text.strip()
    artist_2000 = music_2000.select_one('td.info > a.artist.ellipsis').text.strip()
    title_2000 = titles_2000.replace("TITLE", "").strip()
    doc = {'rank': rank_2000, 'title': title_2000, 'artist': artist_2000}
    db.genie_2000.insert_one(doc)

for music_2010 in genie_2010:
    rank_2010 = music_2010.select_one('td.number').text.strip()
    titles_2010 = music_2010.select_one('td.info > a.title.ellipsis').text.strip()
    artist_2010 = music_2010.select_one('td.info > a.artist.ellipsis').text.strip()
    title_2010 = titles_2010.replace("TITLE", "").strip()
    doc = {'rank': rank_2010, 'title': title_2010, 'artist': artist_2010}
    db.genie_2010.insert_one(doc)

for music_2020 in genie_2020:
    rank_2020 = music_2020.select_one('td.number').text.strip()
    titles_2020 = music_2020.select_one('td.info > a.title.ellipsis').text.strip()
    artist_2020 = music_2020.select_one('td.info > a.artist.ellipsis').text.strip()
    title_2020 = titles_2020.replace("TITLE", "").strip()
    doc = {'rank': rank_2020, 'title': title_2020, 'artist': artist_2020}
    db.genie_2020.insert_one(doc)
