# 3 - Utilizando a ferramenta Selenium, no site https://diolinux.com.br/, faça a extração dos campos título e link para cada post da página inicial.

from selenium import webdriver
from selenium.webdriver.common.by import By


firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)
  # var de apoio para pegar os livros de todas as páginas:
    posts = []
    # Itera entre os elementos com essa classe
    for post in firefox.find_elements(By.CLASS_NAME, "post-title"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        new_item["title"] = (
            post.find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_item["link"] = (
            post.find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        posts.append(new_item)
    print(posts)
   
scrape("https://diolinux.com.br/")
