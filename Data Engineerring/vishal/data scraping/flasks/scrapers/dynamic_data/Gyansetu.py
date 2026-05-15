import pandas as pd
import requests
from bs4 import BeautifulSoup
def run():
    url="https://gyansetu.codroidhub.com/api/feedbacks"
    headers={
    "User Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers = headers)
    print(response)
    print(response.content)
    data=response.json()
    print(type(data))
    print(data[0])
    main_data=data[0]
    main_data.keys()
    id_data=main_data["_id"]
    print(len(id_data))
    name_list = []
    unique_id_list = []

    for id in id_data:
    # print(saif)
        name_list.append(id[0])
        unique_id_list.append(id[0])
    
    df = pd.DataFrame({
        "Name": name_list,
        "Unique_Id": unique_id_list
    })
    print(df)
    path = "data/api_data/Gyansetu_data.csv"
    df.to_csv(path, index=False)

    print(" Gyansetu scraper done")
    return "Gyansetu_data.csv"

