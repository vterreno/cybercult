---
title: "Riddle Registry"
slug: "riddle-registry"
date: 11/04/2025
category: "Forensics"
author: "Prince Niyonshuti N."
difficulty: "Fácil"
archivos:
  - confidential.pdf
summary: "Writeup del desafío Riddle Registry — extracción de la flag desde metadatos de un PDF."
---

# Desafío
Hi, intrepid investigator! 📄🔍 You've stumbled upon a peculiar PDF filled with what seems like nothing more than garbled nonsense. But beware! Not everything is as it appears. Amidst the chaos lies a hidden treasure—an elusive flag waiting to be uncovered.

Find the PDF file here Hidden Confidential Document and uncover the flag within the metadata.

# Herramientas
- Herramientas principales usadas: `strings`, `exiftool`

## Explicación
El desafío proporciona un PDF que, al copiar su contenido, no muestra ninguna bandera evidente. Por eso, lo lógico es inspeccionar los metadatos del documento. Para ello podemos usar herramientas como `exiftool` y `strings`. Si ejecutamos:

```bash
exiftool confidential.pdf
```

veremos que el campo Author contiene la siguiente cadena (ejemplo de salida):

```text
Author                        : cGljb0NURntwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV80MjQ0MGM3ZH0=
```

Si en su lugar usamos `strings` sobre el archivo, el campo aparece así:

```text
/Author (cGljb0NURntwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV80MjQ0MGM3ZH0\075)
```

Fíjate en el sufijo `\075`: es la notación octal para el carácter `=`. Ese signo se utiliza como relleno en Base64, por lo que la cadena anterior es una cadena codificada en Base64. Decodificándola (por ejemplo con `base64 -d`) obtendremos la bandera. Por ejemplo:

```bash
# extraer la cadena y decodificar (ejemplo con pipeline)
exiftool -Author confidential.pdf | sed -E 's/.*: //g' | tr -d '\n' | base64 -d
```

O, si usamos `strings` y hay el sufijo octal:

```bash
strings confidential.pdf | grep Author | sed -E 's/.*\((.*)\\075\).*/\1/g' | base64 -d
```

La salida será la bandera en texto claro.

# Notas / Post-mortem

# Referencias
- `exiftool` manual: https://exiftool.org/
- `strings` (binutils)
- Base64 decoding: `base64 -d` (GNU coreutils / macOS `base64 -D` dependiendo del sistema)