import pandas as pd
from bs4 import BeautifulSoup
import requests
def run():
    url="https://api.github.com/users/torvalds/repos"
    headers = {"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"}
    response = requests.get(url,headers= headers)
    response.status_code
    200
    data = response.json()
    main_data= data
    main_data[0].keys()  
    name_list = []
    id_list = []
    full_name_list = []
    for main in main_data:
        name_list.append(main["name"])
        id_list.append(main["id"])
        full_name_list.append(main["full_name"])
    df = pd.DataFrame({
        "Name": name_list,
        "id": id_list,
        "full_name":full_name_list,
  })
    df
    path = "data/api_data/Github_data.csv"
    df.to_csv(path, index=False)

    print(" Github scraper done")
    return "Github_data.csv"

