# Challenge: Check if a Number is Prime
# Level: Beginner
# Description: This challenge involves creating a program that checks if a number entered by the user is prime or not.

# Instructions:
# 1. Ask the user to enter a number.
# 2. Create a function that takes the number as an argument.
# 3. Inside the function, check if the number is greater than 1.
# 4. If the number is less than or equal to 1, return False indicating that it is not prime.
# 5. Use a loop to iterate over all numbers from 2 to half of the entered number.
# 6. Check if the number is divisible by any of the numbers in the mentioned range.
# 7. If the number is divisible by any number in the range, return False indicating that it is not prime.
# 8. If the number is not divisible by any number in the range, return True indicating that it is prime.

# Example:
# Number: 7
# Is prime: True

# Function to check if a number is prime
def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number / 2) + 1):
        if number % i == 0:
            return False
    return True

# Asking user for input
user_number = int(input("Enter a number: "))

# Checking if the number is prime
result = is_prime(user_number)

# Displaying the result
print(f"Is prime: {result}")
