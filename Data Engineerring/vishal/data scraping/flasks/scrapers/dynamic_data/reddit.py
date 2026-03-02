import pandas as pd
from bs4 import BeautifulSoup
import requests
def run():
    url="https://www.reddit.com/r/python/top.json"
    headers = {"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"}
    response = requests.get(url,headers= headers)
    print(response.status_code)
    data = response.json()
    print(data["data"])
    main_data= data["data"]
    print(main_data.keys())
    children_data = main_data["children"]
    print(len(children_data))
    20
    name_list = []
    author_list = []
    ups_list = []
    comments_list = []
    link_list = []

    for post in children_data:
        details = post["data"] 
        name_list.append(details.get("name"))
        author_list.append(details.get("author"))
        ups_list.append(details.get("ups"))
        comments_list.append(details.get("num_comments"))
        link_list.append(f"https://www.reddit.com{details.get('permalink')}")

    df = pd.DataFrame({
        "Name": name_list,
        "Author": author_list,
        "Ups": ups_list,
        "Comments": comments_list,
        "Link": link_list
    })

    print(df.head())
    path = "data/api_data/Reddit_data.csv"
    df.to_csv(path, index=False)

    print(" Reddit scraper done")
    return "Reddit_data.csv"
