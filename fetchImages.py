import json
import requests
from unidecode import unidecode
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from PIL import Image
import io
import os
import time

# Load the JSON data
with open('data.json', encoding='utf-8') as f:
    artworks = json.load(f)

# Set up Selenium WebDriver
PATH = "C:\\Users\\SANTE\\Desktop\\code\\art-gallery-vue\\chromedriver.exe"
s = Service(PATH)
wd = webdriver.Chrome(service=s)

def sanitize_filename(filename):
    # Transliterate to ASCII and replace non-alphanumeric characters with underscores
    filename = unidecode(filename)
    return "".join([c if c.isalnum() else "_" for c in filename])

def download_image(download_path, url, file_name):
    try:
        image_content = requests.get(url).content
        image_file = io.BytesIO(image_content)
        image = Image.open(image_file)
        file_path = os.path.join(download_path, file_name)

        with open(file_path, "wb") as f:
            image.save(f, "JPEG")

        print(f"Success: {file_name}")
    except Exception as e:
        print(f'FAILED to download {url} -', e)

# Set the common folder for all images
composition_folder = "C:\\Users\\SANTE\\Desktop\\code\\art-gallery-vue\\art-gallery-app\\public\\images\\"
os.makedirs(composition_folder, exist_ok=True)

# List to store artworks with valid images
valid_artworks = []

for artwork in artworks:
    # Sanitize the composition name for the file name
    sanitized_name = sanitize_filename(artwork['compositionName'])

    # Navigate to the Harvard page
    wd.get(artwork['harvardPage'])
    time.sleep(3)  # Wait for the page to load with delay

    # Find the image element
    try:
        image_element = wd.find_element(By.CSS_SELECTOR, "img.block.mx-auto")
        image_url = image_element.get_attribute('src')

        # Check if the image is the placeholder image
        if 'no_image.png' in image_url:
            print(f'Skipping {artwork["compositionName"]} - No image available')
        else:
            # Adjust the URL to get the full resolution image
            high_res_image_url = image_url.split('?')[0]

            # Download the image
            download_image(composition_folder, high_res_image_url, f"{sanitized_name}.jpg")

            # Update the JSON data with the relative image path
            artwork['imageUrl'] = f"images/{sanitized_name}.jpg"

            # Append to valid artworks list
            valid_artworks.append(artwork)
    except Exception as e:
        print(f'FAILED to find image for {artwork["compositionName"]} -', e)

# Save the updated JSON data with only valid artworks
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(valid_artworks, f, indent=4)

wd.quit()