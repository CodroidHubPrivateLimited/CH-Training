from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time


def fetch_data():

    chrome_options = Options()
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=chrome_options
    )

    url = "https://www.ajio.com/search/?text=shirts"
    driver.get(url)

    time.sleep(6)

    products = driver.find_elements(By.CLASS_NAME, "item")

    headers = ["Product Name", "Price"]
    rows = []

    for item in products:
        try:
            name = item.find_element(By.CLASS_NAME, "nameCls").text
            price = item.find_element(By.CLASS_NAME, "price").text
            rows.append([name, price])
        except:
            pass

    driver.quit()
    return headers, rows
