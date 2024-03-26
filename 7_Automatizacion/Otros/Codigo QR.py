#qr "texto a guardar" > archivo donde/como lo vas a guardar

# Importamos la biblioteca
import qrcode



#personalizado
qr = qrcode.QRCode(
    #version
    version=1,
    #eror_correction capacidad de leer por mas que haya algun pedazo dañado
    error_correction = qrcode.constants.ERROR_CORRECT_L,
    #box size = tamaño
    box_size = 30,
    #borde
    border = 2 ,
)
#texto a guardar en el qr
qr.add_data('Some data')
qr.make(fit = True)

#color de relleno y de fondo
img = qr.make_image(fill_color="red", back_color="black")


# Abrimos un archivo en modo escritura que es donde se guardará nuestro código.
img_file = open('binary-coffee.png', 'wb')

# Guardamos nuestro código en el archivo que creamos y lo cerramos
img.save(img_file)

img_file.close()

