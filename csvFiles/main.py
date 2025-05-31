import requests
from bs4 import BeautifulSoup
import csv
import datetime
import os

CSV_FILES = [
    "Kaylan.csv",
    "KaylanNight.csv",
    "MainBazar.csv",
    "MilanDay.csv",
    "MilanNight.csv",
    "RajdhaniDay.csv",
    "RajdhaniNight.csv",
    "TimeBazar.csv"
]

DISPLAY_NAMES = {
    "Kaylan.csv": "KALYAN",
    "KaylanNight.csv": "KALYAN NIGHT",
    "MainBazar.csv": "MAIN BAZAR",
    "MilanDay.csv": "MILAN DAY",
    "MilanNight.csv": "MILAN NIGHT",
    "RajdhaniDay.csv": "RAJDHANI DAY",
    "RajdhaniNight.csv": "RAJDHANI NIGHT",
    "TimeBazar.csv": "TIME BAZAR"
}

def fetch_results():
    url = "https://sattamatkadpboss.co/"
    r = requests.get(url)
    r.raise_for_status()
    return BeautifulSoup(r.text, 'html.parser')

def extract_full_result(text):
    parts = text.strip().split('-')
    if len(parts) == 3 and all(p.isdigit() for p in parts):
        return parts[0], parts[1], parts[2]
    return None

def update_csv(file_name, result_triplet):
    today = datetime.datetime.now()
    if today.weekday() == 6:  # Sunday
        return

    with open(file_name, "r") as f:
        rows = list(csv.reader(f))

    updated = False
    for row in rows:
        if len(row) < 4:
            continue

        if row[0:3] == [str(today.day), str(today.month), str(today.year % 100)]:
            col_count = len(row)
            weekday = today.weekday()
            day_index = weekday if col_count == 24 else weekday if col_count == 21 else weekday if weekday < 5 else None
            if day_index is None:
                return

            start = 3 + day_index * 3
            current = row[start:start+3]

            if current == ["404", "303", "404"]:
                row[start:start+3] = result_triplet
                updated = True
            break

    if updated:
        with open(file_name, "w", newline="") as f:
            csv.writer(f).writerows(rows)

def main():
    soup = fetch_results()
    all_blocks = soup.find_all(["div"], class_=["news2", "fix"])
    result_map = {}

    for block in all_blocks:
        spans = block.find_all("span")
        if len(spans) < 2:
            continue
        name = spans[0].get_text(strip=True).upper()
        result_text = spans[1].get_text(strip=True)

        if result_text.lower().startswith("loading") or "-" not in result_text:
            continue

        parsed = extract_full_result(result_text)
        if parsed:
            result_map[name] = parsed

    for file in CSV_FILES:
        display_name = DISPLAY_NAMES.get(file)
        if display_name in result_map:
            update_csv(file, result_map[display_name])

if __name__ == "__main__":
    main()