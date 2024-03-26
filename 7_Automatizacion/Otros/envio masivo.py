import pywhatkit

x = 10
msg = "mensaje "

for i in range(20):
    pywhatkit.sendwhatmsg("+5491168129047", f'{msg}{i}', 16, x, 20, True, 2)
    x += 1
