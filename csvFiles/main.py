import csv
import datetime
import os
import re
import requests
from bs4 import BeautifulSoup

URL = "https://sattamatkadpboss.co/"
CSV_FILES = [
    "Kalyan.csv",
    "KalyanNight.csv",
    "MainBazar.csv",
    "MilanDay.csv",
    "MilanNight.csv",
    "RajdhaniDay.csv",
    "RajdhaniNight.csv",
    "TimeBazar.csv"
]

# Mapping file names to display names on the site
DISPLAY_MAP = {
    "Kalyan.csv": "KALYAN",
    "KalyanNight.csv": "KALYAN NIGHT",
    "MainBazar.csv": "MAIN BAZAR",
    "MilanDay.csv": "MILAN DAY",
    "MilanNight.csv": "MILAN NIGHT",
    "RajdhaniDay.csv": "RAJDHANI DAY",
    "RajdhaniNight.csv": "RAJDHANI NIGHT",
    "TimeBazar.csv": "TIME BAZAR",
}

def fetch_results():
    response = requests.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")

    result_map = {}
    for tag in soup.find_all(["div"], class_=["news2", "fix"]):
        name_tag = tag.find("span", style=re.compile("color:.*?"))
        result_tag = tag.find_all("span", style=re.compile("color:black"))

        if name_tag and result_tag:
            name = name_tag.text.strip().upper()
            result_text = result_tag[0].text.strip()

            # Skip if it's loading or incomplete like 123-4
            if result_text.lower() == "loading...":
                continue
            if not re.fullmatch(r"\d{3}-\d{2}-\d{3}", result_text):
                continue

            open_, jodi, close = result_text.split("-")
            result_map[name] = [int(open_), int(jodi), int(close)]
    return result_map

def update_csv(file_name, result):
    file_path = f"csvFiles/{file_name}"
    updated = False
    with open(file_path, "r") as f:
        rows = list(csv.reader(f))

    today = datetime.datetime.now()
    today_row = [str(today.day), str(today.month), str(today.year % 100)]

    for row in rows:
        if row[:3] == today_row:
            total_columns = len(row)

            # Determine number of days in file (each has 3 columns)
            days = (total_columns - 3) // 3

            # Sunday check (6 = Sunday)
            if today.weekday() == 6:
                print("It's Sunday. Skipping update.")
                return

            # Sunday-included file? Skip because it already has 404s
            if days == 7:
                print(f"{file_name} includes Sunday. Skipping.")
                return

            # Which column triplet to update
            col_start = 3 + today.weekday() * 3
            triplet = row[col_start:col_start+3]

            # If triplet is placeholder (404,303,404), update it
            if triplet == ["404", "303", "404"]:
                row[col_start:col_start+3] = list(map(str, result))
                updated = True
            break

    if updated:
        with open(file_path, "w", newline="") as f:
            writer = csv.writer(f)
            writer.writerows(rows)
        print(f"Updated {file_name} with {result}")
    else:
        print(f"No update needed for {file_name}")

def main():
    # Skip if Sunday
    if datetime.datetime.now().weekday() == 6:
        print("Today is Sunday. Script exiting.")
        return

    result_map = fetch_results()

    for file in CSV_FILES:
        display_name = DISPLAY_MAP[file]
        if display_name in result_map:
            update_csv(file, result_map[display_name])
        else:
            print(f"No result found for {file}")

if __name__ == "__main__":
    main()
