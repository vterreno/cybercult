---
title: "RED"
slug: "red"
date: 05/12/2025
category: "Forensics"
author: "Shuailin Pan (LeConjuror)"
difficulty: "Fácil"
archivos:
  - red.png
summary: "Writeup del desafío RED"
---

# Desafío
RED, RED, RED, RED
Download the image: red.png

# Herramientas
- `zsteg` - Herramienta para detección de esteganografía en imágenes PNG y BMP
- `base64` - Para decodificar contenido en Base64

## Explicación

El desafío proporciona una imagen PNG completamente roja llamada `red.png`. A simple vista, la imagen no revela nada, pero sabemos que puede contener información oculta mediante técnicas de esteganografía.

### Paso 1: Descargar la imagen

Primero descargamos el archivo `red.png` desde el enlace proporcionado.

### Paso 2: Análisis con zsteg

Utilizamos la herramienta `zsteg`, que es especializada en detectar datos ocultos en los bits menos significativos (LSB) de imágenes PNG y BMP:

```bash
zsteg red.png
```

La herramienta escanea diferentes canales y métodos de ocultación. Entre los resultados, encontramos una entrada relevante:

```text
b1,rgba,lsb,xy      .. text: "cGljb0NURntyM2RfaXNfbjB0X2NyM2F0MXYzXzUyNDc3MzQ1fQ=="
```

Esto indica que en el canal `b1` (bit 1), utilizando los canales RGBA, con el método LSB (Least Significant Bit) en orden xy, hay un texto codificado.

### Paso 3: Decodificar Base64

La cadena extraída está claramente codificada en Base64 (termina con `==`, que es el padding característico). Para decodificarla:

```bash
echo "cGljb0NURntyM2RfaXNfbjB0X2NyM2F0MXYzXzUyNDc3MzQ1fQ==" | base64 -d
```

Esto nos revelará la flag en texto claro.

# Notas

Este desafío introduce el concepto de esteganografía LSB (Least Significant Bit), una técnica común para ocultar información en imágenes modificando los bits menos significativos de los píxeles, cambios que son imperceptibles al ojo humano.

# Referencias
- zsteg repository: https://github.com/zed-0xff/zsteg
- Instalación: `gem install zsteg`
- LSB Steganography: https://en.wikipedia.org/wiki/Bit_numbering#Least_significant_bit