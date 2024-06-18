import json
import os
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from PIL import Image
from io import BytesIO

# Load the data
with open('data.json', 'r') as file:
    data = json.load(file)

# Set up Selenium
service = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in headless mode
driver = webdriver.Chrome(service=service, options=options)

def fetch_image_url(query):
    search_url = f"https://www.google.com/search?tbm=isch&q={query}"
    driver.get(search_url)
    # Wait for the images to load and get the first image
    driver.implicitly_wait(5)
    images = driver.find_elements(By.CSS_SELECTOR, 'img')
    if images:
        return images[0].get_attribute('src')
    return None

def download_image(url, filename):
    try:
        response = requests.get(url)
        image = Image.open(BytesIO(response.content))
        image.save(filename)
        print(f"Downloaded image for {filename}")
    except Exception as e:
        print(f"Error downloading image from {url}: {e}")

# Ensure the 'images' directory exists
os.makedirs('images', exist_ok=True)

# Process each item in the data
for item in data:
    composition_name = item['compositionName']
    author = item['author']
    query = f"{composition_name} by {author}"
    print(f"Fetching image for '{query}'...")
    image_url = fetch_image_url(query)
    if image_url:
        # Replace invalid filename characters with underscores
        safe_file_name = "".join([c if c.isalnum() else "_" for c in composition_name])
        file_path = os.path.join('images', f"{safe_file_name}.jpg")
        download_image(image_url, file_path)
        item['imageUrl'] = file_path
    else:
        item['imageUrl'] = None

# Save the updated data
with open('updated_data.json', 'w') as file:
    json.dump(data, file, indent=2)

# Close the Selenium driver
driver.quit()

print("All images fetched and data updated.")