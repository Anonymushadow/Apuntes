import pyqrcode
from pyqrcode import QRCode

url = pyqrcode.create("http://mundotokusatsu.blogspot.com/")
#nombre y escala escala 
url.svg("MundoT.svg", scale = 8)
