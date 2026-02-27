import requests
import pandas as pd
from bs4 import BeautifulSoup
def run():
    url = "https://codroidhub.com/api/testimonials"

    headers = {
    "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(url, headers=headers)

    print(type(response.content))

    data = response.json()

    main_data = data["testimonials"]

    print(type(main_data))

    id_list1 = []
    name_list1 = []
    role_list1 = []
    company_list1 = []

    for item in main_data:
        id_list1.append(item.get("id"))
        name_list1.append(item.get("name"))
        role_list1.append(item.get("role"))
        company_list1.append(item.get("company"))

    df = pd.DataFrame({
        "id": id_list1,
        "name": name_list1,
        "role": role_list1,
        "company": company_list1
    })

    print(df)
    path = "data/api_data/codroidHub_data.csv"
    df.to_csv(path, index=False)

    print("codroidHub scraper done")
    return "codroidHub_data.csv"