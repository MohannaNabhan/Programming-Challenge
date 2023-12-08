# Challenge: Calculate the Average of a List of Numbers
# Level: Beginner
# Description: This Python challenge involves creating a program that calculates the average of a list of numbers entered by the user.

# Instructions:
# 1. Ask the user to enter a list of numbers separated by spaces.
# 2. Create a function that takes the list of numbers as an argument.
# 3. Inside the function, use the split() method to separate the numbers and convert them into a list.
# 4. Use a loop to iterate over the list and sum all the numbers.
# 5. Divide the sum of the numbers by the count of numbers in the list to calculate the average.
# 6. Return the average.

# Example:
# List of numbers: 5 10 15 20
# Average: 12.5

# Function to calculate the average of a list of numbers
def calculate_average(numbers):
    # Convert the space-separated numbers to a list of floats
    number_list = [float(num) for num in numbers.split()]
    
    # Calculate the sum of numbers
    total = sum(number_list)
    
    # Calculate the average
    average = total / len(number_list)
    
    return average

# Asking user for input
user_numbers = input("Enter a list of numbers separated by spaces: ")

# Calculating the average
result = calculate_average(user_numbers)

# Displaying the result
print(f"Average: {result}")
