from email.message import EmailMessage
import ssl
import smtplib

email_emisor = "claudelnahuel22@gmail.com"
email_password = "ekthovyqnolnzygw"
email_receptor = "nahuelclaudel2@gmail.com"

asunto = "Revisa mi mensaje"
cuerpo = """
Este es mi mensaje
"""

em = EmailMessage()
em["From"] = email_emisor
em["To"] = email_receptor
em["Subject"] = asunto
em.set_content(cuerpo)

contexto = ssl.create_default_context()

#servidor, puerto, contexto
with smtplib.SMTP_SSL("smtp.gmail.com", 465, context = contexto) as smtp:
    smtp.login(email_emisor, email_password)
    smtp.sendmail(email_emisor, email_receptor, em.as_string())
