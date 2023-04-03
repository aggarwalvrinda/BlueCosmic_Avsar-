import csv
from random import randint
from rake_nltk import Rake

with open('dataset.csv', encoding='utf-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    rows = list(csv_reader)

for qno in range(3):
    index = randint(0, len(rows) - 1)
    question = rows[index][0]
    answer = rows[index][1]
    r = Rake()
    r.extract_keywords_from_text(answer)
    print(f"Question {qno+1}: {question}")
    print(f"Answer: {answer}")
    print(f"Keywords: {r.get_ranked_phrases()}\n")