list = [9, 9, 2, 3, 1, 4]
x = 0
#for
print("Bucle for")
for num in list:
    print(num)

#while
print("Bucle while")
while x < 10:
    print(x)
    x += 1

print("Break")
for b in list:
    if b == 2:
        break

print("Continue")
for c in list:
    if c == 2:
        continue

print("Pass")
for p in list:
    pass