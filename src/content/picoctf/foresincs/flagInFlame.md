---
title: "Flag in Flame"
slug: "flag-in-flame"
date: 30/11/2025
category: "Forensics"
difficulty: "Fácil"
summary: "Decodificar un archivo de logs en Base64 para recuperar una imagen corrupta u oculta."
---

## Desafío
Recibimos el archivo `logs.txt`. A primera vista, parece un bloque de texto ininteligible. Nuestro objetivo es analizar su contenido, reconstruir el archivo original y encontrar la flag oculta en su interior.

## Herramientas
- Terminal (Linux/Bash)
- `base64`
- Conversor Hex a ASCII (CyberChef o terminal)

## Explicación

Comenzamos analizando el archivo `logs.txt`. Al abrirlo con `cat` o un editor de texto, vemos una masa de caracteres alfanuméricos que terminan con el signo igual (`=`). Esto es un indicador clásico de una codificación en **Base64**.

Aunque el enunciado nos da una pista de que es una imagen, en un caso real podríamos verificar los primeros bytes decodificados para ver la "firma" del archivo (Magic Bytes).

Procedemos a decodificar el contenido y guardarlo como una imagen JPG, tal como sospechamos:

```bash
base64 -d logs.txt > decode.jpg
```

Si queremos confirmar que realmente es una imagen válida antes de abrirla, podríamos usar el comando `file decode.jpg`.

Al abrir la imagen `decode.jpg`, nos encontramos con una sorpresa visual: no es una foto normal, o bien contiene texto superpuesto. Observamos una cadena de caracteres que tiene toda la pinta de ser **Hexadecimal** (números del 0-9 y letras de la A-F).

Para obtener la flag, debemos transcribir esa cadena (podemos usar una herramienta OCR de imagen a texto si es muy larga, o copiarla a mano).

Finalmente, tomamos esa cadena hexadecimal y la convertimos a texto plano (ASCII).