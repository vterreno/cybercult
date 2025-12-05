---
title: "Corrupted file"
slug: "corrupted-file"
date: 05/12/2025
category: "Forensics"
author: "Yahaya Meddy"
difficulty: "Fácil"
archivos:
  - file
summary: "Writeup del desafío Corrupted file — corrección de archivos corruptos."
---

# Desafío
This file seems broken... or is it? Maybe a couple of bytes could make all the difference. Can you figure out how to bring it back to life? Download the file here.

# Herramientas
- Herramientas principales usadas: `strings`, editor hexadecimal (https://hexed.it/)

## Explicación
El desafío proporciona un archivo corrupto llamado `file`. Lo primero es identificar qué tipo de archivo es. Si ejecutamos:

```bash
strings file
```

Veremos que aparece la cadena `JFIF`, lo que nos indica que se trata de un archivo JPEG.

### Identificación del problema
Los archivos JPEG tienen un encabezado específico que comienza con los bytes mágicos (magic bytes) `FF D8 FF`. Sin embargo, al inspeccionar el archivo con un editor hexadecimal como [hexed.it](https://hexed.it/), podemos ver que los primeros 3 bytes están corruptos:

**Encabezado corrupto:**
```
5C 78 FF
```

**Encabezado correcto (JPEG):**
```
FF D8 FF
```

### Solución
Para reparar el archivo:

1. Abre el archivo `file` en un editor hexadecimal (por ejemplo, https://hexed.it/)
2. Compara con un archivo JPEG válido para identificar el encabezado correcto
3. Modifica los primeros 3 bytes de `5C 78 FF` a `FF D8 FF`
4. Guarda el archivo como `file.jpg`
5. Abre la imagen y encontrarás la bandera

Una vez reparado el archivo, podrás abrirlo como una imagen JPEG normal y visualizar la bandera.

