# Challenge: Calculate the Area of a Triangle
# Level: Beginner
# Description: This challenge involves creating a program that calculates the area of a triangle given its base and height.

# Instructions:
# 1. Ask the user to enter the base and height of the triangle.
# 2. Create a function that takes the base and height as arguments.
# 3. Inside the function, multiply the base by the height and divide the result by 2 to calculate the area of the triangle.
# 4. Return the area of the triangle.

# Example:
# Base: 5
# Height: 3
# Triangle Area: 7.5

# Function to calculate triangle area
def calculate_triangle_area(base, height):
    area = (base * height) / 2
    return area

# Asking user for input
base = float(input("Enter the base of the triangle: "))
height = float(input("Enter the height of the triangle: "))

# Calculating and displaying the area
triangle_area = calculate_triangle_area(base, height)
print(f"Triangle Area: {triangle_area}")
