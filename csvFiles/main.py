import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import csv
import os

# Mapping filenames to display names
file_display_map = {
    "Kalyan.csv": "KALYAN",
    "KalyanNight.csv": "KALYAN NIGHT",
    "MainBazar.csv": "MAIN BAZAR",
    "MilanDay.csv": "MILAN DAY",
    "MilanNight.csv": "MILAN NIGHT",
    "RajdhaniDay.csv": "RAJDHANI DAY",
    "RajdhaniNight.csv": "RAJDHANI NIGHT",
    "TimeBazar.csv": "TIME BAZAR",
}

# Get today's date and the Monday of this week
today = datetime.now()
monday = today - timedelta(days=today.weekday())

# Load website
url = "https://sattamatkadpboss.co"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Extract all result blocks
results = {}
for div in soup.find_all("div", class_="news2"):
    spans = div.find_all("span")
    if len(spans) >= 2:
        name = spans[0].text.strip().upper()
        value = spans[1].text.strip()
        if name and value.count("-") == 2:
            results[name] = value

# Process each CSV file
csv_dir = "csvFiles"
for file_name, display_name in file_display_map.items():
    file_path = os.path.join(csv_dir, file_name)
    updated = False

    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, "r") as f:
        lines = list(csv.reader(f))

    # Search from this week's Monday onwards
    for row in lines:
        try:
            row_date = datetime.strptime(f"{int(row[0])}-{int(row[1])}-{int(row[2])}", "%d-%m-%y")
        except (ValueError, IndexError):
            continue

        if row_date >= monday:
            # Check 3-digit triplets starting at index 3, step by 3
            for i in range(3, len(row)-2, 3):
                if row[i:i+3] == ['404', '303', '404']:
                    if display_name in results:
                        parts = results[display_name].split("-")
                        if len(parts) == 3:
                            row[i:i+3] = parts
                            updated = True
                            print(f"Updated {file_name} on {row_date.date()} with {results[display_name]}")
                            break
            if updated:
                break

    if updated:
        with open(file_path, "w", newline='') as f:
            writer = csv.writer(f)
            writer.writerows(lines)
    else:
        print(f"No update needed for {file_name}")
