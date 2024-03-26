import cv2
import numpy as np

#activar la camara
capture = cv2.VideoCapture(0)

while (capture.isOpenes()):
    ret, frame = capture.read()
    #al tocar la s salimos de la camara
    if (cv2.waitKey(1) == ord("s")):
        break

    #crear detector qr
    qrDetector = cv2.QRCodeDetector()
    data, bbox, rectifiedImage = qrDetector.detectAndDecore(frame)

    #si el codigo tiene data la imprimimos 
    if len(data) > 0:
        print(f'Dato: {data}')
        cv2.imshow(f'webcam', rectifiedImage)
    else:
        cv2.imshow("webcam", frame)

capture.release()
cv2.destroyAllWindows