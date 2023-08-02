# 2 - Imprima todos os parágrafos da página https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/

from selenium import webdriver
from selenium.webdriver.common.by import By


firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    search_p = firefox.find_elements(By.TAG_NAME, "p")
    for elem in search_p:
        print(elem.text)
   
scrape("https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/")
