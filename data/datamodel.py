import csv
import time
import us
import os
import json

class Poll:

    def __init__(self, _id, party, date, poll_numbers, state = "US"):

        self.date = date
        self.poll_numbers = poll_numbers
        self._id = _id
        self.party = party
        self.state = state

    def display(self):

        print()
        print("Poll from " + self.state + " taken on " + self.date)
        print(self.poll_numbers)
        print()


def parse_from_csv(reader):

    current_poll = ""
    current_state = ""
    current_date = ""
    current_party = ""

    poll_numbers = {}

    result = []

    for row in reader:

        # For header row
        if row[0] == "question_id":
            continue

        # For first poll id
        if current_poll == "":
            current_poll = row[0]
        
        
        # Identify if the poll is the same
        if row[0] != current_poll:
            # note: poll_numbers.copy() provides a shallow copy
            pollObject = Poll(current_poll, current_party, current_date, poll_numbers.copy(), current_state)
            result.append(pollObject)
            
            poll_numbers.clear()

            current_poll = row[0]


        #29 for short candidate name
        #31 for poll number
        current_party = row[28]
        poll_numbers[row[29]] = float(row[31])
        current_state = row[3]
        current_date = row[18]

    return result

# Limits any value to 1 decimal place, prevents drift values
def truncate(x):
    return float('%.1f'%(x))

def create_average_poll(polls, state_name):

    result = Poll(str(len(polls)), "Average", "Average", {}, state_name)

    for poll in polls:
        for key, value in poll.poll_numbers.items():
            if key in result.poll_numbers:
                result.poll_numbers[key] += value
            else:
                result.poll_numbers[key] = value

    for key, value in result.poll_numbers.items():
        result.poll_numbers[key] = truncate(value / len(polls))
    
    return result







delegate_count = {'Iowa': 41, 'New Hampshire': 24, "Nevada": 36, "South Carolina": 54} # "Alabama": 52, "Massachusetts": 91, "Minnesota": 75, "North Carolina": 110, "Oklahoma": 37, "Tennessee": 64, "Texas": 228, "California": 416, "Utah": 29, "Vermont": 16, "Virginia": 99}


reader = ""
polls = []

selected_polls = []

with open("/home/nathan/Documents/Projects/2020-primary-tracker/data/polls.csv", "r") as raw_polls_file:
    reader = csv.reader(raw_polls_file)
    polls = parse_from_csv(reader)


for state in us.states.STATES:

    if state.name not in delegate_count:
        continue

    print("--------\nState: " + state.name)

    for poll in polls:
        if poll.state == state.name and 'Biden' in poll.poll_numbers and len(poll.poll_numbers) > 2:
            if len(selected_polls) < 5:
                selected_polls.append(poll)
            else:
                break

    if len(selected_polls) == 0:
        print("    No polls\n")
        continue
    
    average = create_average_poll(selected_polls, state.name)
    average.display()

    with open(poll.state + '.json', 'w') as json_file:
        json.dump(average.poll_numbers, json_file)

    selected_polls.clear()

