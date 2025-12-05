---
title: "DISKO 1"
slug: "disko-1"
date: 05/12/2025
category: "Forensics"
author: "Darkraicg492"
difficulty: "Fácil"
archivos:
  - disko-1.dd.gz
summary: "Writeup del desafío DISKO 1 — análisis y extracción de información de un backup de disco."
---

# Desafío
Can you find the flag in this disk image?
Download the disk image here.

# Herramientas
- `gunzip` o `gzip -d` - Para descomprimir el archivo
- `strings` - Para extraer cadenas de texto legibles
- `grep` - Para buscar patrones específicos

## Explicación

El desafío proporciona un archivo comprimido `disko-1.dd.gz` que contiene una imagen de disco. El objetivo es extraer información de esta imagen para encontrar la flag.

### Paso 1: Descomprimir la imagen de disco

Primero, descomprimimos el archivo `.gz`:

```bash
gunzip disko-1.dd.gz
```

O alternativamente:

```bash
gzip -d disko-1.dd.gz
```

Esto generará el archivo `disko-1.dd` (la imagen de disco sin comprimir).

### Paso 2: Extraer cadenas de texto y buscar la flag

Una vez descomprimido, utilizamos `strings` para extraer todas las cadenas de texto legibles del disco, y luego filtramos con `grep` buscando el patrón de la flag:

```bash
strings disko-1.dd | grep -i "picoCTF"
```

El comando `strings` extrae todas las secuencias de caracteres imprimibles del archivo binario, y `grep -i "picoCTF"` busca (ignorando mayúsculas/minúsculas) cualquier línea que contenga "picoCTF", que es el formato típico de las flags en este CTF.

La salida mostrará directamente la flag.

# Notas

Este es un desafío básico de forense digital que introduce el concepto de análisis de imágenes de disco. La técnica de usar `strings` es fundamental en análisis forense, ya que permite recuperar información de texto que puede estar oculta en archivos binarios o sistemas de archivos dañados.

# Referencias
- `strings` manual: `man strings`
- `gzip` documentation: `man gzip`
- `grep` manual: `man grep`