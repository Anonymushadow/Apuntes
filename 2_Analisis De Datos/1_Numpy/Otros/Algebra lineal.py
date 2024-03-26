import numpy as np

e = 5
print(e)

v = np.array([-4, 8, 5])
print(v)

m = np.array([[1, 8, -9], [3, -6, 7]])
print(m)

print(type(e))
print(type(v))
print(type(m))

ee = np.array([e])

print(type(ee))
print(type(v))
print(type(m))

m.shape
v.shape
ee.shape

print("Vector:")
v.reshape(3, 1)
print(v) 
print("Vector 2:")
v.reshape(1, 3)
print(v) 


print("Matriz:")
m.reshape(2, 3)
print(m) 
print("Matriz 2:")
m.reshape(3, 2)
print(m) 

m1 = np.array([[5, 12, 6], [-3, 0, 14]])
m2 = np.array([[9, 8, 7], [1, 3, -5]])

print("\nSuma de MAtrices:")
print("cuenta: 5 + 9, 12 + 8, 6 + 7")
print("       -3 + 1, 0 + 3, 14 + -5")
print("resultado")
print(m1 + m2)

print("\nResta de MAtrices:")
print("cuenta: 5 - 9, 12 - 8, 6 - 7")
print("       -3 - 1, 0 - 3, 14 - -5")
print("resultado")
print(m1 - m2)

print("\nMultiplicacion de MAtrices:")
print(m1 * m2)

print("\nDivision de MAtrices:")
print(m1 / m2)


print("\nSumar matriz + escalar:")
print("cuenta: 5 + 2, 12 + 2, 6 + 2")
print("resultado")
print(m1 + 2)

print("\ntransponer una matriz:")
print(f'matriz original: {m1}')
print(f'matriz transpuesta: {m1.T}')

print("\ntransponer un vector:")
print(f'vector original: {v}')
print(f'vector transpuesto: {v.reshape(3, 1)}')


print("\nSumar matriz + escalar:")
print("cuenta: -4 + 2, 8 + 2, 5 + 2")
print("resultado")
print(v + 2)

print("\nProducto punto con vectores:")
v2 = np.array([1, -7, 3])
print(f'Vecto 1: {v}')
print(f'Vecto 2: {v2}')
print("resultado")
print(np.dot(v, v2))


print("\nProducto punto con matrices:")
m1 = np.array([[5, 12, 6], [-3, 0, 14]])
m2 = np.array([[2, -5], [8, 0], [3, 0]])
print(f'Matriz 1: {m1}')
print(f'Matriz 2: {m2}')
print("resultado")
print(np.dot(m1, m2))
