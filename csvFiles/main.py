import csv
import datetime
import requests
from bs4 import BeautifulSoup
import os

display_name_map = {
    "Kaylan.csv": "KALYAN",
    "KaylanNight.csv": "KALYAN NIGHT",
    "MainBazar.csv": "MAIN BAZAR",
    "MilanDay.csv": "MILAN DAY",
    "MilanNight.csv": "MILAN NIGHT",
    "RajdhaniDay.csv": "RAJDHANI DAY",
    "RajdhaniNight.csv": "RAJDHANI NIGHT",
    "TimeBazar.csv": "TIME BAZAR",
}

csv_files = list(display_name_map.keys())

def is_sunday():
    return datetime.datetime.now().weekday() == 6

def fetch_results():
    url = "https://sattamatkadpboss.co/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    news_blocks = soup.find_all("div", class_="news2")
    result_map = {}
    for block in news_blocks:
        spans = block.find_all("span")
        if not spans or len(spans) < 2:
            continue
        name = spans[0].text.strip().upper()
        result_text = spans[1].text.strip()
        if result_text.lower() == "loading...":
            continue
        parts = result_text.split("-")
        if len(parts) == 3:
            result_map[name] = parts
        elif len(parts) == 2:
            result_map[name] = [parts[0], parts[1], "404"]
    return result_map

def update_csv(file_name, new_result):
    file_path = os.path.join("csvFiles", file_name)
    updated = False
    with open(file_path, "r") as f:
        rows = list(csv.reader(f))
    today = datetime.datetime.now()
    for row in rows:
        try:
            row_date = datetime.date(int("20" + row[2]), int(row[1]), int(row[0]))
        except Exception:
            continue
        if row_date != today.date():
            continue
        day_index = today.weekday()
        if day_index >= 6:
            continue
        start = 3 + day_index * 3
        triplet = row[start:start+3]
        if triplet == ["404", "303", "404"]:
            row[start:start+3] = new_result
            updated = True
            break
    if updated:
        with open(file_path, "w", newline="") as f:
            csv.writer(f).writerows(rows)
        print(f"✅ Updated {file_name}")
    else:
        print(f"No update needed for {file_name}")

def main():
    if is_sunday():
        print("🛑 Today is Sunday. Skipping update.")
        return
    result_map = fetch_results()
    for file in csv_files:
        display_name = display_name_map[file]
        if display_name in result_map:
            update_csv(file, result_map[display_name])

if __name__ == "__main__":
    main()