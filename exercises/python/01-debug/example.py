from random import randint              # linha 1


def sum_digits(number):                 # linha 4
    digits = []                         # linha 5
    for digit in str(number):           # linha 6
        digits.append(int(digit))       # linha 7
    return sum(digits)                  # linha 8


rand_num = randint(10000, 99999)        # linha 11
print(sum_digits(rand_num))             