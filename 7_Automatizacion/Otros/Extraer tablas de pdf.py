import camelot
#pip install camelot-py
#pip install opencv-python
#pip install Ghostscript

tablas = camelot.read_pdf("SQL.pdf", pages = "1")
print(tabla)
tabla.export("SQL.csv", f = "csv", compress = True)
tabla[0].to_csv("SQL.csv")