import pandas as pd
from bs4 import BeautifulSoup
import requests
def run():
    url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    headers = {"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"}
    response = requests.get(url,headers= headers)
    print(response.status_code)
    data = response.json()
    main_data= data
    print(main_data[0].keys())
    name_list = []
    id_list = []
    symbol_list = []
    for main in main_data:
        name_list.append(main["name"])
        id_list.append(main["id"])
        symbol_list.append(main["symbol"])
    
    df = pd.DataFrame({
        "Name": name_list,
        "id": id_list,
        "symbol":symbol_list
    })
    print(df)
    path = "data/api_data/coingeckoh_data.csv"
    df.to_csv(path, index=False)

    print("coingeckoh scraper done")
    return "coingeckoh_data.csv"
